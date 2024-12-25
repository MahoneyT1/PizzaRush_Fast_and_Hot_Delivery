import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const MapLocator = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const { isLoaded: googleLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBABXfEt-hjlIIIYnsGxjI-ksvLnRn3a18", // Replace with your API key
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setIsLoaded(true);
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  if (!googleLoaded) return <div>Loading Map...</div>;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMap
        center={location}
        zoom={15}
        mapContainerStyle={{ height: "100%", width: "100%" }}
      >
        {isLoaded && <Marker position={location} />}
      </GoogleMap>
    </div>
  );
};

export default MapLocator;
