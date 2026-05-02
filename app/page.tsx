"use client";

import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type ResultType = {
  prediction: number;
  probability: number;
  status: string;
};

export default function Home() {
  const [result, setResult] = useState<ResultType | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age: 17,
          studytime: 3,
          failures: 0,
          absences: 4,
          G1: 12,
          G2: 13,
          school: "GP",
          sex: "F",
          address: "U",
          famsize: "GT3",
          Pstatus: "T",
        }),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      alert("API Error");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🎓 Student Performance Dashboard</h1>

      <button
        onClick={handlePredict}
        style={{
          padding: "12px",
          marginTop: "20px",
          width: "250px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {loading ? "Loading..." : "Run Prediction"}
      </button>

      {result && (
        <div style={{ marginTop: "30px" }}>
          <h2>Result</h2>

          <p>
            <strong>Status:</strong> {result.status}
          </p>

          <p>
            <strong>Probability:</strong>{" "}
            {(result.probability * 100).toFixed(2)}%
          </p>

          <div style={{ width: 250, margin: "auto" }}>
            <Doughnut
              data={{
                labels: ["Pass", "Fail"],
                datasets: [
                  {
                    data: [
                      result.probability,
                      1 - result.probability,
                    ],
                    backgroundColor: ["#22c55e", "#ef4444"],
                  },
                ],
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}