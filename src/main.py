from data_preprocessing import load_data, clean_data, create_preprocessor, prepare_data
from model_training import train_models
from prediction import load_model, load_data_for_pred, predict, create_instance

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




if __name__ == "__main__":
    test()