# 🎓 Student Performance Prediction System

An AI-powered web application that predicts student performance using Machine Learning, built with **FastAPI (backend)** and **Next.js (frontend dashboard)**.

---

## 🚀 Features

* 📊 Predict student performance (Pass/Fail)
* 🎯 Probability score for prediction
* ⚡ FastAPI-based ML backend
* 💻 Interactive Next.js dashboard
* 🔗 Real-time API integration
* 📈 Clean UI with result insights

---

## 🛠️ Tech Stack

### 🔹 Backend

* Python
* FastAPI
* Scikit-learn
* Pandas
* NumPy

### 🔹 Frontend

* Next.js
* React
* TypeScript

---

## 📂 Project Structure

```
Student-Performance-Prediction/
│
├── serving/                # FastAPI backend
│   └── app.py
│
├── src/                    # ML pipeline & training
│   ├── pipeline.py
│   └── train.py
│
├── student-dashboard/      # Next.js frontend
│   └── app/
│       └── page.tsx
│
├── requirements.txt
└── README.md
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone Repository

```
git clone https://github.com/your-username/student-performance-prediction.git
cd student-performance-prediction
```

---

### 🔹 2. Backend Setup

```
cd serving
pip install -r ../requirements.txt
uvicorn app:app --reload
```

👉 Backend runs at:
`http://127.0.0.1:8000`

---

### 🔹 3. Frontend Setup

```
cd student-dashboard
npm install
npm run dev
```

👉 Frontend runs at:
`http://localhost:3000`

---

## 🔗 API Endpoint

### POST `/predict`

**Request:**

```json
{
  "age": 20,
  "studytime": 2
}
```

**Response:**

```json
{
  "prediction": 1,
  "probability": 0.9985,
  "status": "Pass"
}
```

---

## 📸 Screenshots

*Add your project screenshots here*

---

## 🎯 Future Improvements

* 📊 Add data visualization charts
* 👨‍🎓 Support bulk student prediction
* ☁️ Deploy on cloud (Vercel + Render)
* 🔐 Add authentication system

---

## 👩‍💻 Author

**Arpita Bhendigeri**

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
