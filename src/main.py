from data_preprocessing import load_data, clean_data, create_preprocessor, prepare_data
from model_training import train_models
from prediction import load_model, load_data_for_pred, predict, create_instance

import pandas as pd

from sklearn.pipeline import Pipeline

import joblib

import warnings
warnings.filterwarnings('ignore')


def train():
    # Chemins des fichiers de données
    train_path = '../home-data-for-ml-course/train.csv'
    
    # Charger les données
    train_df = load_data(train_path)

    # Nettoyer les données
    train_df = clean_data(train_df)

    # Préparer les données pour l'entraînement
    X, y = prepare_data(train_df)

    # Créer le préprocesseur
    preprocessor = create_preprocessor(train_df)

    # Créer un pipeline complet
    pipeline = Pipeline(steps=[
        ('preprocessor', preprocessor)
    ])

    # Transformer les données
    X_preprocessed = pipeline.fit_transform(X)

    # Sauvegarder la pipeline
    joblib.dump(pipeline, '../Models/preprocessor.pkl')
    print("Pipeline sauvegardée avec succès!")



    # Entraîner les modèles
    best_model = train_models(X_preprocessed, y, save=True, verbose=True, verbose_list=[True, True, True, True], save_list=[True, True, True, True])

    print("Modèle entraîné avec succès!")

def test():
    model_path = '../Models/voting_regressor_model.pkl'
    df_path = '../home-data-for-ml-course/test.csv'

    # Charger les données
    df = load_data_for_pred(df_path)

    # predictions
    predictions = predict(model_path, df, save_submition=True)
    print("Prédictions effectuées avec succès!")

def estimate_its_house(lst):
    # Créer une instance
    model_path = '../Models/voting_regressor_model.pkl'
    instance = create_instance(lst)
    print("Instance créée avec succès!")
    predictions = predict(model_path, instance)
    print("Prédictions effectuées avec succès!")
    print("Le prix de la maison est estimé à: ", predictions[0])
    return predictions[0]


# df = pd.read_csv('../home-data-for-ml-course/train.csv')

# df = df.iloc[:1, :]
# df = df[[
#     'MSSubClass',
#     'MSZoning',
#     'LotFrontage',
#     'LotArea',
#     'Street',
#     'LotShape',
#     'LandContour',
#     'Utilities',
#     'LotConfig',
#     'LandSlope',
#     'Neighborhood',
#     'Condition1',
#     'Condition2',
#     'BldgType',
#     'HouseStyle',
#     'OverallQual',
#     'OverallCond',
#     'YearBuilt',
#     'YearRemodAdd',
#     'RoofStyle',
#     'RoofMatl',
#     'Exterior1st',
#     'Exterior2nd',
#     'MasVnrType',
#     'MasVnrArea',
#     'ExterQual',
#     'ExterCond',
#     'Foundation',
#     'BsmtQual',
#     'BsmtCond',
#     'BsmtExposure',
#     'BsmtFinType1',
#     'BsmtFinSF1',
#     'BsmtFinSF2',
#     'BsmtUnfSF',
#     'TotalBsmtSF',
#     'Heating',
#     'HeatingQC',
#     'CentralAir',
#     'Electrical',
#     '1stFlrSF',
#     '2ndFlrSF',
#     'LowQualFinSF',
#     'GrLivArea',
#     'BsmtFullBath',
#     'BsmtHalfBath',
#     'FullBath',
#     'HalfBath',
#     'BedroomAbvGr',
#     'KitchenAbvGr',
#     'KitchenQual',
#     'TotRmsAbvGrd',
#     'Functional',
#     'Fireplaces',
#     'FireplaceQu',
#     'GarageType',
#     'GarageFinish',
#     'GarageCars',
#     'GarageQual',
#     'PavedDrive',
#     'WoodDeckSF',
#     'OpenPorchSF',
#     'EnclosedPorch',
#     '3SsnPorch',
#     'ScreenPorch',
#     'PoolArea',
#     'MiscVal',
#     'MoSold',
#     'YrSold',
#     'SaleType',
#     'SaleCondition'
# ]]

# liste = df.values.tolist()[0]
# print(liste)
# print(type(liste))


if __name__ == "__main__":
    # estimate_its_house(liste)
    print("Training...")
    