import React, { useEffect, useState } from "react";

const IpTracker = () => {
  const [ipAddress, setIpAddress] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIpAndLocation = async () => {
      try {
        setLoading(true);

        // Get the IP address from ipify
        const ipResponse = await fetch("https://api64.ipify.org?format=json");
        const ipData = await ipResponse.json();
        setIpAddress(ipData.ip);

        // Get location data from ip-api
        const locationResponse = await fetch(`http://ip-api.com/json/${ipData.ip}`);
        const location = await locationResponse.json();

        if (location.status === "success") {
          setLocationData(location);
        } else {
          setError("Failed to fetch location data.");
        }
      } catch (err) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchIpAndLocation();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Your IP and Location</h2>
      {ipAddress && <p><strong>IP Address:</strong> {ipAddress}</p>}
      {locationData && (
        <ul>
          <li><strong>City:</strong> {locationData.city}</li>
          <li><strong>Region:</strong> {locationData.regionName}</li>
          <li><strong>Country:</strong> {locationData.country}</li>
          <li><strong>Latitude:</strong> {locationData.lat}</li>
          <li><strong>Longitude:</strong> {locationData.lon}</li>
          <li><strong>ISP:</strong> {locationData.isp}</li>
        </ul>
      )}
    </div>
  );
};

export default IpTracker;
