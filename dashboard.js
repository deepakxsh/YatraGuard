// Initialize Leaflet Map with user location
document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map");

  // Load tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  // Get user location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      map.setView([lat, lng], 13);
      L.marker([lat, lng]).addTo(map).bindPopup("📍 You are here").openPopup();
    }, () => {
      map.setView([26.2006, 92.9376], 7); // fallback: Assam
    });
  } else {
    map.setView([26.2006, 92.9376], 7); // fallback: Assam
  }
});
