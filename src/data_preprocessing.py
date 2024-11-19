# Data Manipulation
import pandas as pd
import numpy as np

# Data Preprocessing
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder, OrdinalEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

# Save and Load Models
import joblib


def load_data(df_path):
    return pd.read_csv(df_path)

def clean_data(df, train = True):
    '''
    Nettoyage des données
    '''
    df = df.drop(columns = ['PoolQC', 'MiscFeature', 'Alley', 'Fence', 'GarageYrBlt', 'GarageCond', 'BsmtFinType2', 'GarageArea'])
    df['MasVnrType'].fillna('BrkCmn', inplace=True)
    df['LotFrontage'].fillna(df['LotFrontage'].median(), inplace=True)
    df['FireplaceQu'].fillna('Po', inplace=True)
    df['GarageType'].fillna('Unknown', inplace=True)
    df['GarageFinish'].fillna('Unf', inplace=True)
    df['GarageQual'].fillna('TA', inplace=True)
    df['BsmtExposure'].fillna('NoBasement', inplace=True)
    df['BsmtQual'].fillna('NoBasement', inplace=True)
    df['BsmtCond'].fillna('NoBasement', inplace=True)
    df['BsmtFinType1'].fillna('Unf', inplace=True)
    df['MasVnrArea'].fillna(0, inplace=True)
    df['Electrical'].fillna('SBrkr', inplace=True)

    if train:
        df['SalePrice'] = np.log1p(df['SalePrice'])

    return df

def create_preprocessor(df):
    ordinal_columns = [
        'LotShape', 
        'LandContour',
        'Utilities',
        'LandSlope',  
        'BsmtQual',  
        'BsmtFinType1',  
        'CentralAir',  
        'Functional', 
        'FireplaceQu', 
        'GarageFinish', 
        'GarageQual', 
        'PavedDrive', 
        'ExterCond', 
        'KitchenQual', 
        'BsmtExposure', 
        'HeatingQC',
        'ExterQual', 
        'BsmtCond'
    ]

    categorical_columns = [
        'Street', 
        'LotConfig',
        'Neighborhood', 
        'Condition1', 
        'Condition2', 
        'BldgType', 
        'HouseStyle', 
        'RoofStyle', 
        'Exterior1st', 
        'Exterior2nd',
        'MasVnrType',
        'Foundation',  
        'Electrical',  
        'SaleType', 
        'MSZoning', 
        'SaleCondition', 
        'Heating', 
        'GarageType', 
        'RoofMatl'
    ]

    numerical_columns = df.select_dtypes(include=[np.number]).columns.to_list()
    numerical_columns.remove('SalePrice')
    numerical_columns.remove('Id')

    numeric_transformer = Pipeline(steps=[
        ('imputer', SimpleImputer(strategy='mean')), # Remplace les valeurs manquantes par la moyenne
        ('scaler', StandardScaler()) # Standardise les valeurs (Moyenne = 0, Ecart-type = 1)
    ]) 

    categorical_transformer = Pipeline(steps=[
        ('imputer', SimpleImputer(strategy='most_frequent')), # Remplace les valeurs manquantes par 'missing'
        ('onehot', OneHotEncoder(handle_unknown='ignore')) # Encodage one-hot
    ])

    ordinal_transformer = Pipeline(steps=[
        ('imputer', SimpleImputer(strategy='most_frequent')), # Remplace les valeurs manquantes par 'missing'
        ('ordinal', OrdinalEncoder(handle_unknown='use_encoded_value', unknown_value=-1)) # Encodage ordinal
    ])

    preprocessor = ColumnTransformer(
        transformers=[
            ('num', numeric_transformer, numerical_columns),
            ('cat', categorical_transformer, categorical_columns),
            ('ord', ordinal_transformer, ordinal_columns)
        ],
        remainder='passthrough', # Ignore les colonnes non transformées
        n_jobs=-1 # Utilise tous les coeurs du CPU
    )

    return preprocessor

def prepare_data(df):
    '''
    Préparation des données
    '''
    X = df.drop(columns = ['SalePrice', 'Id'])
    y = df['SalePrice']
    return X, y