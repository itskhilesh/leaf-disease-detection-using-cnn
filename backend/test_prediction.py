
from PIL import Image
from services.model_service import predict_disease

# Enter the path of a leaf image you want to test
image_path = input("Enter leaf image path: ").strip().strip('"')

# Open the image
image = Image.open(image_path)

# Run CNN prediction
result = predict_disease(image)

# Display result
print("\n" + "=" * 40)
print("       PLANT DISEASE PREDICTION")
print("=" * 40)

print(f"Crop       : {result['crop']}")
print(f"Disease    : {result['disease']}")
print(f"Status     : {result['status']}")
print(f"Confidence : {result['confidence']}%")

print("\nTop Predictions:")
for i, prediction in enumerate(result["top_predictions"], start=1):
    print(
        f"{i}. {prediction['crop']} - {prediction['disease']} "
        f"({prediction['confidence']}%)"
    )

print("=" * 40)
