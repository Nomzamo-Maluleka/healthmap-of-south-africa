
const script = document.createElement("script");
script.src = "https://unpkg.com/leaflet/dist/leaflet.js";
document.head.appendChild(script);

script.onload = () => {
  
  var map = L.map('map').setView([-30.5595, 22.9375], 5);

  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Example data: Number of hospitals per province (simplified and fictional data)
  var healthData = [
    { province: "Gauteng", coordinates: [-26.2708, 28.1123], hospitals: 120 },
    { province: "Western Cape", coordinates: [-33.9249, 18.4241], hospitals: 80 },
    { province: "KwaZulu-Natal", coordinates: [-29.8587, 31.0218], hospitals: 70 },
    { province: "Eastern Cape", coordinates: [-32.2968, 26.4194], hospitals: 50 },
    { province: "Limpopo", coordinates: [-23.4013, 29.4179], hospitals: 40 },
    { province: "Mpumalanga", coordinates: [-25.5652, 30.5274], hospitals: 35 },
    { province: "North West", coordinates: [-25.856, 25.6419], hospitals: 30 },
    { province: "Free State", coordinates: [-28.4541, 26.7968], hospitals: 25 },
    { province: "Northern Cape", coordinates: [-29.0467, 21.8569], hospitals: 15 }
  ];

  // Add markers to the map
  healthData.forEach(function(data) {
    L.marker(data.coordinates)
      .addTo(map)
      .bindPopup("<b>" + data.province + "</b><br>Hospitals: " + data.hospitals);
  });
};
