from services.disease_profiles import DISEASE_PROFILES


def get_disease_profile(raw_label: str):
    return DISEASE_PROFILES.get(raw_label)