from services.environment_service import analyze_environment

# Simulated sensor readings (not actual sensor measurements)
sensor_data = {
    "soil_moisture": 32,
    "temperature": 29.4,
    "humidity": 78
}

# Simulate a CNN prediction
predicted_class = "Tomato___Early_blight"

result = analyze_environment(
    predicted_class,
    sensor_data
)

print(result)