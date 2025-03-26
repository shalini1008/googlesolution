// utils/borderUtils.ts

export const isOutsideIndia = (latitude: number, longitude: number): boolean => {
  // Rough example for India's bounding box (not exact):
  const INDIA_BOUNDARY = {
    north: 35.0,  // Approximate northernmost latitude
    south: 6.0,   // Approximate southernmost latitude
    east: 97.0,   // Approximate easternmost longitude
    west: 68.0,   // Approximate westernmost longitude
  };

  return (
    latitude < INDIA_BOUNDARY.south ||
    latitude > INDIA_BOUNDARY.north ||
    longitude < INDIA_BOUNDARY.west ||
    longitude > INDIA_BOUNDARY.east
  );
};
