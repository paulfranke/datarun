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
	

	
	/* Call a bike a new try */
	
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

	addStations();
	

	
	function addStations(){
		
		$.ajax({
			url : 'http://localhost:8080/datarun/resources/data/BikeStationen.json',
			type: "GET",
			dataType: "json",
			beforeSend: function(){

			},
			complete: function(){
	
			},	
			error: function(e){
				console.log("Error %o", e);
			},
			success: function( json ){

				for(var i=0;i<json.length;i++){
					if(json[i].GROUP == "J"){
						var lat = json[i].LAT.replace(",",".");;
						var lng = json[i].LON.replace(",",".");
						var stationName = json[i].ZONE;
						
						var marker = L.marker([lng, lat]).bindPopup( stationName ).addTo(map);
					}
				}
	
			}
		});		
	
	}

	
	function addUsers( districtGeoJson, userAges ){
		
		$.ajax({
			url : 'http://localhost:8080/datarun/resources/data/berlin_user.json',
			type: "GET",
			dataType: "json",
			beforeSend: function(){
			},
			complete: function(){
	
			},	
			error: function(e){
				console.log("Error %o", e);
			},
			success: function( json ){

				if(typeof json == "object"){

					for(var i = 0; i < districtGeoJson.features.length; i++){
						
						for(var j=0;j<json.users.length;j++){
							if(json.users[j].district == districtGeoJson.features[i].properties.Ortsteil){
								
								var user = json.users[j];
								var totalUsers = 0;
								if(typeof userAges == "undefined" || userAges.length == 0 ){
									totalUsers = parseInt(user._10_15) + parseInt(user._15_20) + parseInt(user._20_25) + parseInt(user._25_30) + parseInt(user._30_35) + parseInt(user._35_40) + parseInt(user._40_45) + parseInt(user._45_50) + parseInt(user._50_55) + parseInt(user._55_60) + parseInt(user._60_65);
								}else{
									for(var k=0;k<userAges.length;k++){
										if(userAges[k] == '_10_15'){
											totalUsers += parseInt(user._10_15)	
										}

										if(userAges[k] == '_15_20'){
											totalUsers += parseInt(user._15_20)	
										}

										if(userAges[k] == '_20_25'){
											totalUsers += parseInt(user._20_25)	
										}
										
										if(userAges[k] == '_25_30'){
											totalUsers += parseInt(user._25_30)	
										}

										if(userAges[k] == '_30_35'){
											totalUsers += parseInt(user._30_35)	
										}

										if(userAges[k] == '_35_40'){
											totalUsers += parseInt(user._35_40)	
										}

										if(userAges[k] == '_40_45'){
											totalUsers += parseInt(user._40_45)	
										}						
										
										if(userAges[k] == '_45_50'){
											totalUsers += parseInt(user._45_50)	
										}						
										
										if(userAges[k] == '_50_55'){
											totalUsers += parseInt(user._50_55)	
										}						
										
										if(userAges[k] == '_55_60'){
											totalUsers += parseInt(user._55_60)	
										}						
										
										if(userAges[k] == '_60_65'){
											totalUsers += parseInt(user._60_65)	
										}										
									}
								}

								/*
								 * set color by total users
								 */
								var userColor = '#CEF6D8';
								if(totalUsers <= 5000){
									userColor = '#CEF6D8';	
								}else if(totalUsers <= 10000){
									userColor = '#81F79F';
								}else if(totalUsers <= 30000){
									userColor = '#2EFE64';	
								}else if(totalUsers <= 70000){
									userColor = '#01DF74';	
								}else{
									userColor = '#088A29';	
								}
								
								
								var polyline = L.geoJSON(districtGeoJson.features[i], {style: {        
									fillColor: userColor,
							        weight: 3,
							        opacity: 1,
							        color: 'white',
							        dashArray: '6',
							        fillOpacity: 0.7}}).bindPopup( user.district + " (" + totalUsers + ")" ).addTo(map);
								
									break;	
							}								
								
//								var circle = L.circle([lat, lng], {
//								    color: 'blue',
//								    fillColor: userColor,
//								    fillOpacity: 0.5,
//								    radius: 1500
//								}).bindPopup( user.district + " (" + totalUsers + ")" ).addTo(map);						
							
						}
					}
				}
			}
		});		
	
	}
	

	
	drawDistrict();
	function drawDistrict( userAges ){
		
		// obj = {"district":user.district,"users":totalUsers,"lat":lat,"lng":lng}

			$.ajax({
				url : 'http://localhost:8080/datarun/resources/data/berlin_district.geojson',
				type: "GET",
				dataType: "json",
				data:{
				},
				beforeSend: function(){

				},
				complete: function(){
					
				},	
				error: function(e){
					console.log("Error %o", e);
				},
				success: function( json ){
					
					addUsers( json, userAges )
						
				}
			});		
			
		
	}		

	

	function updateDrawByUserAge(){
		
		var ages =[];
		 $(".jsUserAge:checked").each(function () {
		        ages.push($(this).val());
		 });
		 
		 drawDistrict( ages );
		 
	}

	$(document).on("change", ".jsUserAge", updateDrawByUserAge)
	
	
	setTimeout(function(){ addCycleTour("gatow", '#C0392B'); }, 2000);
	setTimeout(function(){ addCycleTour("wannsee",'#943126'); }, 2000);
	setTimeout(function(){ addCycleTour("hellersdorf",'#E74C3C'); }, 2000);
	setTimeout(function(){ addCycleTour("hohenschoenhausen",'#F1948A'); }, 2000);
	setTimeout(function(){ addCycleTour("nordspanne",'#7B241C'); }, 2000);
	setTimeout(function(){ addCycleTour("reinickendorf",'#C0392B'); }, 2000);
	setTimeout(function(){ addCycleTour("spandau", '#E74C3C'); }, 2000);
	setTimeout(function(){ addCycleTour("suedspange", '#F1948A'); }, 2000);
	setTimeout(function(){ addCycleTour("teltow", '#943126'); }, 2000);
	
	
	function addCycleTour( _name, _fillColor ){
		
		$.ajax({
			url : 'http://localhost:8080/datarun/resources/data/radtour_' + _name + '.geojson',
			type: "GET",
			dataType: "json",
			data:{
			},
			beforeSend: function(){

			},
			complete: function(){
				
			},	
			error: function(e){
				console.log("Error %o", e);
			},
			success: function( json ){
				
				for(var i=0;i<json.features.length;i++){
					
					var polyline = L.geoJSON(json.features[i], {style: {        
						fillColor: _fillColor,
				        weight: 3,
				        opacity: 1,
				        color: 'red',
				        dashArray: '5',
				        fillOpacity: 0}}).bindPopup( "Tour: " + json.features[i].properties.name ).bringToFront().addTo(map).openPopup();
				}
			}
		});		
		
	}
	

	//readInOut();
	function readInOut( date ){
		
		$.ajax({
			url : 'http://localhost:8080/datarun/resources/data/inOut.json',
			type: "GET",
			dataType: "json",
			data:{
			},
			beforeSend: function(){

			},
			complete: function(){
				
			},	
			error: function(e){
				console.log("Error %o", e);
			},
			success: function( json ){
				
				if(typeof json == 'object'){
					for(var i=0;i<json.inOut.length;i++){
						if(json.inOut[i].date == date){
							
							var stationLat = jsonInOut[i].lat;
							var stationLng = jsonInOut[i].lng;
							var stationDiff = jsonInOut[i].diff;
							
							console.log("DATE: " + date + " Diff: " + stationDiff)
						}
					}
				}
			}
		});				
		
	}
	

	  $( function() {
		    $( "#datepicker" ).datepicker({ dateFormat: 'dd.mm.yy', defaultDate: new Date('01.11.2015') });
	   });
	  
	  
	  function startVideo(){
		  
		  var inpDate = $("#datepicker").val();
		  var year = inpDate.substring(6,10);
		  var month = parseInt(inpDate.substring(3,5)) - 1;
		  var day = inpDate.substring(0,2);
		  var date = new Date( year, month, day );
		  
		  for(var i=0;i<2;i++){
			  date.setDate(date.getDate() + 1);
			  var newDate = ("0" + (date.getDate() )).slice(-2) + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();
			  
			  setTimeout(function(){ readInOut( newDate ) }, 1000);
			  
			  
		  }
	  }
	  
	  $(document).on("click", "#jsBtnStart", startVideo)
	
}



