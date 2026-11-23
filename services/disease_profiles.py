
# disease_profiles.py

"""
Plant disease environmental knowledge base.

This file stores the environmental factors relevant to diseases.
It does NOT contain fabricated disease probability thresholds.

Environmental relevance:
- high: factor is an important part of disease/environment research
- medium: factor may provide useful context
- low: limited or indirect relevance
- unknown: not established in our current knowledge base
"""

DISEASE_PROFILES = {

    # =========================
    # APPLE
    # =========================

    "Apple___Apple_scab": {
        "crop": "Apple",
        "disease": "Apple Scab",
        "type": "fungal",
        "factors": {
            "temperature": "high",
            "humidity": "high",
            "soil_moisture": "low"
        }
    },

    "Apple___Black_rot": {
        "crop": "Apple",
        "disease": "Black Rot",
        "type": "fungal",
        "factors": {
            "temperature": "medium",
            "humidity": "medium",
            "soil_moisture": "low"
        }
    },

    "Apple___Cedar_apple_rust": {
        "crop": "Apple",
        "disease": "Cedar Apple Rust",
        "type": "fungal",
        "factors": {
            "temperature": "medium",
            "humidity": "high",
            "soil_moisture": "low"
        }
    },

    # =========================
    # CHERRY
    # =========================

    "Cherry___Powdery_mildew": {
        "crop": "Cherry",
        "disease": "Powdery Mildew",
        "type": "fungal",
        "factors": {
            "temperature": "high",
            "humidity": "medium",
            "soil_moisture": "low"
        }
    },

    # =========================
    # CORN
    # =========================

    "Corn___Cercospora_leaf_spot Gray_leaf_spot": {
        "crop": "Corn",
        "disease": "Gray Leaf Spot",
        "type": "fungal",
        "factors": {
            "temperature": "medium",
            "humidity": "high",
            "soil_moisture": "low"
        }
    },

    "Corn___Common_rust": {
        "crop": "Corn",
        "disease": "Common Rust",
        "type": "fungal",
        "factors": {
            "temperature": "medium",
            "humidity": "high",
            "soil_moisture": "low"
        }
    },

    "Corn___Northern_Leaf_Blight": {
        "crop": "Corn",
        "disease": "Northern Leaf Blight",
        "type": "fungal",
        "factors": {
            "temperature": "high",
            "humidity": "high",
            "soil_moisture": "low"
        }
    },

    # =========================
    # GRAPE
    # =========================

    "Grape___Black_rot": {
        "crop": "Grape",
        "disease": "Black Rot",
        "type": "fungal",
        "factors": {
            "temperature": "medium",
            "humidity": "high",
            "soil_moisture": "low"
        }
    },

    "Grape___Esca_(Black_Measles)": {
        "crop": "Grape",
        "disease": "Esca (Black Measles)",
        "type": "fungal_complex",
        "factors": {
            "temperature": "unknown",
            "humidity": "unknown",
            "soil_moisture": "medium"
        }
    },

    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": {
        "crop": "Grape",
        "disease": "Leaf Blight",
        "type": "fungal",
        "factors": {
            "temperature": "medium",
            "humidity": "high",
            "soil_moisture": "low"
        }
    },

    # =========================
    # PEACH
    # =========================

    "Peach___Bacterial_spot": {
        "crop": "Peach",
        "disease": "Bacterial Spot",
        "type": "bacterial",
        "factors": {
            "temperature": "medium",
            "humidity": "medium",
            "soil_moisture": "low"
        }
    },

    # =========================
    # BELL PEPPER
    # =========================

    "Pepper,_bell___Bacterial_spot": {
        "crop": "Bell Pepper",
        "disease": "Bacterial Spot",
        "type": "bacterial",
        "factors": {
            "temperature": "medium",
            "humidity": "medium",
            "soil_moisture": "low"
        }
    },

    # =========================
    # POTATO
    # =========================

    "Potato___Early_blight": {
        "crop": "Potato",
        "disease": "Early Blight",
        "type": "fungal",
        "factors": {
            "temperature": "high",
            "humidity": "medium",
            "soil_moisture": "low"
        }
    },

    "Potato___Late_blight": {
        "crop": "Potato",
        "disease": "Late Blight",
        "type": "oomycete",
        "factors": {
            "temperature": "high",
            "humidity": "high",
            "soil_moisture": "low"
        }
    },

    # =========================
    # SQUASH
    # =========================

    "Squash___Powdery_mildew": {
        "crop": "Squash",
        "disease": "Powdery Mildew",
        "type": "fungal",
        "factors": {
            "temperature": "medium",
            "humidity": "medium",
            "soil_moisture": "low"
        }
    },

    # =========================
    # STRAWBERRY
    # =========================

    "Strawberry___Leaf_scorch": {
        "crop": "Strawberry",
        "disease": "Leaf Scorch",
        "type": "fungal",
        "factors": {
            "temperature": "medium",
            "humidity": "medium",
            "soil_moisture": "low"
        }
    },

    # =========================
    # TOMATO
    # =========================

    "Tomato___Bacterial_spot": {
        "crop": "Tomato",
        "disease": "Bacterial Spot",
        "type": "bacterial",
        "factors": {
            "temperature": "medium",
            "humidity": "medium",
            "soil_moisture": "low"
        }
    },

    "Tomato___Early_blight": {
        "crop": "Tomato",
        "disease": "Early Blight",
        "type": "fungal",
        "factors": {
            "temperature": "high",
            "humidity": "medium",
            "soil_moisture": "low"
        }
    },

    "Tomato___Late_blight": {
        "crop": "Tomato",
        "disease": "Late Blight",
        "type": "oomycete",
        "factors": {
            "temperature": "high",
            "humidity": "high",
            "soil_moisture": "low"
        }
    },

    "Tomato___Leaf_Mold": {
        "crop": "Tomato",
        "disease": "Leaf Mold",
        "type": "fungal",
        "factors": {
            "temperature": "medium",
            "humidity": "high",
            "soil_moisture": "low"
        }
    },

    "Tomato___Septoria_leaf_spot": {
        "crop": "Tomato",
        "disease": "Septoria Leaf Spot",
        "type": "fungal",
        "factors": {
            "temperature": "medium",
            "humidity": "high",
            "soil_moisture": "low"
        }
    },

    "Tomato___Spider_mites Two-spotted_spider_mite": {
        "crop": "Tomato",
        "disease": "Two-Spotted Spider Mite",
        "type": "pest",
        "factors": {
            "temperature": "high",
            "humidity": "medium",
            "soil_moisture": "medium"
        }
    },

    "Tomato___Target_Spot": {
        "crop": "Tomato",
        "disease": "Target Spot",
        "type": "fungal",
        "factors": {
            "temperature": "medium",
            "humidity": "high",
            "soil_moisture": "low"
        }
    },

    "Tomato___Tomato_Yellow_Leaf_Curl_Virus": {
        "crop": "Tomato",
        "disease": "Yellow Leaf Curl Virus",
        "type": "viral",
        "factors": {
            "temperature": "unknown",
            "humidity": "unknown",
            "soil_moisture": "low"
        }
    },

    "Tomato___Tomato_mosaic_virus": {
        "crop": "Tomato",
        "disease": "Tomato Mosaic Virus",
        "type": "viral",
        "factors": {
            "temperature": "unknown",
            "humidity": "unknown",
            "soil_moisture": "low"
        }
    }
}
