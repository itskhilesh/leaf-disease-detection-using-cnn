DISEASE_PROFILES = {

    # =========================
    # APPLE
    # =========================

    "Apple___Apple_scab": {
        "crop": "Apple",
        "disease": "Apple Scab",
        "pathogen": "Venturia inaequalis",
        "type": "fungal",

        "environment": {

            "temperature_c": {
                "conducive_range": [6, 25],
                "optimum_reported_range": [16, 24],
                "interpretation": (
                    "Cool to moderate spring temperatures favor infection; "
                    "according to the Revised Mills Table, 16-24 C requires as "
                    "little as 6 hours of leaf wetness, while infection is rare above 26 C."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 85,
                "high_risk_reference": 95,
                "interpretation": (
                    "Very high relative humidity (above 95%) supports spore "
                    "germination and secondary conidial spread during cool, damp periods."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Continuous free water on leaf surfaces is strictly required "
                    "for ascospore and conidia germination (6-28 hours depending on temperature)."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Orchard microclimate and fallen-leaf inoculum context only",
                "interpretation": (
                    "Soil moisture does not directly diagnose Apple Scab, though wet "
                    "orchard floors aid ascospore discharge from overwintered leaf litter."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Pathogen presence (overwintered leaf litter) is necessary for infection.",
            "Leaf wetness duration (Mills periods) is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://extension.psu.edu/tree-fruit-disease-an-apple-scab-review",
            "https://blog-fruit-vegetable-ipm.extension.umn.edu/2026/04/article-written-by-madeline-wimmer-umn_15.html",
            "https://www.researchgate.net/publication/329571607_Critical_Review_on_Apple_Scab_Venturia_inaequalis_Biology_Epidemiology_Economic_Importance_Management_and_Defense_Mechanisms_to_the_Causal_Agent"
        ]
    },

    "Apple___Black_rot": {
        "crop": "Apple",
        "disease": "Black Rot",
        "pathogen": "Botryosphaeria obtusa (syn. Diplodia seriata)",
        "type": "fungal",

        "environment": {

            "temperature_c": {
                "conducive_range": [16, 32],
                "optimum_reported_range": [21, 27],
                "interpretation": (
                    "Moderate to warm temperatures favor frogeye leaf spot and fruit rot; "
                    "leaf infection peaks around 21-27 C during wet spring and summer periods."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 80,
                "high_risk_reference": 90,
                "interpretation": (
                    "High humidity and rain splash promote spore release from pycnidia "
                    "on cankers and mummified fruit."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Prolonged wetting periods are required for ascospore and conidial "
                    "germination and penetration of foliage and fruit."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Tree drought-stress context only",
                "interpretation": (
                    "No soil moisture percentage diagnoses Black Rot, but drought-stressed "
                    "trees are significantly more susceptible to branch cankers."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Overwintering cankers, mummies, or wounds strongly drive inoculum levels.",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://extension.unh.edu/resource/frogeye-leaf-spot-black-rot-apple-0",
            "https://phytopath.ca/wp-content/uploads/cpds-archive/vol71/CPDS_Vol_71_No_2_(165-168)1991.pdf"
        ]
    },

    "Apple___Cedar_apple_rust": {
        "crop": "Apple",
        "disease": "Cedar Apple Rust",
        "pathogen": "Gymnosporangium juniperi-virginianae",
        "type": "fungal",

        "environment": {

            "temperature_c": {
                "conducive_range": [8, 25],
                "optimum_reported_range": [11, 25],
                "interpretation": (
                    "Cool to moderate spring temperatures (11-25 C) favor basidiospore "
                    "production on cedar galls and infection of young apple leaves; "
                    "no basidiospores form at very high temperatures (above ~28 C)."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 85,
                "high_risk_reference": 95,
                "interpretation": (
                    "High humidity and spring rainfall are needed to swell telial horns "
                    "on nearby cedar hosts and discharge airborne basidiospores."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "A continuous film of water on young apple leaves for 4 or more hours "
                    "at optimum temperatures enables rapid infection."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Plant water-stress context only",
                "interpretation": (
                    "Soil moisture is not used to diagnose Cedar Apple Rust."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Requires proximity to alternate host (Eastern red cedar / Juniperus spp.).",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://courses.cit.cornell.edu/ipm444/lec-notes/extra/pest-mgmt-cedar-apple-rust.pdf",
            "https://ipm.missouri.edu/MEG/2019/5/cedarAppleRust/"
        ]
    },

    # =========================
    # CHERRY
    # =========================

    "Cherry___Powdery_mildew": {
        "crop": "Cherry",
        "disease": "Powdery Mildew",
        "pathogen": "Podosphaera clandestina",
        "type": "fungal",

        "environment": {

            "temperature_c": {
                "conducive_range": [10, 30],
                "optimum_reported_range": [20, 25],
                "interpretation": (
                    "Primary spring infection initiates above 10 C after rain or irrigation; "
                    "secondary foliar disease develops fastest at 20-25 C."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 70,
                "high_risk_reference": 90,
                "interpretation": (
                    "Warm, rain-free days paired with high canopy humidity (morning fog "
                    "or dew) drive rapid secondary spread."
                )
            },

            "leaf_wetness": {
                "important": False,
                "measured_by_system": False,
                "interpretation": (
                    "Unlike most fungi, powdery mildew conidia do NOT require free water "
                    "for secondary infection; rain is only needed for spring ascospore release."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Irrigation timing and canopy humidity context only",
                "interpretation": (
                    "Early-season irrigation raises orchard humidity and can trigger "
                    "primary ascospore release, though no soil moisture % diagnoses mildew."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Dense canopies and young succulent foliage/root suckers increase risk.",
            "Free leaf wetness is not required for secondary spread.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://s3-us-west-2.amazonaws.com/treefruit.wsu.edu/wp-content/uploads/2017/05/CPM_2017-5-09.pdf",
            "https://ipm.ucanr.edu/agriculture/cherry/powdery-mildew/",
            "https://www.researchgate.net/publication/335803802_Powdery_mildew_biology_epidemiology_and_management_of_Podosphaera_spp_of_tree_fruit"
        ]
    },

    # =========================
    # CORN
    # =========================

    "Corn___Cercospora_leaf_spot Gray_leaf_spot": {
        "crop": "Corn",
        "disease": "Gray Leaf Spot",
        "pathogen": "Cercospora zeae-maydis",
        "type": "fungal",

        "environment": {

            "temperature_c": {
                "conducive_range": [21, 32],
                "optimum_reported_range": [25, 30],
                "interpretation": (
                    "Warm to hot, humid summer conditions favor rapid lesion expansion "
                    "and sporulation."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 90,
                "high_risk_reference": 95,
                "interpretation": (
                    "Extended periods of relative humidity above 90-95% are critical "
                    "for sporulation and secondary infection."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Prolonged leaf wetness (12+ hours from heavy dew, fog, or rain) "
                    "favors germination; spores can also survive dry spells waiting for moisture."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Crop-residue microclimate and plant stress context only",
                "interpretation": (
                    "No soil moisture threshold diagnoses Gray Leaf Spot; continuous "
                    "corn with surface residue is the major field-level risk factor."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Surface corn residue and hybrid susceptibility strongly influence severity.",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://apsjournals.apsnet.org/doi/10.1094/PD-89-0624",
            "https://www.extension.purdue.edu/extmedia/BP/BP-56.pdf",
            "https://www.goldenharvestseeds.com/agronomy/articles/northern-corn-leaf-blight-and-gray-leaf-spot"
        ]
    },

    "Corn___Common_rust": {
        "crop": "Corn",
        "disease": "Common Rust",
        "pathogen": "Puccinia sorghi",
        "type": "fungal",

        "environment": {

            "temperature_c": {
                "conducive_range": [16, 25],
                "optimum_reported_range": [16, 24],
                "interpretation": (
                    "Cool to moderate temperatures (16-24 C) favor urediniospore infection; "
                    "temperatures above 27 C suppress disease development and spread."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 90,
                "high_risk_reference": 95,
                "interpretation": (
                    "Relative humidity above 95% with heavy overnight dew strongly "
                    "favors infection."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Approximately 6 hours of free leaf wetness (heavy dew or rain) "
                    "is sufficient for urediniospore germination and infection."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Plant water-stress context only",
                "interpretation": (
                    "Soil moisture is not used to diagnose Common Rust; inoculum arrives "
                    "via windblown spores from warmer overwintering regions."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Windborne spore arrival and hybrid resistance are decisive factors.",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://extension.umn.edu/agriculture/crop-production/corn/common-rust-on-corn"
        ]
    },

    "Corn___Northern_Leaf_Blight": {
        "crop": "Corn",
        "disease": "Northern Leaf Blight",
        "pathogen": "Exserohilum turcicum",
        "type": "fungal",

        "environment": {

            "temperature_c": {
                "conducive_range": [18, 27],
                "optimum_reported_range": [18, 25],
                "interpretation": (
                    "Cool to moderate temperatures (18-27 C) favor infection and lesion "
                    "development; hot, dry weather restricts spread."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 85,
                "high_risk_reference": 90,
                "interpretation": (
                    "High humidity, overcast skies, and heavy dews sustain sporulation "
                    "and rapid secondary spread across the canopy."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Free water on leaves for 6 to 18 hours is required to initiate infection."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Plant water-stress and residue-moisture context only",
                "interpretation": (
                    "No soil moisture percentage diagnoses Northern Leaf Blight; "
                    "infected surface residue supplies primary inoculum."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Corn residue on the soil surface and hybrid Ht resistance genes affect risk.",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://ohioline.osu.edu/factsheet/plpath-cer-10",
            "https://www.extension.purdue.edu/extmedia/bp/bp-84-w.pdf",
            "https://www.cropscience.bayer.us/articles/bayer/managing-northern-corn-leaf-blight"
        ]
    },

    # =========================
    # GRAPE
    # =========================

    "Grape___Black_rot": {
        "crop": "Grape",
        "disease": "Black Rot",
        "pathogen": "Guignardia bidwellii (syn. Phyllosticta ampelicida)",
        "type": "fungal",

        "environment": {

            "temperature_c": {
                "conducive_range": [10, 32],
                "optimum_reported_range": [21, 27],
                "interpretation": (
                    "Warm, wet spring and summer weather favors rapid infection; "
                    "lower temperatures require much longer leaf wetness durations."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 80,
                "high_risk_reference": 90,
                "interpretation": (
                    "High vineyard humidity slows canopy drying after rain events, "
                    "extending the window for spore germination."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Rain (as little as 3 mm for ascospores) and continuous leaf wetness "
                    "(as short as ~6 hours at optimum temperature) are required for infection."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Vineyard floor humidity and vine vigor context only",
                "interpretation": (
                    "Soil moisture does not diagnose Black Rot; overwintering fruit "
                    "mummies on the vine or ground provide the primary inoculum."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Presence of overwintered mummified berries strongly drives epidemic severity.",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://www.mdpi.com/2311-7524/9/2/130",
            "https://www.researchgate.net/publication/367260346_Black_Rot_of_Grapes_Guignardia_bidwellii-A_Comprehensive_Overview"
        ]
    },

    "Grape___Esca_(Black_Measles)": {
        "crop": "Grape",
        "disease": "Esca (Black Measles)",
        "pathogen": "Fungal trunk complex (Phaeomoniella chlamydospora, Phaeoacremonium spp., Fomitiporia spp.)",
        "type": "fungal_complex",

        "environment": {

            "temperature_c": {
                "conducive_range": None,
                "optimum_reported_range": None,
                "interpretation": (
                    "No single ambient temperature threshold diagnoses Esca; however, "
                    "hot summer weather following cool, wet springs can trigger sudden "
                    "foliar 'tiger-stripe' or apoplectic wilt symptoms."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": None,
                "high_risk_reference": None,
                "interpretation": (
                    "Air humidity does not directly trigger foliar symptoms, though wet "
                    "winter/spring weather promotes spore dispersal onto fresh pruning wounds."
                )
            },

            "leaf_wetness": {
                "important": False,
                "measured_by_system": False,
                "interpretation": (
                    "Pathogens enter through woody pruning wounds during rain events "
                    "rather than through foliar leaf wetness."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Vine water-stress and apoplexy trigger context",
                "interpretation": (
                    "No universal soil moisture % diagnoses Esca, but fluctuating water "
                    "availability and heat/drought stress strongly influence symptom expression "
                    "in chronically infected vines."
                )
            }
        },

        "limitations": [
            "Chronic woody trunk infection; environmental sensors cannot confirm wood colonization.",
            "Symptoms appear erratically from year to year on infected vines.",
            "Infection occurs mainly via rain-exposed pruning wounds, not leaf wetness.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://ipm.ucanr.edu/agriculture/grape/esca-black-measles/",
            "https://www.researchgate.net/publication/273876215_New_Insights_into_Esca_of_Grapevine_The_Development_of_Foliar_Symptoms_and_Their_Association_with_Xylem_Discoloration"
        ]
    },

    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": {
        "crop": "Grape",
        "disease": "Leaf Blight",
        "pathogen": "Pseudocercospora vitis (syn. Isariopsis clavispora)",
        "type": "fungal",

        "environment": {

            "temperature_c": {
                "conducive_range": [20, 32],
                "optimum_reported_range": [26, 30],
                "interpretation": (
                    "Warm conditions favor Pseudocercospora vitis; controlled studies "
                    "report optimal conidial germination near 28-30 C and mycelial growth around 26-27 C."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 85,
                "high_risk_reference": 95,
                "interpretation": (
                    "High humidity during mid-to-late summer supports sporulation and "
                    "lesion expansion on older foliage."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Prolonged leaf wetness substantially increases conidial germination "
                    "(peaking under extended wet periods in controlled studies)."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Vineyard microclimate and plant water-stress context only",
                "interpretation": (
                    "No soil moisture percentage is used to diagnose Grape Leaf Blight."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Pathogen presence and cultivar susceptibility are necessary for infection.",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://content.ces.ncsu.edu/north-carolina-winegrape-growers-guide/chapter-8-pest-management",
            "https://www.researchgate.net/publication/264152717_Pathogenicity_and_Infection_Mechanism_of_Pseudocercospora_vitis_Causing_Leaf_Spot_Disease_on_Grapevine_in_Korea"
        ]
    },

    # =========================
    # PEACH
    # =========================

    "Peach___Bacterial_spot": {
        "crop": "Peach",
        "disease": "Bacterial Spot",
        "pathogen": "Xanthomonas arboricola pv. pruni",
        "type": "bacterial",

        "environment": {

            "temperature_c": {
                "conducive_range": [19, 30],
                "optimum_reported_range": [24, 30],
                "interpretation": (
                    "Warm seasons (19-28 C) favor severe orchard epidemics; laboratory "
                    "multiplication peaks around 25-30 C and slows sharply above 34 C."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 80,
                "high_risk_reference": 90,
                "interpretation": (
                    "High humidity coupled with frequent rain, wind-driven sand, and "
                    "heavy dews promotes bacterial entry through stomata and micro-wounds."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Rain splash and persistent dew droplets along leaf tips and midribs "
                    "are essential for bacterial multiplication and dispersal."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Tree vigor and sandy-soil wind-abrasion context only",
                "interpretation": (
                    "No soil moisture percentage diagnoses Bacterial Spot; however, "
                    "light sandy soils increase wind-blown particle wounding of foliage."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Wind-driven rain and overwintered twig cankers are major outbreak drivers.",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://gd.eppo.int/download/standard/188/pm7-064-2-en.pdf",
            "https://pmc.ncbi.nlm.nih.gov/articles/PMC5426779/"
        ]
    },

    # =========================
    # BELL PEPPER
    # =========================

    "Pepper,_bell___Bacterial_spot": {
        "crop": "Bell Pepper",
        "disease": "Bacterial Spot",
        "pathogen": "Xanthomonas euvesicatoria (also X. perforans, X. gardneri, X. vesicatoria)",
        "type": "bacterial",

        "environment": {

            "temperature_c": {
                "conducive_range": [20, 32],
                "optimum_reported_range": [24, 30],
                "interpretation": (
                    "Warm to hot weather (24-30 C) favors most pepper-infecting "
                    "Xanthomonas strains, though X. gardneri can be active near 20 C."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 80,
                "high_risk_reference": 90,
                "interpretation": (
                    "High humidity and rainy seasons promote rapid foliar blighting "
                    "and secondary soft-rot entry into fruit lesions."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Water droplets from rainfall, heavy dew, or overhead irrigation "
                    "disperse bacteria and enable stomatal entry."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Plant water-stress and irrigation-method context only",
                "interpretation": (
                    "No soil moisture % diagnoses Bacterial Spot; switching from overhead "
                    "to drip irrigation reduces splash dispersal."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Contaminated seed, transplants, or undecomposed crop debris introduce inoculum.",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://ask.ifas.ufl.edu/publication/PP362",
            "https://extension.umn.edu/agriculture/specialty-crops/vegetable-farming/disease-management/bacterial-spot-of-tomato-and-pepper",
            "https://pmc.ncbi.nlm.nih.gov/articles/PMC6638463/"
        ]
    },

    # =========================
    # POTATO
    # =========================

    "Potato___Early_blight": {
        "crop": "Potato",
        "disease": "Early Blight",
        "pathogen": "Alternaria solani",
        "type": "fungal",

        "environment": {

            "temperature_c": {
                "conducive_range": [24, 29],
                "optimum_reported_range": [28, 30],
                "interpretation": (
                    "Warm conditions are conducive to disease development. "
                    "Optimum varies by pathogen activity, cultivar maturity, and study."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 80,
                "high_risk_reference": 90,
                "interpretation": (
                    "High humidity favors sporulation and lesion expansion; "
                    "alternating wet and dry cycles promote spore dispersal."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Free water from dew, rain, or overhead irrigation favors "
                    "spore germination and infection."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Plant water-stress context only",
                "interpretation": (
                    "No universal soil moisture percentage diagnoses Early Blight, "
                    "though drought or nutrient stress increases plant susceptibility."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Pathogen presence and older/stressed foliage increase infection risk.",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://www.apsnet.org/edcenter/pdlessons/Pages/PotatoTomato.aspx",
            "https://extension.umn.edu/agriculture/specialty-crops/vegetable-farming/disease-management/early-blight-in-tomato-and-potato",
            "https://extension.umaine.edu/ipm/ipddl/publications/5087e/"
        ]
    },

    "Potato___Late_blight": {
        "crop": "Potato",
        "disease": "Late Blight",
        "pathogen": "Phytophthora infestans",
        "type": "oomycete",

        "environment": {

            "temperature_c": {
                "conducive_range": [10, 24],
                "optimum_reported_range": [15, 22],
                "interpretation": (
                    "Cool to moderate temperatures favor rapid sporangia production "
                    "and zoospore release; temperatures above 30 C hamper new infections."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 85,
                "high_risk_reference": 90,
                "interpretation": (
                    "Forecast models (e.g., Blight Units) track consecutive hours with "
                    "relative humidity at or above 90% as the primary epidemic driver."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Free moisture on foliage is strictly necessary for sporangial "
                    "germination and rapid canopy blighting."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Tuber-infection risk context during rainfall",
                "interpretation": (
                    "Soil moisture alone does not diagnose Late Blight, but wet, cool "
                    "soil (below 18 C) allows washed-down zoospores to infect developing tubers."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Requires living host inoculum (infected seed tubers, culls, or windblown sporangia).",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://ipm.ucanr.edu/DISEASE/DATABASE/potatolateblight.html",
            "https://www.pubs.ext.vt.edu/ANR/ANR-6/ANR-6.html",
            "https://bpb-us-e1.wpmucdn.com/blogs.cornell.edu/dist/d/11253/files/2025/01/LateBlight.pdf"
        ]
    },

    # =========================
    # SQUASH
    # =========================

    "Squash___Powdery_mildew": {
        "crop": "Squash",
        "disease": "Powdery Mildew",
        "pathogen": "Podosphaera xanthii (also Erysiphe cichoracearum)",
        "type": "fungal",

        "environment": {

            "temperature_c": {
                "conducive_range": [10, 32],
                "optimum_reported_range": [20, 27],
                "interpretation": (
                    "Infection occurs from 10-32 C with 20-27 C most favorable; "
                    "disease development is arrested when daytime temperatures reach 38 C."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 50,
                "high_risk_reference": 80,
                "interpretation": (
                    "High humidity favors infection, yet colonies still establish and "
                    "sporulate readily under relatively dry conditions compared to other fungi."
                )
            },

            "leaf_wetness": {
                "important": False,
                "measured_by_system": False,
                "interpretation": (
                    "Rain and free water on leaf surfaces are actually UNFAVORABLE "
                    "for cucurbit powdery mildew colonization and spore dispersal."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Plant water-stress context only",
                "interpretation": (
                    "No soil moisture percentage diagnoses Powdery Mildew; dense shaded "
                    "canopies and older foliage after fruit set are most susceptible."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Airborne windblown conidia and dense shaded canopies drive outbreaks.",
            "Free leaf wetness suppresses rather than promotes this pathogen.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://www.vegetables.cornell.edu/pest-management/disease-factsheets/cucurbit-powdery-mildew/"
        ]
    },

    # =========================
    # STRAWBERRY
    # =========================

    "Strawberry___Leaf_scorch": {
        "crop": "Strawberry",
        "disease": "Leaf Scorch",
        "pathogen": "Diplocarpon earlianum",
        "type": "fungal",

        "environment": {

            "temperature_c": {
                "conducive_range": [15, 25],
                "optimum_reported_range": [17, 25],
                "interpretation": (
                    "Cool to moderate temperatures (15-25 C) favor spore germination "
                    "and lesion development from spring through late summer."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 80,
                "high_risk_reference": 90,
                "interpretation": (
                    "Humid, rainy periods favor acervuli sporulation on overwintered "
                    "strawberry foliage."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Free water from rain or overhead irrigation enables conidia to "
                    "germinate and infect leaves within 24 hours."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Plant water-stress context only",
                "interpretation": (
                    "No soil moisture threshold diagnoses Leaf Scorch, though severe "
                    "foliar infection reduces the plant's ability to tolerate drought stress."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Overwintered infected leaves and cultivar susceptibility drive pressure.",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://ohioline.osu.edu/factsheet/plpath-fru-35",
            "https://blogs.cornell.edu/berrytool/strawberries/strawberries-leaf-scorch/",
            "https://ruralaffairs.gov.mt/wp-content/uploads/2024/04/strawberry-ipm-guidelines.pdf"
        ]
    },

    # =========================
    # TOMATO
    # =========================

    "Tomato___Bacterial_spot": {
        "crop": "Tomato",
        "disease": "Bacterial Spot",
        "pathogen": "Xanthomonas perforans, X. euvesicatoria, X. vesicatoria, X. gardneri",
        "type": "bacterial",

        "environment": {

            "temperature_c": {
                "conducive_range": [20, 32],
                "optimum_reported_range": [24, 30],
                "interpretation": (
                    "Symptoms develop rapidly at 20 C and above (optimum 24-30 C); "
                    "night temperatures at or below 16 C suppress disease development."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 80,
                "high_risk_reference": 90,
                "interpretation": (
                    "High relative humidity favors water-soaked lesion development "
                    "and rapid epiphytic bacterial multiplication."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Free moisture and splashing water from rain or sprinkler irrigation "
                    "are primary drivers of field spread and infection."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Irrigation-method and plant water-stress context only",
                "interpretation": (
                    "No soil moisture percentage diagnoses Bacterial Spot; drip irrigation "
                    "is preferred over overhead watering to keep foliage dry."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Infected seed, transplants, and undecomposed crop debris are primary sources.",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://extension.umn.edu/agriculture/specialty-crops/vegetable-farming/disease-management/bacterial-spot-of-tomato-and-pepper",
            "https://ipm.ucanr.edu/agriculture/tomato/bacterial-spot/",
            "https://pmc.ncbi.nlm.nih.gov/articles/PMC6638463/"
        ]
    },

    "Tomato___Early_blight": {
        "crop": "Tomato",
        "disease": "Early Blight",
        "pathogen": "Alternaria solani",
        "type": "fungal",

        "environment": {

            "temperature_c": {
                "conducive_range": [24, 29],
                "optimum_reported_range": [28, 30],
                "interpretation": (
                    "Warm conditions are conducive to disease development. "
                    "Optimum varies by pathogen activity and study."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 80,
                "high_risk_reference": 90,
                "interpretation": (
                    "High humidity favors disease development; "
                    "very high humidity is particularly conducive."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Free water and prolonged leaf wetness favor "
                    "spore germination and infection."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Plant water-stress context only",
                "interpretation": (
                    "No universal soil moisture percentage is used "
                    "to diagnose Early Blight."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Pathogen presence is necessary for infection.",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://www.apsnet.org/edcenter/pdlessons/Pages/PotatoTomato.aspx",
            "https://extension.umn.edu/agriculture/specialty-crops/vegetable-farming/disease-management/early-blight-in-tomato-and-potato",
            "https://extension.umaine.edu/ipm/ipddl/publications/5087e/"
        ]
    },

    "Tomato___Late_blight": {
        "crop": "Tomato",
        "disease": "Late Blight",
        "pathogen": "Phytophthora infestans",
        "type": "oomycete",

        "environment": {

            "temperature_c": {
                "conducive_range": [10, 24],
                "optimum_reported_range": [15, 22],
                "interpretation": (
                    "Cool, wet weather accelerates sporangia production and foliar "
                    "blighting; temperatures above 30 C halt sporulation and new infections."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 85,
                "high_risk_reference": 90,
                "interpretation": (
                    "Sustained relative humidity at or above 90% promotes white "
                    "sporangial growth on foliage and rapid epidemic spread."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Free surface moisture from rain, fog, or heavy dew is required "
                    "for spore germination and tissue penetration."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Canopy microclimate context only",
                "interpretation": (
                    "Soil moisture does not diagnose Tomato Late Blight; the pathogen "
                    "does not overwinter in dead debris or soil without living host tissue."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Requires windborne sporangia or infected transplants/volunteer potatoes.",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://www.pubs.ext.vt.edu/ANR/ANR-6/ANR-6.html",
            "https://ipm.ucanr.edu/DISEASE/DATABASE/potatolateblight.html",
            "https://bpb-us-e1.wpmucdn.com/blogs.cornell.edu/dist/d/11253/files/2025/01/LateBlight.pdf"
        ]
    },

    "Tomato___Leaf_Mold": {
        "crop": "Tomato",
        "disease": "Leaf Mold",
        "pathogen": "Passalora fulva (syn. Fulvia fulva / Cladosporium fulvum)",
        "type": "fungal",

        "environment": {

            "temperature_c": {
                "conducive_range": [15, 27],
                "optimum_reported_range": [20, 25],
                "interpretation": (
                    "Moderate temperatures (20-25 C), typical of high tunnels and "
                    "greenhouses, are optimal for fungal growth and sporulation."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 85,
                "high_risk_reference": 90,
                "interpretation": (
                    "Relative humidity above 85% is the single most critical driver "
                    "of Tomato Leaf Mold; disease rarely develops below 80% RH."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "High ambient humidity alone can permit germination, while condensation "
                    "and leaf wetness further accelerate infection in enclosed structures."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Greenhouse/tunnel humidity context only",
                "interpretation": (
                    "No soil moisture percentage diagnoses Leaf Mold, though excessive "
                    "evening watering in tunnels elevates nighttime relative humidity."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Most common in high tunnels/greenhouses with poor ventilation.",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://ipm.cahnr.uconn.edu/tomato-leaf-mold/"
        ]
    },

    "Tomato___Septoria_leaf_spot": {
        "crop": "Tomato",
        "disease": "Septoria Leaf Spot",
        "pathogen": "Septoria lycopersici",
        "type": "fungal",

        "environment": {

            "temperature_c": {
                "conducive_range": [15, 27],
                "optimum_reported_range": [20, 25],
                "interpretation": (
                    "Sporulation occurs between 15 and 27 C, with 20-25 C optimal "
                    "for infection and lesion expansion."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 85,
                "high_risk_reference": 100,
                "interpretation": (
                    "Very high humidity (approaching 100% RH accumulated over ~48 hours "
                    "across wet/dewy days) strongly favors epidemics."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Free moisture on foliage is required for pycnidial spore exudation, "
                    "rain-splash dispersal, and stomatal penetration."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Splash-prevention and irrigation context only",
                "interpretation": (
                    "No soil moisture % diagnoses Septoria Leaf Spot; mulching and "
                    "avoiding overhead irrigation reduce splash from soil-surface debris."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Overwintered solanaceous crop or weed debris in soil supplies primary inoculum.",
            "Leaf wetness is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://vegpath.plantpath.wisc.edu/diseases/tomato-septoria-leaf-spot/",
            "https://s3.amazonaws.com/assets.cce.cornell.edu/attachments/23147/Tomato-Septoria-Leaf-Spot.pdf?1494305774"
        ]
    },

    "Tomato___Spider_mites Two-spotted_spider_mite": {
        "crop": "Tomato",
        "disease": "Two-Spotted Spider Mite",
        "pathogen": "Tetranychus urticae (arthropod pest)",
        "type": "pest",

        "environment": {

            "temperature_c": {
                "conducive_range": [25, 38],
                "optimum_reported_range": [30, 35],
                "interpretation": (
                    "Hot weather accelerates reproduction dramatically; above 32 C, "
                    "colonies can reach damaging levels in less than two weeks."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": None,
                "high_risk_reference": None,
                "interpretation": (
                    "INVERSE RISK: Unlike fungal diseases, spider mite outbreaks are "
                    "favored by DRY air (typically below 50-60% RH) in open fields, "
                    "though polyhouse populations can still build up under warm conditions."
                )
            },

            "leaf_wetness": {
                "important": False,
                "measured_by_system": False,
                "interpretation": (
                    "Leaf wetness is NOT conducive; rain or high-pressure water sprays "
                    "physically dislodge mites and suppress colony growth."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Drought-stress predisposition context",
                "interpretation": (
                    "No single soil moisture % confirms infestation, but low soil moisture "
                    "and water-stressed plants are much more susceptible to rapid mite buildup."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm pest presence.",
            "Humidity risk is inverted (dry weather increases risk) compared to fungal pathogens.",
            "Broad-spectrum insecticides can trigger outbreaks by killing natural predators.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://extension.umn.edu/garden-and-home/yard-and-garden/yard-and-garden-insects/spider-mites",
            "https://www.researchgate.net/publication/307904312_POPULATION_DYNAMICS_OF_TWO_SPOTTED_SPIDER_MITE_TETRANYCHUS_URTICAE_KOCH_ACARI_TETRANYCHIDAE_ON_TOMATO_UNDER_POLYHOUSE_CONDITION"
        ]
    },

    "Tomato___Target_Spot": {
        "crop": "Tomato",
        "disease": "Target Spot",
        "pathogen": "Corynespora cassiicola",
        "type": "fungal",

        "environment": {

            "temperature_c": {
                "conducive_range": [16, 32],
                "optimum_reported_range": [20, 32],
                "interpretation": (
                    "Warm subtropical/tropical temperatures favor Target Spot; "
                    "optimal development is reported at 20-28 C, with highest Florida "
                    "field severity documented at 28-32 C."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": 85,
                "high_risk_reference": 90,
                "interpretation": (
                    "Prolonged high humidity inside dense, slow-drying tomato canopies "
                    "drives sporulation and inner-canopy 'melting-out'."
                )
            },

            "leaf_wetness": {
                "important": True,
                "measured_by_system": False,
                "interpretation": (
                    "Extended leaf wetness durations of 16 to 44 hours are required "
                    "for heavy spore germination and severe disease development."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Canopy-density and irrigation context only",
                "interpretation": (
                    "No soil moisture percentage diagnoses Target Spot; avoid overhead "
                    "irrigation to limit prolonged leaf wetness."
                )
            }
        },

        "limitations": [
            "Environmental conditions do not confirm the disease.",
            "Pathogen presence (crop debris or weed hosts) is necessary for infection.",
            "Leaf wetness duration (16-44 h) is not currently measured.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://apsjournals.apsnet.org/doi/pdf/10.1094/PHP-05-18-0023-RV",
            "https://www.vegetables.bayer.com/ca/en-ca/resources/agronomic-spotlights/target-spot-of-tomato.html"
        ]
    },

    "Tomato___Tomato_Yellow_Leaf_Curl_Virus": {
        "crop": "Tomato",
        "disease": "Yellow Leaf Curl Virus",
        "pathogen": "Tomato yellow leaf curl virus (TYLCV; vector: Bemisia tabaci)",
        "type": "viral",

        "environment": {

            "temperature_c": {
                "conducive_range": [20, 35],
                "optimum_reported_range": [25, 32],
                "interpretation": (
                    "Temperature reflects whitefly vector (Bemisia tabaci) favorability "
                    "rather than direct viral infection; warm temperatures around 25 C+ "
                    "accelerate whitefly egg-to-adult development (~22 days)."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": None,
                "high_risk_reference": None,
                "interpretation": (
                    "No high-humidity infection threshold; moderate-to-dry conditions "
                    "(~50-70% RH) generally favor whitefly vector activity and reproduction."
                )
            },

            "leaf_wetness": {
                "important": False,
                "measured_by_system": False,
                "interpretation": (
                    "TYLCV is transmitted persistently by whitefly feeding, not via "
                    "free water or leaf wetness."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Plant stress context only",
                "interpretation": (
                    "Soil moisture does not diagnose TYLCV or predict viral transmission."
                )
            }
        },

        "limitations": [
            "Environmental sensors measure vector-conducive weather, not virus presence.",
            "Transmission strictly requires viruliferous Bemisia tabaci whiteflies or infected transplants.",
            "Insect vector population is not measured by environmental sensors.",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://ask.ifas.ufl.edu/publication/IN1430"
        ]
    },

    "Tomato___Tomato_mosaic_virus": {
        "crop": "Tomato",
        "disease": "Tomato Mosaic Virus",
        "pathogen": "Tomato mosaic virus (ToMV, genus Tobamovirus)",
        "type": "viral",

        "environment": {

            "temperature_c": {
                "conducive_range": None,
                "optimum_reported_range": None,
                "interpretation": (
                    "No ambient temperature threshold governs ToMV transmission; "
                    "however, warm temperatures can intensify necrotic foliar symptom "
                    "expression in certain cultivars."
                )
            },

            "relative_humidity_percent": {
                "conducive_minimum": None,
                "high_risk_reference": None,
                "interpretation": (
                    "Relative humidity does not drive ToMV infection; the virus is "
                    "physically stable across wide environmental conditions."
                )
            },

            "leaf_wetness": {
                "important": False,
                "measured_by_system": False,
                "interpretation": (
                    "Free water is not required; transmission occurs mechanically "
                    "via hands, pruning tools, clothing, plant contact, and infected seed."
                )
            },

            "soil_moisture": {
                "direct_disease_threshold": None,
                "used_for": "Plant water-stress context only",
                "interpretation": (
                    "Soil moisture does not diagnose ToMV, though the virus can survive "
                    "in infected plant debris left in the soil."
                )
            }
        },

        "limitations": [
            "Environmental conditions cannot predict or confirm ToMV.",
            "Spread is driven by sanitation, handling, contaminated seed, and tobacco contact.",
            "Confirmation requires laboratory testing (ELISA or PCR).",
            "Soil moisture sensor requires calibration."
        ],

        "sources": [
            "https://extension.umn.edu/agriculture/specialty-crops/vegetable-farming/disease-management/tomato-viruses",
            "https://www.researchgate.net/publication/348497918_INFLUENCE_OF_ENVIRONMENTAL_CONDITIONS_ON_TOMATO_MOSAIC_VIRUS_DISEASE_DEVELOPMENT_UNDER_NATURAL_CONDITION"
        ]
    }
}