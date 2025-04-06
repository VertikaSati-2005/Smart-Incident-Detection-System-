export default function MapView() {
    return (
      <div className="mt-4">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=28.7041,77.1025&z=15&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    );
  }
  