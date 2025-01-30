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

git clone <repository-url>
cd medical-symptom-analyzer
Step 2: Set up the Python environment (optional but recommended)

python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Step 3: Install dependencies
Create a requirements.txt file for the Python backend with the following content:

txt
Copy
Edit
Flask==2.1.1
Flask-Cors==3.1.1
tensorflow==2.10.0
scikit-learn==1.1.1
numpy==1.23.3
pandas==1.5.2
Then, run the following command to install these dependencies:


pip install -r requirements.txt
Step 4: Run the Flask API
Once the dependencies are installed, you can run the backend server:


python backend_flask_api.py
The Flask API should now be running on http://localhost:5000.

Setting Up the Frontend (React)
Step 1: Install Node.js and npm
Make sure you have Node.js and npm installed. If not, download and install them from nodejs.org.

Step 2: Install React dependencies
Navigate to the src/ folder and install the necessary dependencies:


npm install axios
Step 3: Set up React app
If you haven't set up the React app yet, you can create it using create-react-app:


npx create-react-app medical-symptom-analyzer
cd medical-symptom-analyzer
Once inside the project, replace the contents of the src/App.js and src/App.css files with the custom code provided.

App.js: Contains the React component for the user interface, which allows the user to input symptoms and interact with the backend API.
App.css: Styles for the frontend, defining the layout and appearance.
Step 4: Start the React app
After configuring the app, you can start the frontend React app by running:


npm start
The React frontend should now be running on http://localhost:3000.

How to Use
Open the React app in your browser at http://localhost:3000.
Enter your symptoms in the provided input field (e.g., headache, fever, cough).
Click the "Analyze Symptoms" button to send the data to the Flask API.
The system will return possible conditions based on your symptoms, along with a confidence score for each condition.
Notes
This tool is for informational purposes only. Always consult a healthcare professional for medical advice.
The machine learning model used for prediction is pre-trained and stored in the backend.
The Flask API processes the input symptoms, runs them through the pre-trained model, and returns the possible conditions.
Requirements
Python Requirements (Backend)
Make sure to install the dependencies listed in requirements.txt for the Python backend:


pip install -r requirements.txt
React Requirements (Frontend)
axios: Used for making HTTP requests from React to Flask API.

npm install axios
.gitignore
Ensure the following files are ignored by Git by creating a .gitignore file in the project root:

plaintext
Copy
Edit
node_modules/
venv/
*.pyc
__pycache__/
.env
This ensures that unnecessary files (like virtual environments or dependencies) are not uploaded to GitHub.
