export const MSSubClass = [
    { value: 20, label: "1-STORY 1946 & NEWER ALL STYLES" },
    { value: 30, label: "1-STORY 1945 & OLDER" },
    { value: 40, label: "1-STORY W/FINISHED ATTIC ALL AGES" },
    { value: 45, label: "1-1/2 STORY - UNFINISHED ALL AGES" },
    { value: 50, label: "1-1/2 STORY FINISHED ALL AGES" },
    { value: 60, label: "2-STORY 1946 & NEWER" },
    { value: 70, label: "2-STORY 1945 & OLDER" },
    { value: 75, label: "2-1/2 STORY ALL AGES" },
    { value: 80, label: "SPLIT OR MULTI-LEVEL" },
    { value: 85, label: "SPLIT FOYER" },
    { value: 90, label: "DUPLEX - ALL STYLES AND AGES" },
    { value: 120, label: "1-STORY PUD (Planned Unit Development) - 1946 & NEWER" },
    { value: 150, label: "1-1/2 STORY PUD - ALL AGES" },
    { value: 160, label: "2-STORY PUD - 1946 & NEWER" },
    { value: 180, label: "PUD - MULTILEVEL - INCL SPLIT LEV/FOYER" },
    { value: 190, label: "2 FAMILY CONVERSION - ALL STYLES AND AGES" }
]

export const MSZoning = [
    { value: "A", label: "Agriculture" },
    { value: "C", label: "Commercial" },
    { value: "FV", label: "Floating Village Residential" },
    { value: "I", label: "Industrial" },
    { value: "RH", label: "Residential High Density" },
    { value: "RL", label: "Residential Low Density" },
    { value: "RP", label: "Residential Low Density Park" },
    { value: "RM", label: "Residential Medium Density" }
];

export const Street = [
    { value: "Grvl", label: "Gravel" },
    { value: "Pave", label: "Pave" }
];

export const LotShape = [
    { value: "Reg", label: "Regular" },
    { value: "IR1", label: "Slightly irregular" },
    { value: "IR2", label: "Moderately Irregular" },
    { value: "IR3", label: "Irregular" }
];

export const LandContour = [
    { value: "Lvl", label: "Near Flat/Level" },
    { value: "Bnk", label: "Banked - Quick and significant rise from street grade to building" },
    { value: "HLS", label: "Hillside - Significant slope from side to side" },
    { value: "Low", label: "Depression" }
];

export const Utilities = [
    { value: "AllPub", label: "All public Utilities (E,G,W,& S)" },
    { value: "NoSewr", label: "Electricity, Gas, and Water (Septic Tank)" },
    { value: "NoSeWa", label: "Electricity and Gas Only" },
    { value: "ELO", label: "Electricity only" }
];

export const LotConfig = [
    { value: "Inside", label: "Inside lot" },
    { value: "Corner", label: "Corner lot" },
    { value: "CulDSac", label: "Cul-de-sac" },
    { value: "FR2", label: "Frontage on 2 sides of property" },
    { value: "FR3", label: "Frontage on 3 sides of property" },
];

export const LandSlope = [
    { value: "Gtl", label: "Gentle slope" },
    { value: "Mod", label: "Moderate Slope" },
    { value: "Sev", label: "Severe Slope" },
];

export const Neighborhood = [
    { value: "Blmngtn", label: "Bloomington Heights" },
    { value: "Blueste", label: "Bluestem" },
    { value: "BrDale", label: "Briardale" },
    { value: "BrkSide", label: "Brookside" },
    { value: "ClearCr", label: "Clear Creek" },
    { value: "CollgCr", label: "College Creek" },
    { value: "Crawfor", label: "Crawford" },
    { value: "Edwards", label: "Edwards" },
    { value: "Gilbert", label: "Gilbert" },
    { value: "IDOTRR", label: "Iowa DOT and Rail Road" },
    { value: "MeadowV", label: "Meadow Village" },
    { value: "Mitchel", label: "Mitchell" },
    { value: "Names", label: "North Ames" },
    { value: "NoRidge", label: "Northridge" },
    { value: "NPkVill", label: "Northpark Villa" },
    { value: "NridgHt", label: "Northridge Heights" },
    { value: "NWAmes", label: "Northwest Ames" },
    { value: "OldTown", label: "Old Town" },
    { value: "SWISU", label: "South & West of Iowa State University" },
    { value: "Sawyer", label: "Sawyer" },
    { value: "SawyerW", label: "Sawyer West" },
    { value: "Somerst", label: "Somerset" },
    { value: "StoneBr", label: "Stone Brook" },
    { value: "Timber", label: "Timberland" },
    { value: "Veenker", label: "Veenker" },
];

