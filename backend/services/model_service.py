
import json
from pathlib import Path

import numpy as np
import tensorflow as tf
from PIL import Image


# ==========================================
# PATHS
# ==========================================

BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_PATH = BASE_DIR / "Model" / "best_plantvillage_finetuned.keras"
CLASS_NAMES_PATH = BASE_DIR / "Model" / "class_names.json"

IMAGE_SIZE = (224, 224)


# ==========================================
# LOAD MODEL & CLASS NAMES
# ==========================================

print("Loading plant disease CNN model...")

model = tf.keras.models.load_model(MODEL_PATH)

with open(CLASS_NAMES_PATH, "r", encoding="utf-8") as file:
    class_names = json.load(file)

print("Model loaded successfully!")
print(f"Total classes: {len(class_names)}")


# ==========================================
# FORMAT PREDICTION LABEL
# ==========================================

def format_label(raw_label):
    if "___" in raw_label:
        crop, disease = raw_label.split("___", 1)
    else:
        crop, disease = raw_label, "Unknown"

    crop = crop.replace("_", " ").replace(",", ", ").strip()
    disease = disease.replace("_", " ").strip()

    return crop, disease


# ==========================================
# IMAGE PREPROCESSING
# ==========================================

def preprocess_image(image):
    image = image.convert("RGB")
    image = image.resize(IMAGE_SIZE)

    image_array = tf.keras.utils.img_to_array(image)

    # Add batch dimension: (224, 224, 3) -> (1, 224, 224, 3)
    image_array = np.expand_dims(image_array, axis=0)

    # Do NOT manually normalize here.
    # The model contains MobileNetV2 preprocessing.

    return image_array


# ==========================================
# PREDICTION
# ==========================================

def predict_disease(image, top_k=3):
    if image is None:
        raise ValueError("No image was provided.")

    image_array = preprocess_image(image)

    # Run the model
    probabilities = model(image_array, training=False).numpy()[0]

    # Get highest probability prediction
    top_indices = np.argsort(probabilities)[::-1][:top_k]

    predictions = []

    for index in top_indices:
        raw_label = class_names[int(index)]
        crop, disease = format_label(raw_label)

        score = float(probabilities[index])

        predictions.append({
            "crop": crop,
            "disease": disease,
            "confidence": round(score * 100, 2),
            "raw_label": raw_label
        })

    best_prediction = predictions[0]

    is_healthy = "healthy" in best_prediction["disease"].lower()

    result = {
        "crop": best_prediction["crop"],
        "disease": best_prediction["disease"],
        "is_healthy": is_healthy,
        "status": "Healthy" if is_healthy else "Disease Detected",
        "confidence": best_prediction["confidence"],
        "top_predictions": predictions
    }

    return result
