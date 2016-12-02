"use strict"

function DataRun(){
	
	
	
}


var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 18, attribution: osmAttrib});		
	
	
	// start the map in South-East England
	map.setView(new L.LatLng(52.5, 13.3),8);
	map.addLayer(osm);
	
	var marker = L.marker([52.3, 13.3]).addTo(map);
	
	var circle = L.circle([52.4508, 13.11], {
	    color: 'green',
	    fillColor: '#fff',
	    fillOpacity: 0.5,
	    radius: 2000
	}).addTo(map);
	
	marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
	circle.bindPopup("I am a circle.");
	
	function onMapClick(e) {
	    console.log("You clicked the map at " + e.latlng);
	}

	map.on('click', onMapClick);
	
	var popup = L.popup();

	function onMapClick(e) {
	    popup
	        .setLatLng(e.latlng)
	        .setContent("You clicked the map at " + e.latlng.toString())
	        .openOn(map);
	}

	map.on('click', onMapClick);
	
	var geojsonFeature = {
		    "type": "Feature",
		    "properties": {
		        "name": "Coors Field",
		        "amenity": "Tomate",
		        "popupContent": "This is where the Rockies play!"
		    },
		    "geometry": {
		        "type": "Point",
		        "coordinates": [ 52.4508, 13.11]
		    }
		};
	
	L.geoJSON(geojsonFeature).addTo(map);
}