export const Condition1 = [
    { value: "Artery", label: "Adjacent to arterial street" },
    { value: "Feedr", label: "Adjacent to feeder street" },
    { value: "Norm", label: "Normal" },
    { value: "RRNn", label: "Within 200' of North-South Railroad" },
    { value: "RRAn", label: "Adjacent to North-South Railroad" },
    { value: "PosN", label: "Near positive off-site feature (park, greenbelt, etc.)" },
    { value: "PosA", label: "Adjacent to positive off-site feature" },
    { value: "RRNe", label: "Within 200' of East-West Railroad" },
    { value: "RRAe", label: "Adjacent to East-West Railroad" },
];

export const Condition2 = [
    { value: "Artery", label: "Adjacent to arterial street" },
    { value: "Feedr", label: "Adjacent to feeder street" },
    { value: "Norm", label: "Normal" },
    { value: "RRNn", label: "Within 200' of North-South Railroad" },
    { value: "RRAn", label: "Adjacent to North-South Railroad" },
    { value: "PosN", label: "Near positive off-site feature (park, greenbelt, etc.)" },
    { value: "PosA", label: "Adjacent to positive off-site feature" },
    { value: "RRNe", label: "Within 200' of East-West Railroad" },
    { value: "RRAe", label: "Adjacent to East-West Railroad" },
];

export const BldgType = [
    { value: "1Fam", label: "Single-family Detached" },
    { value: "2FmCon", label: "Two-family Conversion (originally built as one-family dwelling)" },
    { value: "Duplx", label: "Duplex" },
    { value: "TwnhsE", label: "Townhouse End Unit" },
    { value: "TwnhsI", label: "Townhouse Inside Unit" },
];

export const HouseStyle = [
    { value: "1Story", label: "One story" },
    { value: "1.5Fin", label: "One and one-half story: 2nd level finished" },
    { value: "1.5Unf", label: "One and one-half story: 2nd level unfinished" },
    { value: "2Story", label: "Two story" },
    { value: "2.5Fin", label: "Two and one-half story: 2nd level finished" },
    { value: "2.5Unf", label: "Two and one-half story: 2nd level unfinished" },
    { value: "SFoyer", label: "Split Foyer" },
    { value: "SLvl", label: "Split Level" },
];

export const OverallQual = [
    { value: 10, label: "Very Excellent" },
    { value: 9, label: "Excellent" },
    { value: 8, label: "Very Good" },
    { value: 7, label: "Good" },
    { value: 6, label: "Above Average" },
    { value: 5, label: "Average" },
    { value: 4, label: "Below Average" },
    { value: 3, label: "Fair" },
    { value: 2, label: "Poor" },
    { value: 1, label: "Very Poor" },
];

export const OverallCond = [
    { value: 10, label: "Very Excellent" },
    { value: 9, label: "Excellent" },
    { value: 8, label: "Very Good" },
    { value: 7, label: "Good" },
    { value: 6, label: "Above Average" },
    { value: 5, label: "Average" },
    { value: 4, label: "Below Average" },
    { value: 3, label: "Fair" },
    { value: 2, label: "Poor" },
    { value: 1, label: "Very Poor" },
];

export const RoofStyle = [
    { value: "Flat", label: "Flat" },
    { value: "Gable", label: "Gable" },
    { value: "Gambrel", label: "Gambrel (Barn)" },
    { value: "Hip", label: "Hip" },
    { value: "Mansard", label: "Mansard" },
    { value: "Shed", label: "Shed" },
];

export const RoofMatl = [
    { value: "ClyTile", label: "Clay or Tile" },
    { value: "CompShg", label: "Standard (Composite) Shingle" },
    { value: "Membran", label: "Membrane" },
    { value: "Metal", label: "Metal" },
    { value: "Roll", label: "Roll" },
    { value: "Tar&Grv", label: "Gravel & Tar" },
    { value: "WdShake", label: "Wood Shakes" },
    { value: "WdShngl", label: "Wood Shingles" },
];

