MAX_IMAGE_SIZE = 10 * 1024 * 1024  # 10 MB
from io import BytesIO
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, File, HTTPException, UploadFile
from PIL import Image, UnidentifiedImageError

from services.model_service import predict_disease, get_model_status


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
# ==========================================
# IMAGE PREDICTION ENDPOINT
# ==========================================


@app.post("/predict")
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

        return {
            "filename": file.filename,
            "prediction": result
        }

    except Exception:
        raise HTTPException(
            status_code=500,
            detail="An internal error occurred during prediction."
        )
