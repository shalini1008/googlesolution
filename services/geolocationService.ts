// services/geolocationService.ts

export const getCurrentLocation = async (): Promise<GeolocationPosition> => {
  if ("geolocation" in navigator) {
    return new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(handleGeolocationError(error))
      );
    });
  } else {
    throw new Error("Geolocation is not supported by this browser.");
  }
};

const handleGeolocationError = (error: GeolocationPositionError): string => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return "User denied the request for Geolocation.";
    case error.POSITION_UNAVAILABLE:
      return "Location information is unavailable.";
    case error.TIMEOUT:
      return "The request to get user location timed out.";
    default:
      return "An unknown error occurred while retrieving location.";
  }
};
