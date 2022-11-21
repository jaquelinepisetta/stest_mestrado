window.onload = function (){

    var map = L.map("map",{
    measureControl:true,
    center: [-25.436, -49.273],
    zoom: 18,
    zoomSnap: 1,
    zoomDelta: 1,
    minZoom: 17,
    maxZoom: 18
    })
	
// para add o stilo do mapbox é necessário usar a o link CARTO
	var Mapbox_tiles = L.tileLayer('https://api.mapbox.com/styles/v1/jaquelinepisetta/ckd5xqpzh0w8c1ipitqzz1qe4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFxdWVsaW5lcGlzZXR0YSIsImEiOiJjazFjZGRnNWkwN3I0M21wbXd3ZXoxbnRrIn0.TLwcegf2N8ELKz3G1MJSnw', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(map);
	
	
	
	 // LEAFLET DRAW 
	var featureGroup = L.featureGroup().addTo(map);

	//add barra de ferramentas para desenho
    var drawControl = new L.Control.Draw({
      edit:{
        featureGroup: featureGroup
    }
    }).addTo(map);

    map.on('draw:created', function(e) {
      featureGroup.addLayer(e.layer);
    });


        // on click, clear all layers
    document.getElementById('delete').onclick = function(e) {
        featureGroup.clearLayers();
    }

    document.getElementById('export').onclick = function(e) {
            // Extract GeoJson from featureGroup
        var data = featureGroup.toGeoJSON();

            // Stringify the GeoJson
        var convertedData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));

            // Create export
        document.getElementById('export').setAttribute('href', 'data:' + convertedData);
        document.getElementById('export').setAttribute('download','data.geojson');
    }	
	
 




}
