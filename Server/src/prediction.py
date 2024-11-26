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


def create_instance(liste):
    '''
    Créer une instance à partir d'une liste
    '''
    # Création d'un dictionnaire qui associe chaque colonne à sa valeur
    data = {
        'MSSubClass': [liste[0]],
        'MSZoning': [liste[1]],
        'LotFrontage': [liste[2]],
        'LotArea': [liste[3]],
        'Street': [liste[4]],
        'LotShape': [liste[5]],
        'LandContour': [liste[6]],
        'Utilities': [liste[7]],
        'LotConfig': [liste[8]],
        'LandSlope': [liste[9]],
        'Neighborhood': [liste[10]],
        'Condition1': [liste[11]],
        'Condition2': [liste[12]],
        'BldgType': [liste[13]],
        'HouseStyle': [liste[14]],
        'OverallQual': [liste[15]],
        'OverallCond': [liste[16]],
        'YearBuilt': [liste[17]],
        'YearRemodAdd': [liste[18]],
        'RoofStyle': [liste[19]],
        'RoofMatl': [liste[20]],
        'Exterior1st': [liste[21]],
        'Exterior2nd': [liste[22]],
        'MasVnrType': [liste[23]],
        'MasVnrArea': [liste[24]],
        'ExterQual': [liste[25]],
        'ExterCond': [liste[26]],
        'Foundation': [liste[27]],
        'BsmtQual': [liste[28]],
        'BsmtCond': [liste[29]],
        'BsmtExposure': [liste[30]],
        'BsmtFinType1': [liste[31]],
        'BsmtFinSF1': [liste[32]],
        'BsmtFinSF2': [liste[33]],
        'BsmtUnfSF': [liste[34]],
        'TotalBsmtSF': [liste[35]],
        'Heating': [liste[36]],
        'HeatingQC': [liste[37]],
        'CentralAir': [liste[38]],
        'Electrical': [liste[39]],
        '1stFlrSF': [liste[40]],
        '2ndFlrSF': [liste[41]],
        'LowQualFinSF': [liste[42]],
        'GrLivArea': [liste[43]],
        'BsmtFullBath': [liste[44]],
        'BsmtHalfBath': [liste[45]],
        'FullBath': [liste[46]],
        'HalfBath': [liste[47]],
        'BedroomAbvGr': [liste[48]],
        'KitchenAbvGr': [liste[49]],
        'KitchenQual': [liste[50]],
        'TotRmsAbvGrd': [liste[51]],
        'Functional': [liste[52]],
        'Fireplaces': [liste[53]],
        'FireplaceQu': [liste[54]],
        'GarageType': [liste[55]],
        'GarageFinish': [liste[56]],
        'GarageCars': [liste[57]],
        'GarageQual': [liste[58]],
        'PavedDrive': [liste[59]],
        'WoodDeckSF': [liste[60]],
        'OpenPorchSF': [liste[61]],
        'EnclosedPorch': [liste[62]],
        '3SsnPorch': [liste[63]],
        'ScreenPorch': [liste[64]],
        'PoolArea': [liste[65]],
        'MiscVal': [liste[66]],
        'MoSold': [liste[67]],
        'YrSold': [liste[68]],
        'SaleType': [liste[69]],
        'SaleCondition': [liste[70]]
    }
    return pd.DataFrame(data)




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