export const Exterior1st = [
    { value: "AsbShng", label: "Asbestos Shingles" },
    { value: "AsphShn", label: "Asphalt Shingles" },
    { value: "BrkComm", label: "Brick Common" },
    { value: "BrkFace", label: "Brick Face" },
    { value: "CBlock", label: "Cinder Block" },
    { value: "CemntBd", label: "Cement Board" },
    { value: "HdBoard", label: "Hard Board" },
    { value: "ImStucc", label: "Imitation Stucco" },
    { value: "MetalSd", label: "Metal Siding" },
    { value: "Other", label: "Other" },
    { value: "Plywood", label: "Plywood" },
    { value: "PreCast", label: "PreCast" },
    { value: "Stone", label: "Stone" },
    { value: "Stucco", label: "Stucco" },
    { value: "VinylSd", label: "Vinyl Siding" },
    { value: "Wd Sdng", label: "Wood Siding" },
    { value: "WdShing", label: "Wood Shingles" },
];

export const Exterior2nd = [...Exterior1st];

export const MasVnrType = [
    { value: "BrkCmn", label: "Brick Common" },
    { value: "BrkFace", label: "Brick Face" },
    { value: "CBlock", label: "Cinder Block" },
    { value: "None", label: "None" },
    { value: "Stone", label: "Stone" },
];

export const ExterQual = [
    { value: "Ex", label: "Excellent" },
    { value: "Gd", label: "Good" },
    { value: "TA", label: "Average/Typical" },
    { value: "Fa", label: "Fair" },
    { value: "Po", label: "Poor" },
];

export const ExterCond = [...ExterQual];

export const Foundation = [
    { value: "BrkTil", label: "Brick & Tile" },
    { value: "CBlock", label: "Cinder Block" },
    { value: "PConc", label: "Poured Concrete" },
    { value: "Slab", label: "Slab" },
    { value: "Stone", label: "Stone" },
    { value: "Wood", label: "Wood" },
];

export const BsmtQual = [
    { value: "Ex", label: "Excellent (100+ inches)" },
    { value: "Gd", label: "Good (90-99 inches)" },
    { value: "TA", label: "Typical (80-89 inches)" },
    { value: "Fa", label: "Fair (70-79 inches)" },
    { value: "Po", label: "Poor (<70 inches)" },
    { value: "NA", label: "No Basement" },
];

export const BsmtCond = [
    { value: "Ex", label: "Excellent" },
    { value: "Gd", label: "Good" },
    { value: "TA", label: "Typical - slight dampness allowed" },
    { value: "Fa", label: "Fair - dampness or some cracking or settling" },
    { value: "Po", label: "Poor - Severe cracking, settling, or wetness" },
    { value: "NA", label: "No Basement" },
];

export const BsmtExposure = [
    { value: "Gd", label: "Good Exposure" },
    { value: "Av", label: "Average Exposure (split levels or foyers typically score average or above)" },
    { value: "Mn", label: "Minimum Exposure" },
    { value: "No", label: "No Exposure" },
    { value: "NA", label: "No Basement" },
];

export const BsmtFinType1 = [
    { value: "GLQ", label: "Good Living Quarters" },
    { value: "ALQ", label: "Average Living Quarters" },
    { value: "BLQ", label: "Below Average Living Quarters" },
    { value: "Rec", label: "Average Rec Room" },
    { value: "LwQ", label: "Low Quality" },
    { value: "Unf", label: "Unfinished" },
    { value: "NA", label: "No Basement" },
];

export const BsmtFinType2 = [
    { value: "GLQ", label: "Good Living Quarters" },
    { value: "ALQ", label: "Average Living Quarters" },
    { value: "BLQ", label: "Below Average Living Quarters" },
    { value: "Rec", label: "Average Rec Room" },
    { value: "LwQ", label: "Low Quality" },
    { value: "Unf", label: "Unfinished" },
    { value: "NA", label: "No Basement" },
];

export const Heating = [
    { value: "Floor", label: "Floor Furnace" },
    { value: "GasA", label: "Gas forced warm air furnace" },
    { value: "GasW", label: "Gas hot water or steam heat" },
    { value: "Grav", label: "Gravity furnace" },
    { value: "OthW", label: "Hot water or steam heat other than gas" },
    { value: "Wall", label: "Wall furnace" },
];

export const HeatingQC = [
    { value: "Ex", label: "Excellent" },
    { value: "Gd", label: "Good" },
    { value: "TA", label: "Average/Typical" },
    { value: "Fa", label: "Fair" },
    { value: "Po", label: "Poor" },
];

export const CentralAir = [
    { value: "N", label: "No" },
    { value: "Y", label: "Yes" },
];

export const Electrical = [
    { value: "SBrkr", label: "Standard Circuit Breakers & Romex" },
    { value: "FuseA", label: "Fuse Box over 60 AMP and all Romex wiring (Average)" },
    { value: "FuseF", label: "60 AMP Fuse Box and mostly Romex wiring (Fair)" },
    { value: "FuseP", label: "60 AMP Fuse Box and mostly knob & tube wiring (poor)" },
    { value: "Mix", label: "Mixed" },
];

