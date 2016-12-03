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
	
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 18, attribution: osmAttrib});		
	
	
	// start the map in South-East England
	map.setView(new L.LatLng(52.5, 13.3),12);
	map.addLayer(osm);
	
	var circle = L.circle([51.508, -0.11], {
	    color: 'red',
	    fillColor: '#f03',
	    fillOpacity: 0.5,
	    radius: 500
	}).addTo(map);
	
	
//	//railway station markers
//	var iconSize = '16,16'
//	var iconAnchor = '8,8'
//	var popupAnchor = '8,8'
//	
//	var railwayPurple = L.icon({
//	    iconUrl: 'resources/img/railway_icon/railway-station-24-purble.png',
//	    iconSize:     [iconSize], // size of the icon
//	    iconAnchor:   [iconAnchor], // point of the icon which will correspond to marker's location
//	    popupAnchor:  [popupAnchor] // point from which the popup should open relative to the iconAnchor
//	});	
//
//	var railwayRed = L.icon({
//	    iconUrl: 'resources/img/railway_icon/railway-station-24-red.png',
//	    iconSize:     [iconSize], // size of the icon
//	    iconAnchor:   [iconAnchor], // point of the icon which will correspond to marker's location
//	    popupAnchor:  [popupAnchor] // point from which the popup should open relative to the iconAnchor
//	});
//	
//	var railwayLightBlue = L.icon({
//	    iconUrl: 'resources/img/railway_icon/railway-station-24-light-blue.png',
//	    iconSize:     [iconSize], // size of the icon
//	    iconAnchor:   [iconAnchor], // point of the icon which will correspond to marker's location
//	    popupAnchor:  [popupAnchor] // point from which the popup should open relative to the iconAnchor
//	});
//	
//	var railwayOrange = L.icon({
//	    iconUrl: 'resources/img/railway_icon/railway-station-24-orange.png',
//	    iconSize:     [iconSize], // size of the icon
//	    iconAnchor:   [iconAnchor], // point of the icon which will correspond to marker's location
//	    popupAnchor:  [popupAnchor] // point from which the popup should open relative to the iconAnchor
//	});	
//	
//	var railwayBlue = L.icon({
//	    iconUrl: 'resources/img/railway_icon/railway-station-24-blue.png',
//	    iconSize:     [iconSize], // size of the icon
//	    iconAnchor:   [iconAnchor], // point of the icon which will correspond to marker's location
//	    popupAnchor:  [popupAnchor] // point from which the popup should open relative to the iconAnchor
//	});		
//
//	var railwayGreen = L.icon({
//	    iconUrl: 'resources/img/railway_icon/railway-station-24-green.png',
//	    iconSize:     [iconSize], // size of the icon
//	    iconAnchor:   [iconAnchor], // point of the icon which will correspond to marker's location
//	    popupAnchor:  [popupAnchor] // point from which the popup should open relative to the iconAnchor
//	});			
//	
//	
//	var marker3 = L.marker([51.3, 12.3], {icon: railwayPurple}).addTo(map);
//	marker3.bindPopup("RAMTAMTAM");
//	
//	var marker = L.marker([52.3, 13.3]).addTo(map);
//	
//	marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
//
//	
//
//	
//	
//	
//	var popup = L.popup();
//	
//	addStations();
//	function addStations(){
//		
//		var alreadyAddedStation = [];
//
//
//		
//		$.ajax({
//			url : 'http://localhost:8080/datarun/resources/data/railwayStationNodes.geojson',
//			type: "GET",
//			dataType: "json",
//			beforeSend: function(){
//				$("#jsProgressBar").css("width", '10%');
//			},
//			complete: function(){
//
//			},	
//			error: function(e){
//				console.log("Error %o", e);
//			},
//			success: function( json ){
//				var count = 0;
//				for(var i = 0; i < json.features.length; i++){
//					
//					var stationConnections = json.features[i].properties.spokeStartIds.length;
//					var stationCode = json.features[i].properties.railwayStationCode;
//					
//					if(stationConnections < 4){
//						continue;
//					}
//					
//					if($.inArray(stationCode,alreadyAddedStation) == -1){
//						if(json.features[i].properties.geographicalName.includes("Hbf") || json.features[i].properties.geographicalName.includes("Hauptbahnhof")){
//						
//						var long = json.features[i].geometry.coordinates[0];
//						var lat = json.features[i].geometry.coordinates[1];
//						var stationName = json.features[i].properties.geographicalName;
//						
//						var delay = Math.floor((Math.random() * 300) + 1);
//						
//						//calculate the percent
//						var connectionsDelay = delay / stationConnections;
//
//						var rwIcon = railwayRed;
//						if(connectionsDelay <=20){
//							rwIcon = railwayBlue;
//						}else if(connectionsDelay <=40){
//							rwIcon = railwayPurple
//						}else if(connectionsDelay <=60){
//							rwIcon = railwayOrange
//						}else{
//							rwIcon = railwayRed
//						}
//
//						var popup = L.popup().setContent("I am a standalone popup.");
//						
//						alreadyAddedStation.push( stationCode );
//						var marker2 = L.marker([ lat, long ], {icon: rwIcon}).addTo(map);
//						marker2.bindPopup(popup).openPopup();
//						
//						//marker2.bindTooltip(stationName)
////						var popup = L.popup().setLatLng([lat,long]).setContent(stationName).openOn(map)
////						marker2.bindPopup("COCOCO");
//						
//						//set if according to the number ob links 
//						marker2._icon.id = stationConnections;
//						
//						}
//					}
//					count++;
//				}
//				
//
//			}
//		});		
//	}
//
//	addLines();
//	function addLines(){
//		
//		var alreadyAddedStation = [];
//
//		$.ajax({
//			url : 'http://localhost:8080/datarun/resources/data/railwayLines.geojson',
//			type: "GET",
//			dataType: "json",
//			beforeSend: function(){
//				$("#jsProgressBar").css("width", '60%');
//			},
//			complete: function(){
//				$("#jsProgressBar").css("width", '100%');
//				$("#jsProgressBarWrp").addClass("hide");
//			},	
//			error: function(e){
//				console.log("Error %o", e);
//			},
//			success: function( json ){
//				var count = 0;
////				console.log(' %0', json);
//				for(var i = 0; i < json.features.length; i++){
//					var polyline = L.geoJSON(json.features[i], {style: {        
//						fillColor: '#E31A1C',
//				        weight: 3,
//				        opacity: 1,
//				        color: 'white',
//				        dashArray: '6',
//				        fillOpacity: 0.7}}).addTo(map);
//				}
//				
//
//			}
//		});		
//	}
	


	
//	function onMapClick(e) {
//	    popup
//	        .setLatLng(e.latlng)
//	        .setContent("You clicked the map at " + e.latlng.toString())
//	        .openOn(map);
//	}

