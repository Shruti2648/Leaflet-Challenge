// Create map:
var myMap = L.map("map", {
    center: [0, 0],
    zoom: 2
  })

// Add tile layer to map:
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap)

// Define URL for earthquake JSON data:
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"

// Create style object:
var mapStyle = {
    color: "white",
    fillColor: "blue",
    fillOpacity: 0.5,
    weight: 1.5
}

// Retrieve data:
d3.json(url, function(response) {
    console.log(response)

    L.geoJson(response, {
        style: mapStyle
    }).addTo(myMap)

    for (var i = 0; i < response.length; i++) {
        var magnitude = response.features[i].properties.mag
        console.log(magnitude)
    
    }
})