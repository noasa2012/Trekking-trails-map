const apiUrl = "http://localhost:3000/trails"; // Server endpoint for fetching trail data
let map;
let markers = [];

// Initialize the map
function initMap() {
  map = L.map("map").setView([27.69863, 86.73044], 5);

  // Add OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  fetchTrails();
}

// Fetch trail data from the server
async function fetchTrails() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error fetching trails: ${response.statusText}`);
    }
    const data = await response.json();
    const rows = data.values.slice(1); // Skip the header row
    displayTrails(rows);
  } catch (error) {
    console.error("Error fetching trails:", error);
  }
}

// Get marker color by difficulty
function getMarkerColor(difficulty) {
  switch (difficulty) {
    case "Easy":
      return "green";
    case "Moderate":
      return "orange";
    case "Hard":
      return "red";
    default:
      return "blue";
  }
}

// Display trails on the map
function displayTrails(trails) {
  trails.forEach((trail) => {
    const [
      name,
      location,
      latitude,
      longitude,
      altitude,
      difficultyLevel,
      durationDays,
    ] = trail;

    if (latitude && longitude) {
      const marker = L.marker([parseFloat(latitude), parseFloat(longitude)], {
        icon: L.icon({
          iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${getMarkerColor(
            difficultyLevel
          )}.png`,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        }),
      }).addTo(map);

      marker.bindPopup(`
        <h3>${name}</h3>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Altitude:</strong> ${altitude} meters</p>
        <p><strong>Difficulty Level:</strong> ${difficultyLevel}</p>
        <p><strong>Duration:</strong> ${durationDays} days</p>
      `);

      markers.push({
        marker,
        difficultyLevel,
        location,
        altitude: parseFloat(altitude),
        durationDays: parseInt(durationDays, 10),
      });
    }
  });
}

// Filter markers
function filterMarkers() {
  const difficulty = document.getElementById("difficulty").value;
  const location = document.getElementById("location").value.toLowerCase();
  const minDuration =
    parseInt(document.getElementById("min-duration").value, 10) || 0;
  const maxDuration =
    parseInt(document.getElementById("max-duration").value, 10) || Infinity;
  const minAltitude =
    parseInt(document.getElementById("min-altitude").value, 10) || 0;
  const maxAltitude =
    parseInt(document.getElementById("max-altitude").value, 10) || Infinity;

  markers.forEach(
    ({ marker, difficultyLevel, location: loc, altitude, durationDays }) => {
      const matchesDifficulty = !difficulty || difficultyLevel === difficulty;
      const matchesLocation = loc.toLowerCase().includes(location);
      const matchesDuration =
        durationDays >= minDuration && durationDays <= maxDuration;
      const matchesAltitude =
        altitude >= minAltitude && altitude <= maxAltitude;

      if (
        matchesDifficulty &&
        matchesLocation &&
        matchesDuration &&
        matchesAltitude
      ) {
        map.addLayer(marker);
      } else {
        map.removeLayer(marker);
      }
    }
  );
}

// Clear filters
function clearFilters() {
  document.getElementById("difficulty").value = "";
  document.getElementById("location").value = "";
  document.getElementById("min-duration").value = "";
  document.getElementById("max-duration").value = "";
  document.getElementById("min-altitude").value = "";
  document.getElementById("max-altitude").value = "";
  filterMarkers();
}

// Initialize the map
initMap();
