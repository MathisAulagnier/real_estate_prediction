from flask import Flask, request, jsonify
from prediction import create_instance, predict

app = Flask(__name__)

# Autoriser les requêtes depuis React
from flask_cors import CORS
CORS(app)

@app.route('/')
def home():
    return "Bienvenue sur l'API de prédiction de prix des maisons. Utilisez la route /predict pour envoyer des données."


@app.route('/predict', methods=['POST'])
def predict_house_price():
    data = request.json
    print(data['parameters'])
    try:
        # Validation des données
        if 'parameters' not in data or not isinstance(data['parameters'], list):
            return jsonify({'error': 'Invalid input: "parameters" should be a list'}), 400
        model_path = '../Models/voting_regressor_model.pkl'
        # les données sont elles sous la bonne forme ??!
        instance = create_instance(data['parameters'])
        print("Instance créée avec succès!")

        predictions = predict(model_path, instance)
        print("Prédictions effectuées avec succès!")

        return jsonify({'prix_predit': predictions[0]})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
