// import type { NextApiRequest, NextApiResponse } from "next";
// import { random, sample } from "lodash";

// // Tamil Nadu coastal points
// const TAMIL_NADU_COASTAL_POINTS = [
//   { lat: 13.08, lon: 80.27, name: "Chennai" },
//   { lat: 12.52, lon: 80.19, name: "Mahabalipuram" },
//   { lat: 11.94, lon: 79.80, name: "Puducherry" },
//   { lat: 11.74, lon: 79.77, name: "Cuddalore" },
//   { lat: 10.76, lon: 79.84, name: "Nagapattinam" },
//   { lat: 10.37, lon: 79.13, name: "Thondi" },
//   { lat: 9.28, lon: 79.31, name: "Rameswaram" },
//   { lat: 8.76, lon: 78.11, name: "Thoothukudi" },
//   { lat: 8.08, lon: 77.53, name: "Kanyakumari" },
// ];

// const SPECIES_LIST = [
//   "Sardine",
//   "Mackerel",
//   "Anchovy",
//   "Tuna",
//   "Snapper",
//   "Grouper",
//   "Prawns",
//   "Crabs",
//   "Seer Fish",
//   "Pomfret",
// ];

// function generateFishData(numRecords: number) {
//   const data = [];

//   for (let i = 0; i < numRecords; i++) {
//     const location = sample(TAMIL_NADU_COASTAL_POINTS)!;
//     const latitude = location.lat + random(-0.15, 0.15, true);
//     const longitude = location.lon + random(-0.15, 0.15, true);
//     const species = sample(SPECIES_LIST)!;
//     const catchWeight = Math.max(1, random(1, 150, true));

//     data.push({
//       Date: new Date().toISOString(),
//       Species: species,
//       Latitude: latitude,
//       Longitude: longitude,
//       CatchWeight: catchWeight,
//     });
//   }

//   return data;
// }

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const species = req.query.species as string || "All Species";
//   const allData = generateFishData(2000);

//   const filteredData =
//     species !== "All Species"
//       ? allData.filter((item) => item.Species === species)
//       : allData;

//   res.status(200).json(filteredData);
// }
import { NextResponse } from "next/server";
import { random, sample } from "lodash";

const TAMIL_NADU_COASTAL_POINTS = [
  { lat: 13.08, lon: 80.27, name: "Chennai" },
  { lat: 12.52, lon: 80.19, name: "Mahabalipuram" },
  { lat: 11.94, lon: 79.80, name: "Puducherry" },
  { lat: 11.74, lon: 79.77, name: "Cuddalore" },
  { lat: 10.76, lon: 79.84, name: "Nagapattinam" },
  { lat: 10.37, lon: 79.13, name: "Thondi" },
  { lat: 9.28, lon: 79.31, name: "Rameswaram" },
  { lat: 8.76, lon: 78.11, name: "Thoothukudi" },
  { lat: 8.08, lon: 77.53, name: "Kanyakumari" },
];

const SPECIES_LIST = [
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

function generateFishData(numRecords: number) {
  const data = [];

  for (let i = 0; i < numRecords; i++) {
    const location = sample(TAMIL_NADU_COASTAL_POINTS)!;
    const latitude = location.lat + random(-0.15, 0.15, true);
    const longitude = location.lon + random(-0.15, 0.15, true);
    const species = sample(SPECIES_LIST)!;
    const catchWeight = Math.max(1, random(1, 150, true));

    data.push({
      Date: new Date().toISOString(),
      Species: species,
      Latitude: latitude,
      Longitude: longitude,
      CatchWeight: catchWeight,
    });
  }

  return data;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const species = searchParams.get("species") || "All Species";
  const allData = generateFishData(2000);

  const filteredData =
    species !== "All Species"
      ? allData.filter((item) => item.Species === species)
      : allData;

  return NextResponse.json(filteredData);
}
