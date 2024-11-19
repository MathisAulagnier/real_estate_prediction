import joblib

from sklearn.pipeline import Pipeline

import pandas as pd
import numpy as np

def load_model(model_path):
    # Charger le modèle
    model = joblib.load(model_path)
    return model

def load_data_for_pred(data_path):
    # Charger les données 
    data = pd.read_csv(data_path)
    # print(data.head())
    return data


def create_instance(
    MSSubClass,
    MSZoning,
    LotFrontage,
    LotArea,
    Street,
    LotShape,
    LandContour,
    Utilities,
    LotConfig,
    LandSlope,
    Neighborhood,
    Condition1,
    Condition2,
    BldgType,
    HouseStyle,
    OverallQual,
    OverallCond,
    YearBuilt,
    YearRemodAdd,
    RoofStyle,
    RoofMatl,
    Exterior1st,
    Exterior2nd,
    MasVnrType,
    MasVnrArea,
    ExterQual,
    ExterCond,
    Foundation,
    BsmtQual,
    BsmtCond,
    BsmtExposure,
    BsmtFinType1,
    BsmtFinSF1,
    BsmtFinSF2,
    BsmtUnfSF,
    TotalBsmtSF,
    Heating,
    HeatingQC,
    CentralAir,
    Electrical,
    _1stFlrSF,
    _2ndFlrSF,
    LowQualFinSF,
    GrLivArea,
    BsmtFullBath,
    BsmtHalfBath,
    FullBath,
    HalfBath,
    BedroomAbvGr,
    KitchenAbvGr,
    KitchenQual,
    TotRmsAbvGrd,
    Functional,
    Fireplaces,
    FireplaceQu,
    GarageType,
    GarageFinish,
    GarageCars,
    GarageQual,
    PavedDrive,
    WoodDeckSF,
    OpenPorchSF,
    EnclosedPorch,
    _3SsnPorch,
    ScreenPorch,
    PoolArea,
    MiscVal,
    MoSold,
    YrSold,
    SaleType,
    SaleCondition
):
     return np.array([
        MSSubClass,
        MSZoning,
        LotFrontage,
        LotArea,
        Street,
        LotShape,
        LandContour,
        Utilities,
        LotConfig,
        LandSlope,
        Neighborhood,
        Condition1,
        Condition2,
        BldgType,
        HouseStyle,
        OverallQual,
        OverallCond,
        YearBuilt,
        YearRemodAdd,
        RoofStyle,
        RoofMatl,
        Exterior1st,
        Exterior2nd,
        MasVnrType,
        MasVnrArea,
        ExterQual,
        ExterCond,
        Foundation,
        BsmtQual,
        BsmtCond,
        BsmtExposure,
        BsmtFinType1,
        BsmtFinSF1,
        BsmtFinSF2,
        BsmtUnfSF,
        TotalBsmtSF,
        Heating,
        HeatingQC,
        CentralAir,
        Electrical,
        _1stFlrSF,
        _2ndFlrSF,
        LowQualFinSF,
        GrLivArea,
        BsmtFullBath,
        BsmtHalfBath,
        FullBath,
        HalfBath,
        BedroomAbvGr,
        KitchenAbvGr,
        KitchenQual,
        TotRmsAbvGrd,
        Functional,
        Fireplaces,
        FireplaceQu,
        GarageType,
        GarageFinish,
        GarageCars,
        GarageQual,
        PavedDrive,
        WoodDeckSF,
        OpenPorchSF,
        EnclosedPorch,
        _3SsnPorch,
        ScreenPorch,
        PoolArea,
        MiscVal,
        MoSold,
        YrSold,
        SaleType,
        SaleCondition
    ]).reshape(1, -1)




def predict(model_path, df, save_submition = False):
    # Charger le modèle et le préprocesseur
    preprocessor = load_model('../Models/preprocessor.pkl')
    model = load_model(model_path)


    X = preprocessor.transform(df)
    

    # Prédire les prix
    predictions = model.predict(X)
    # print(pd.DataFrame(predictions).head())
    predictions = np.expm1(predictions)


    # Sauvegarder les prédictions
    if save_submition:
        submition = pd.DataFrame({
            'Id': df.index + 1461,
            'SalePrice': predictions
        })
        submition.to_csv('../Submitions/submition.csv', index=False)
        print("Prédictions sauvegardées dans ../Submitions/submition.csv")
    
    return predictions