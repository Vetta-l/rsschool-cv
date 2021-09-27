var contact_map;

ymaps.ready(function(){
	contact_map = new ymaps.Map("map", {
        center: [2.3364, 48.86091],
        zoom: 5, 
    });	
	
	//contact labels
	myPlacemark = new ymaps.Placemark([2.3364, 48.86091], null, { 
		iconImageSize: [31, 48],
		iconImageOffset: [-15, -48]
	});
	 

	
	contact_map.geoObjects.add(myPlacemark);		
	
});