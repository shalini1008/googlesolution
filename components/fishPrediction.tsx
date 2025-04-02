"use client";

import React from "react";
import { useRouter } from "next/navigation";

const FishPrediction: React.FC = () => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push("/fishheatmap"); 
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" ,background:"white"}}>
            <h1 className="text-1xl text-center font-bold text-blue-600 mt-4 mb-4">Fish Prediction</h1>
            <button onClick={handleNavigation}
             style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
                Fish prediction
            </button>
        </div>
    );
};

export default FishPrediction;