//	map.on('click', onMapClick);
	
//	$(document).on("click", ".jsSettingsViewCheckbox", function(){
//		var stationLinks = $(".jsSettingsViewCheckbox:checked").val();
//		$(".leaflet-marker-icon").addClass("hide")
//		$(".leaflet-marker-icon[id="+stationLinks+"]").removeClass("hide")
//		
//	})
//
//	
//	var circle = L.circle([54.23, 19.11], {
//	    color: 'red',
//	    fillColor: '#f03',
//	    fillOpacity: 0.5,
//	    radius: 500
//	}).addTo(map);		
//	
//
//	var circle2 = L.circle([56.10, 43.3], {
//	    color: 'green',
//	    fillColor: '#f03',
//	    fillOpacity: 0.5,
//	    radius: 500
//	}).addTo(map);			
	
	
	function getGeoCodeByAdress(){
			
			var adress = $("input[name='adress']").val() || '';
			
			if(adress != ''){
				$.ajax({
					url : 'http://maps.google.com/maps/api/geocode/json',
					type: "GET",
					dataType: "json",
					data:{
						'address': adress
					},
					beforeSend: function(){

					},
					complete: function(){
						
					},	
					error: function(e){
						console.log("Error %o", e);
					},
					success: function( json ){
						if(typeof json === 'object' && json.results.length > 0){
							var lat = json.results[0].geometry.location.lat;
							var lng = json.results[0].geometry.location.lng;
							map.setView(new L.LatLng( lat , lng),14);						
						}
					}
				});		
				
			}
			
	}
	
	$("#jsBtnSearch").on("click", getGeoCodeByAdress)
	
}