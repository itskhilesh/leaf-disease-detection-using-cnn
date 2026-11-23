
# environment_service.py

from knowledge.disease_profiles import DISEASE_PROFILES


def validate_sensor_data(sensor_data):
    """
    Validate the sensor readings received from Arduino.
    """

    required_fields = [
        "soil_moisture",
        "temperature",
        "humidity"
    ]

    for field in required_fields:
        if field not in sensor_data:
            return False, f"Missing field: {field}"

    moisture = sensor_data["soil_moisture"]
    temperature = sensor_data["temperature"]
    humidity = sensor_data["humidity"]

    # Ensure values are numeric (but not booleans)
    values = {
        "soil_moisture": moisture,
        "temperature": temperature,
        "humidity": humidity
    }

    for name, value in values.items():
        if isinstance(value, bool) or not isinstance(value, (int, float)):
            return False, f"{name} must be a numeric value"

    # Basic sanity checks
    if not 0 <= moisture <= 100:
        return False, "Soil moisture must be between 0 and 100"

    if not -10 <= temperature <= 60:
        return False, "Temperature reading is outside the accepted range"

    if not 0 <= humidity <= 100:
        return False, "Humidity must be between 0 and 100"

    return True, "Sensor readings are valid"


def get_factor_relevance(profile):
    """
    Explain how relevant each sensor is to the disease.
    These labels are provisional knowledge metadata.
    They are not risk scores.
    """

    factors = profile.get("factors", {})

    descriptions = {
        "high": "Important environmental factor to investigate",
        "medium": "May provide useful environmental context",
        "low": "Limited or indirect relevance",
        "unknown": "Disease-specific relationship has not been established in our knowledge base"
    }

    result = {}

    for factor, relevance in factors.items():
        result[factor] = {
            "relevance": relevance,
            "description": descriptions.get(
                relevance,
                "Relevance not defined"
            )
        }

    return result


def analyze_environment(
    predicted_class,
    sensor_data
):
    """
    Main environmental intelligence function.

    Inputs:
        predicted_class: CNN predicted class name
        sensor_data: dictionary containing moisture,
                     temperature, and humidity

    Output:
        Structured environmental context
    """

    # Step 1: Validate sensor readings
    valid, message = validate_sensor_data(sensor_data)

    if not valid:
        return {
            "valid": False,
            "error": message
        }

    # Step 2: Find disease knowledge profile
    profile = DISEASE_PROFILES.get(predicted_class)

    # Step 3: If disease profile is unavailable
    if profile is None:
        return {
            "valid": True,
            "profile_found": False,
            "predicted_class": predicted_class,
            "sensor_data": sensor_data,
            "environmental_assessment": "Not available",
            "message": (
                "Sensor readings are valid, but no environmental "
                "profile is available for this predicted class."
            )
        }

    # Step 4: Get factor relevance
    relevance = get_factor_relevance(profile)

    # Step 5: Prepare environmental context
    return {
        "valid": True,
        "profile_found": True,

        "crop": profile["crop"],
        "disease": profile["disease"],
        "disease_type": profile["type"],

        "sensor_data": {
            "soil_moisture": sensor_data["soil_moisture"],
            "temperature": sensor_data["temperature"],
            "humidity": sensor_data["humidity"]
        },

        "factor_relevance": relevance,

        "environmental_assessment": (
            "Environmental readings collected. "
            "Disease-specific environmental risk is not calculated "
            "until verified thresholds and research rules are added."
        ),

        "risk_score": None,
        "risk_level": "not_assessed"
    }
