import { useEffect, useState } from "react";

export default function AlertNotification() {
  const [incident, setIncident] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/incidents/latest")
      .then((res) => res.json())
      .then((data) => setIncident(data));
  }, []);

  if (!incident) return <p>Loading alert...</p>;

  return (
    <div className="p-4 bg-red-100 rounded-xl shadow mt-4">
      <h2 className="text-xl font-bold text-red-600">🚨 ALERT: {incident.type} Detected</h2>
      <p>Location: {incident.location}</p>
      <p>Timestamp: {incident.timestamp}</p>
      <video controls width="100%">
        <source src={incident.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
