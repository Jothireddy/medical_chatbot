from flask import Flask, request, jsonify
import tensorflow as tf
import pickle
import numpy as np
from tensorflow.keras.preprocessing.sequence import pad_sequences
from flask_cors import CORS

# Load the trained model
model = tf.keras.models.load_model("medical_analyzer_model.keras")

# Load the tokenizer
with open("medical_analyzer_tokenizer.pickle", "rb") as handle:
    tokenizer = pickle.load(handle)

# Load the label encoder
with open("medical_analyzer_label_encoder.pickle", "rb") as handle:
    label_encoder = pickle.load(handle)

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

MAX_LEN = 200  # Should match the value used during training

@app.route("/analyze", methods=["POST"])
def analyze_symptoms():
    try:
        data = request.get_json()
        conversation = data.get("conversation", "")
        
        if not conversation:
            return jsonify({"error": "No symptoms provided."}), 400
        
        # Preprocess input
        sequence = tokenizer.texts_to_sequences([conversation])
        padded_sequence = pad_sequences(sequence, maxlen=MAX_LEN, padding='post')
        
        # Get prediction probabilities
        predictions = model.predict(padded_sequence)
        
        # Get top 3 predictions
        top_3_indices = np.argsort(predictions[0])[-3:][::-1]
        results = []
        
        for idx in top_3_indices:
            disease = label_encoder.inverse_transform([idx])[0]
            probability = predictions[0][idx]
            results.append({
                "disease": disease,
                "probability": float(probability)
            })
        
        return jsonify(results)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
pyth