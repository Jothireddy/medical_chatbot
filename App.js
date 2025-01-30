import React, { useState } from "react";
import { AlertCircle, Loader2, Activity, Info } from "lucide-react";
import axios from "axios";
import './App.css'; // Import your custom styles here

export default function MedicalSymptomAnalyzer() {
  const [symptoms, setSymptoms] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzeSymptoms = async () => {
    if (!symptoms.trim()) {
      setError("Please enter symptoms to analyze.");
      return;
    }
    setError(null);
    setLoading(true);
    setResults([]);
    
    try {
      const response = await axios.post("http://localhost:5000/analyze", {
        conversation: symptoms,
      });
      setResults(response.data);
    } catch (err) {
      setError("Failed to get results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <div className="card">
          {/* Header */}
          <div className="header">
            <Activity className="activity-icon" />
            <h1 className="title">Medical Symptom Analyzer</h1>
          </div>

          {/* Description */}
          <div className="description">
            <div className="info-alert">
              <Info className="info-icon" />
              <h3 className="info-title">How to use</h3>
              <p className="info-description">
                Describe your symptoms in detail below. Our system will analyze them and suggest possible conditions.
                This is not a substitute for professional medical advice.
              </p>
            </div>
          </div>

          {/* Input Section */}
          <div className="input-section">
            <textarea
              className="input-textarea"
              placeholder="Describe your symptoms here... (e.g., headache, fever, fatigue)"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
            
            <button
              className="analyze-button"
              onClick={analyzeSymptoms}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="loading-icon" />
                  Analyzing...
                </>
              ) : (
                "Analyze Symptoms"
              )}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="error-alert">
              <AlertCircle className="error-icon" />
              <h3 className="error-title">Error</h3>
              <p className="error-message">{error}</p>
            </div>
          )}

          {/* Results Section */}
          {results.length > 0 && (
            <div className="results-section">
              <h2 className="results-title">Possible Conditions</h2>
              <div className="results-list">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="result-item"
                  >
                    <div className="result-header">
                      <h3 className="result-title">{result.disease}</h3>
                      <div className="result-confidence">
                        <span>Confidence:</span>
                        <span className="confidence-value">
                          {(result.probability * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="disclaimer">
          This tool is for informational purposes only. Always consult with a healthcare professional for medical advice.
        </div>
      </div>
    </div>
  );
}
