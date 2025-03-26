"use client";
import React from "react";
const FishPrediction: React.FC = () => {
  const handleOpenHeatmap = () => {
    const fileUrl =
      "file:///C:/Users/91721/AppData/Local/Microsoft/Windows/INetCache/IE/0P501C1D/fish_catch_heatmap%20(1)[1].html";
    window.open(fileUrl, "_blank");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" ,background:"white"}}>
      <h1 className="text-1xl text-center font-bold text-blue-600 mb-4">
        Fish Prediction Heatmap
      </h1>
      <button
        onClick={handleOpenHeatmap}
        style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
      >
        Open Heatmap
      </button>
    </div>
  );
};

export default FishPrediction;
