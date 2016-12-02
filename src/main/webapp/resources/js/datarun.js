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
	
	console.log("XOXO");
	
	addStations();
	function addStations(){
		console.log("COCOC");
		$.ajax({
			url : 'http://localhost:8080/datarun/resources/data/railwayStationNodes.geojson',
			type: "GET",
			dataType: "json",
			beforeSend: function(){
				console.log("before send");
			},
			complete: function(){
				console.log("after send");
			},	
			error: function(e){
				console.log("Error %o", e);
			},
			success: function( json ){
				var count = 0;
				for(var i = 0; i < json.features.length; i++){
					if (json.features[i].properties.spokeStartIds.length < 3){
						continue;
					} else {
						count++;
					}
					console.log("Station: " + count)
					console.log(" %o" , json.features[i]);
					L.geoJSON(json.features[i], { 
						style: myStyle
					}).addTo(map);
					
				}

			}
		});  			
	}

	function onMapClick(e) {
	    popup
	        .setLatLng(e.latlng)
	        .setContent("You clicked the map at " + e.latlng.toString())
	        .openOn(map);
	}

	map.on('click', onMapClick);
	
	
	var myLines = [{
	    "type": "LineString",
	    "coordinates": [[50, 13], [52.4508, 13.11], [53, 14]]
	}, {
	    "type": "LineString",
	    "coordinates": [[50.1, 13.1], [52.4508, 13.11], [52.4, 13.5]]
	}];
	
	var myStyle = {
		    "color": "#FF0000",
		    "weight": 500,
		    "opacity": 0
		};
	
	L.geoJSON(myLines, {
		style: myStyle
	}).addTo(map);
}