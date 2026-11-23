from pathlib import Path
import tensorflow as tf

# Find backend directory automatically
BASE_DIR = Path(__file__).resolve().parent

# Correct model location
MODEL_PATH = BASE_DIR / "Model" / "best_plantvillage_finetuned.keras"

print("Loading trained model...")
print("Model path:", MODEL_PATH)

model = tf.keras.models.load_model(MODEL_PATH)

print("\n✅ Model loaded successfully!")

print("\nInput shape:")
print(model.input_shape)

print("\nOutput shape:")
print(model.output_shape)

print("\nModel summary:")
model.summary()