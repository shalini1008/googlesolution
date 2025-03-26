"use client";
import React, { useState } from "react";
import { getCurrentLocation } from "../services/geolocationService";
import { isOutsideIndia } from "../utils/borderUtils";

const Map = () => {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
  const [isCrossedBorder, setIsCrossedBorder] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetLocation = async () => {
    try {
      setError(null); // Reset any previous errors
      const position = await getCurrentLocation();
      const { latitude, longitude } = position.coords;
      setLocation(position.coords);

      // Check if the user is outside India
      const hasCrossed = isOutsideIndia(latitude, longitude);
      setIsCrossedBorder(hasCrossed);
    } catch (err) {
      setError("Unable to retrieve location. Please try again.");
      console.error("Error getting location:", err);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" ,background:"white"}}>
      <h1>Get Your Current Location</h1>
      <button
        onClick={handleGetLocation}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Get Location
      </button>
      
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      
      {location && (
        <div style={{ marginTop: "20px" }}>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          {isCrossedBorder ? (
            <p style={{ color: "red" }}>Warning: You have crossed the border!</p>
          ) : (
            <p style={{ color: "green" }}>You are within India.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Map;
