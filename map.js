// Opprett kartet og sett startposisjon/zoom
const map = L.map('map').setView([51.505, -0.09], 13);

// Bakgrunnskart fra OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Eksempelmarkør
L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup('her er du')
  .openPopup();
