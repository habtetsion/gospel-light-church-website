import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issue with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Map() {
  // Church location: 11110 Garland Rd, Dallas, TX 75218
  const position = [32.8465488, -96.6850057];

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      className="h-96 w-full rounded-t-xl"
      style={{ zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <div className="text-center">
            <h3 className="font-semibold text-neutral-900 mb-1">
              Gospel Light Eritrean Baptist Church
            </h3>
            <p className="text-sm text-neutral-600 mb-2">
              11110 Garland Rd<br />
              Dallas, TX 75218
            </p>
            <a
              href="https://maps.google.com/?q=11110+Garland+Rd+Dallas+TX+75218"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Get Directions →
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
