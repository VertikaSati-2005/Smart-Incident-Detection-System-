const express = require('express');
const router = express.Router();

const incidents = [
  {
    type: "Car Accident",
    location: "28.7041, 77.1025",
    timestamp: new Date().toLocaleString(),
    video: "/videos/car_crash.mp4"
  },
  {
    type: "Fire Incident",
    location: "19.0760, 72.8777",
    timestamp: new Date().toLocaleString(),
    video: "/videos/fire_incident.mp4"
  }
];

router.get('/incidents', (req, res) => {
  res.json(incidents);
});

module.exports = router;
