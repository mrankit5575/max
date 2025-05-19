import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const LocationMap = () => {
  const center = {
    lat: 28.7041, // Delhi coordinates
    lng: 77.1025,
  };

  const mapStyles = {
    height: "600px",
    width: "100%",
    borderRadius: "0",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
  };

  const [selectedMarker, setSelectedMarker] = useState(false);
  const [map, setMap] = useState(null);

  const onMarkerClick = () => {
    setSelectedMarker(true);
  };

  const onInfoWindowClose = () => {
    setSelectedMarker(false);
  };

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <section className="py-16 px-4 bg-white min-h-[600px]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Find Us on the Map
        </h2>

        <LoadScript googleMapsApiKey="AIzaSyBuQ4BlJPSkQhn6TMY247SgacvZDDoDJC8">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
              styles: [
                {
                  featureType: "poi",
                  elementType: "labels",
                  stylers: [{ visibility: "off" }]
                }
              ],
              disableDefaultUI: false,
              zoomControl: true,
              streetViewControl: true,
              fullscreenControl: true
            }}
          >
            <Marker
              position={center}
              onClick={onMarkerClick}
              animation={2}
            />
            {selectedMarker && (
              <InfoWindow
                position={center}
                onCloseClick={onInfoWindowClose}
              >
                <div className="p-2 max-w-[240px]">
                  <h3 className="font-bold text-lg mb-1">MAX Education</h3>
                  <p className="text-gray-600">Gali No. 1, Radha Vihar</p>
                  <p className="text-gray-600">Mukund Vihar, Main Market</p>
                  <p className="text-gray-600">Near Machhali Market</p>
                  <p className="text-gray-600">Mukundpur, Delhi - 110042</p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=28.7041,77.1025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>

        <p className="mt-4 text-gray-600">
          Click on the marker to see our address and get directions.
        </p>
      </div>
    </section>
  );
};

export default LocationMap;
