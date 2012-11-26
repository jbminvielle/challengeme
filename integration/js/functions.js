$(document).ready(function(){
	$('#list-slider').carouFredSel({
		circular: false,
		infinite: false,
		auto    : false,
		prev    : {
			button  : "#prev-slide",
			key     : "left"
		},
		next    : {
			button  : "#next-slide",
			key     : "right"
		},
		scroll : {
			items           : 1,
            duration        : 400,                        
            pauseOnHover    : true
		}

		/*responsive: true,
		width: '100%',
		items: {
			width: 400,
			//	height: '30%',	//	optionally resize item-height
		}*/
	});
	
});

window.addEventListener("DOMContentLoaded", init, false);

function init(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(geoSuccess, geoError,{enableHighAccuracy:true} );
	}
	else {
		console.log('pas de geolocalisation');
	}
};

function geoSuccess(position) {
	geoLat = position.coords.latitude;
	geoLng = position.coords.longitude;
	var mapCanvas=document.getElementById("map");
	var latlng = new google.maps.LatLng(geoLat, geoLng);
	var settings = {
		zoom: 13,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		};
	geoMap = new google.maps.Map(document.querySelector('#map div'), settings);
};

function geoError(e) {
	console.log('fkgrkfkglt');
};