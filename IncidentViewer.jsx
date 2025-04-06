import React, { useEffect, useState } from "react";

function IncidentViewer() {
  const [incident, setIncident] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/incidents/latest")
      .then(res => res.json())
      .then(data => setIncident(data))
      .catch(err => console.error("Error fetching incident", err));
  }, []);

  return (
    <div>
      {incident ? (
        <>
          <h2>{incident.type}</h2>
          <p>Location: {incident.location}</p>
          <p>Time: {incident.timestamp}</p>
          <video
            width="640"
            height="360"
            controls
            autoPlay
            src={`http://localhost:5000${incident.video}`}
          />
        </>
      ) : (
        <p>Loading incident data...</p>
      )}
    </div>
  );
}

export default IncidentViewer;
