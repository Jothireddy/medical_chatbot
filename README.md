# Medical Symptom Analyzer

This project is a medical symptom analyzer tool built using a **Flask** backend and a **React** frontend. The system uses a **machine learning model** to analyze input symptoms and suggest possible conditions. It is designed to assist users by providing suggestions based on their symptoms, although it is not a substitute for professional medical advice.

## Project Structure

```plaintext
medical-symptom-analyzer/
  ├── backend_flask_api.py        # Flask API for handling the analysis request
  ├── medical_analyzer_model.keras # Keras model for symptom analysis
  ├── medical_analyzer_tokenizer.pickle # Tokenizer for text processing
  ├── medical_analyzer_label_encoder.pickle # Label encoder for predicting conditions
  ├── src/
  │   ├── App.js                  # React component for displaying UI
  │   ├── App.css                 # CSS file for styling the frontend
  │   ├── index.js                # Entry point for React app
  ├── requirements.txt            # Python dependencies for backend
  ├── package.json                # React dependencies for frontend
  ├── README.md                   # Project overview and setup instructions
  └── .gitignore                  # Git ignore file to exclude unnecessary files
Setting Up the Backend (Python)
Step 1: Clone the repository
bash
Copy
Edit
git clone <repository-url>
cd medical-symptom-analyzer
Step 2: Set up the Python environment (optional)
bash
Copy
Edit
python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Step 3: Install dependencies
bash
Copy
Edit
pip install -r requirements.txt
Step 4: Run the Flask API
bash
Copy
Edit
python backend_flask_api.py
The Flask backend should now be running on http://localhost:5000.

Setting Up the Frontend (React)
Step 1: Install Node.js and npm
Make sure you have Node.js and npm installed. If not, download them from nodejs.org.

Step 2: Install React dependencies
Navigate to the src/ folder and install the necessary dependencies:

bash
Copy
Edit
npm install axios
Step 3: Start the React app
In the src/ folder, run:

bash
Copy
Edit
npm start
The React frontend should now be running on http://localhost:3000.

How to Use
Open the React app in your browser.
Enter your symptoms in the provided input field (e.g., headache, fever, cough).
Click the "Analyze Symptoms" button to send the data to the Flask API.
The system will return possible conditions based on your symptoms, along with a confidence score.
Notes
This tool is for informational purposes only. Always consult a healthcare professional for medical advice.
The machine learning model used for prediction is pre-trained and stored in the backend.