export const KitchenQual = [
    { value: "Ex", label: "Excellent" },
    { value: "Gd", label: "Good" },
    { value: "TA", label: "Average/Typical" },
    { value: "Fa", label: "Fair" },
    { value: "Po", label: "Poor" },
];

export const Functional = [
    { value: "Typ", label: "Typical Functionality" },
    { value: "Min1", label: "Minor Deductions" },
    { value: "Min2", label: "Minor Deductions (Noteworthy but acceptable)" },
    { value: "Mod", label: "Moderate Deductions" },
    { value: "Maj1", label: "Major Deductions" },
    { value: "Maj2", label: "Severe Deductions" },
];

export const Fireplaces = [
    { value: 0, label: "No Fireplace" },
    { value: 1, label: "1 Fireplace" },
    { value: 2, label: "2 Fireplaces" },
    { value: 3, label: "3 Fireplaces" },
    { value: 4, label: "4 Fireplaces" },
];

export const FireplaceQu = [
    { value: "Ex", label: "Excellent - Exceptional Masonry Fireplace" },
    { value: "Gd", label: "Good - Masonry Fireplace in main level" },
    { value: "TA", label: "Average - Prefabricated Fireplace in main living area or Masonry Fireplace in basement" },
    { value: "Fa", label: "Fair - Prefabricated Fireplace in basement" },
    { value: "Po", label: "Poor - Ben Franklin Stove" },
    { value: "NA", label: "No Fireplace" },
];
  

export const GarageType = [
    { value: "Attchd", label: "Attached" },
    { value: "Basment", label: "Basement" },
    { value: "BuiltIn", label: "Built-In" },
    { value: "CarPort", label: "Car Port" },
    { value: "Detchd", label: "Detached" },
    { value: "NA", label: "No Garage" },
];

export const GarageFinish = [
    { value: "Fin", label: "Finished" },
    { value: "RFn", label: "Rough Finished" },
    { value: "Unf", label: "Unfinished" },
    { value: "NA", label: "No Garage" },
];

export const GarageQual = [
    { value: "Ex", label: "Excellent" },
    { value: "Gd", label: "Good" },
    { value: "TA", label: "Typical/Avg" },
    { value: "Fa", label: "Fair" },
    { value: "Po", label: "Poor" },
    { value: "NA", label: "No Garage" },
];

export const GarageCond = [
    { value: "Ex", label: "Excellent" },
    { value: "Gd", label: "Good" },
    { value: "TA", label: "Typical/Avg" },
    { value: "Fa", label: "Fair" },
    { value: "Po", label: "Poor" },
    { value: "NA", label: "No Garage" },
];

export const PavedDrive = [
    { value: "Y", label: "Paved" },
    { value: "P", label: "Partially Paved" },
    { value: "N", label: "Not Paved" },
];

export const PoolQC = [
    { value: "Ex", label: "Excellent" },
    { value: "Gd", label: "Good" },
    { value: "TA", label: "Average/Typical" },
    { value: "Fa", label: "Fair" },
    { value: "Po", label: "Poor" },
    { value: "NA", label: "No Pool" },
];

export const Fence = [
    { value: "GdPrv", label: "Good Privacy" },
    { value: "MnPrv", label: "Minimum Privacy" },
    { value: "GdWo", label: "Good Wood" },
    { value: "MnWo", label: "Minimum Wood" },
    { value: "NA", label: "No Fence" },
];

export const MiscFeature = [
    { value: "Elev", label: "Elevator" },
    { value: "Gar2", label: "2nd Garage" },
    { value: "Othr", label: "Other" },
    { value: "Shed", label: "Shed" },
    { value: "NA", label: "No Misc Feature" },
];

export const SaleType = [
    { value: "WD", label: "Warranty Deed - Conventional" },
    { value: "CWD", label: "Warranty Deed - Special Conditions" },
    { value: "VWD", label: "Deed in Lieu of Foreclosure" },
    { value: "New", label: "Home sold by the builder" },
    { value: "COD", label: "Court Officer Deed/Trustee Deed" },
    { value: "Con", label: "Contract 15% Down payment assistance" },
    { value: "Oth", label: "Other" },
];

export const SaleCondition = [
    { value: "Normal", label: "Normal Sale" },
    { value: "Abnorml", label: "Abnormal Sale" },
    { value: "AdjLand", label: "Adjoining Land Purchase" },
    { value: "Alloca", label: "Allocation Sale" },
    { value: "Family", label: "Family Sale" },
];
