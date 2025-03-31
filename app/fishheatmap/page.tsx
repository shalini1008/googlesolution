"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "@/components/navbar"
type FishData = {
  Date: string;
  Species: string;
  Latitude: number;
  Longitude: number;
  CatchWeight: number;
};

const FishHeatmap: React.FC = () => {
  const [data, setData] = useState<FishData[]>([]);
  const [selectedSpecies, setSelectedSpecies] = useState<string>("All Species");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`Fetching data for species: ${selectedSpecies}`);
        const response = await fetch(
          `/api/fishdata?species=${encodeURIComponent(selectedSpecies)}`,
          { cache: "no-store" } // Ensures fresh data every request
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching fish data:", error);
      }
    };

    fetchData();
  }, [selectedSpecies]); // Re-fetch when species changes

  const speciesOptions = [
    "All Species",
    "Sardine",
    "Mackerel",
    "Anchovy",
    "Tuna",
    "Snapper",
    "Grouper",
    "Prawns",
    "Crabs",
    "Seer Fish",
    "Pomfret",
  ];

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold text-center">
        Tamil Nadu Fish Catch Heatmap
      </h1>
      <div className="flex justify-center my-4">
        <select
          className="border p-2"
          value={selectedSpecies}
          onChange={(e) => setSelectedSpecies(e.target.value)}
        >
          {speciesOptions.map((species) => (
            <option key={species} value={species}>
              {species}
            </option>
          ))}
        </select>
      </div>
      <MapContainer
        center={[10.7, 79.8]} // Tamil Nadu's approximate center
        zoom={7}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.map((fish, index) => (
          <CircleMarker
            key={index}
            center={[fish.Latitude, fish.Longitude]}
            radius={Math.sqrt(fish.CatchWeight)}
            fillOpacity={0.5}
            color="blue"
          >
            <Tooltip>
              <div>
                <strong>Species:</strong> {fish.Species}
                <br />
                <strong>Catch Weight:</strong> {fish.CatchWeight} kg
              </div>
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default FishHeatmap;
