MAX_IMAGE_SIZE = 10 * 1024 * 1024  # 10 MB
from io import BytesIO
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, File, HTTPException, UploadFile
from PIL import Image, UnidentifiedImageError
from pydantic import BaseModel
from services.environment_service import analyze_environment
from services.disease_service import get_disease_profile
from services.model_service import predict_disease, get_model_status
class TopPrediction(BaseModel):
    crop: str
    disease: str
    confidence: float
    raw_label: str

class PredictionResult(BaseModel):
    crop: str
    disease: str
    is_healthy: bool
    status: str
    confidence: float
    top_predictions: list[TopPrediction]

class PredictionResponse(BaseModel):
    filename: str
    prediction: PredictionResult
    disease_profile: dict | None = None
class SensorData(BaseModel):
    temperature: float
    humidity: float
    soil_moisture: float
    soil_temperature: float | None = None

# ==========================================
# FASTAPI APPLICATION
# ==========================================

app = FastAPI(
    title="Plant Disease Detection API",
    description="CNN-based plant disease detection backend",
    version="1.0.0"
)
# ==========================================
# CORS CONFIGURATION
# ==========================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "https://leaf-disease-detection-using-cnn.vercel.app",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================================
# HOME / HEALTH CHECK
# ==========================================

@app.get("/")
def home():
    return {
        "message": "Plant Disease Detection API is running 🌱",
        "status": "online"
    }

@app.get("/health")
def health_check():
    model_status = get_model_status()

    return {
        "api_status": "online",
        "model_status": "ready" if model_status["model_loaded"] else "not_loaded",
        "details": model_status
    }

latest_sensor_data: SensorData | None = None


@app.post("/sensors", tags=["Sensors"])
def receive_sensor_data(data: SensorData):
    global latest_sensor_data

    latest_sensor_data = data

    return {
        "status": "success",
        "message": "Sensor data received successfully",
        "sensor_data": data
    }

@app.get("/sensors/latest", tags=["Sensors"])
def get_latest_sensor_data():
    if latest_sensor_data is None:
        return {
            "status": "no_data",
            "message": "No sensor data received yet"
        }

    return {
        "status": "success",
        "sensor_data": latest_sensor_data
    }

@app.get("/environment/analyze", tags=["Environmental Analysis"])
def analyze_disease_environment(raw_label: str):

    if latest_sensor_data is None:
        return {
            "status": "no_sensor_data",
            "message": "No sensor readings available. Send data to /sensors first."
        }

    disease_profile = get_disease_profile(raw_label)

    if disease_profile is None:
        return {
            "status": "profile_not_found",
            "message": "No disease profile found for the provided label.",
            "raw_label": raw_label
        }

    analysis = analyze_environment(
        latest_sensor_data,
        disease_profile
    )

    return {
        "status": "success",
        "raw_label": raw_label,
        "disease_profile": disease_profile,
        "sensor_data": latest_sensor_data,
        "environment_analysis": analysis
    }
# ==========================================
# IMAGE PREDICTION ENDPOINT
# ==========================================


@app.post(
    "/predict",
    response_model=PredictionResponse,
    summary="Predict plant disease from a leaf image",
    tags=["Prediction"]
)
async def predict(file: UploadFile = File(...)):

    # 1. Check file type
    if not file.content_type or not file.content_type.startswith("image/"):
        raise HTTPException(
            status_code=400,
            detail="Please upload a valid image file."
        )

    # 2. Read uploaded file
    image_bytes = await file.read()

    # 3. Check file size
    if len(image_bytes) > MAX_IMAGE_SIZE:
        raise HTTPException(
            status_code=413,
            detail="Image is too large. Maximum size is 10 MB."
        )

    if len(image_bytes) == 0:
        raise HTTPException(
            status_code=400,
            detail="Uploaded file is empty."
        )

    # 4. Validate and open image
    try:
        image = Image.open(BytesIO(image_bytes))
        image.verify()

        # Reopen image after verify()
        image = Image.open(BytesIO(image_bytes)).convert("RGB")

    except (UnidentifiedImageError, OSError):
        raise HTTPException(
            status_code=400,
            detail="Invalid or corrupted image file."
        )

    # 5. Run CNN prediction
    try:
        result = predict_disease(image)

        disease_profile = get_disease_profile(
            result["top_predictions"][0]["raw_label"]
        )

        return {
            "filename": file.filename,
            "prediction": result,
            "disease_profile": disease_profile
        }

    except Exception:
        raise HTTPException(
            status_code=500,
            detail="An internal error occurred during prediction."
        )
