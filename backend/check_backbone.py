from pathlib import Path
import tensorflow as tf

BASE_DIR = Path(__file__).resolve().parent

MODEL_PATH = BASE_DIR / "Model" / "best_plantvillage_finetuned.keras"

model = tf.keras.models.load_model(MODEL_PATH)

backbone = model.get_layer("mobilenetv2_1.00_224")

print("\nBackbone layers:\n")

for layer in backbone.layers:
    print(layer.name, layer.__class__.__name__, layer.get_config())