
from pathlib import Path
import json
import tensorflow as tf

BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "Model" / "best_plantvillage_finetuned.keras"
CLASS_NAMES_PATH = BASE_DIR / "Model" / "class_names.json"

model = tf.keras.models.load_model(MODEL_PATH)

print("=" * 60)
print("MODEL PREPROCESSING LAYERS")
print("=" * 60)

for layer in model.layers:
    print(f"\nLayer name: {layer.name}")
    print(f"Layer type: {layer.__class__.__name__}")

    if layer.name in ["augmentation", "true_divide", "subtract"]:
        print("Config:")
        print(layer.get_config())

print("\n" + "=" * 60)
print("CLASS NAMES")
print("=" * 60)

with open(CLASS_NAMES_PATH, "r", encoding="utf-8") as file:
    class_names = json.load(file)

print(json.dumps(class_names, indent=2))
print("\nNumber of classes:", len(class_names))
print("\nFINAL LAYER CONFIG:")
print(model.layers[-1].get_config())

print("\nALL TOP-LEVEL LAYERS:")
for layer in model.layers:
    print(layer.name, layer.__class__.__name__)