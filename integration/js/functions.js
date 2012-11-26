$(document).ready(function(){
	$('#main-slider ul').cycle({
	fx:'scrollLeft',
	speed:700,
	timeout:4000,
	next:   '#next-slide', 
	prev:   '#prev-slide'
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

// get/set webservices
// string webserviceName : 	the name of the webservice we want to contact
// object args			 : 	the object of arguments to pass to the webservice
// list of webservices :
// 		"get_best_submissions"
//		"get_challenger"

webservice = function (webserviceName, args) {
	var renderObj;

	$.ajax({
		data: args,
		url: "webservices/"+webserviceName+'.json',
		async: false,
		success: function(obj) {
			renderObj = obj;
		},
		error: function(obj) {
			renderObj = obj;
		}
	});

	return renderObj;
}

window.fbAsyncInit = function() {
	FB.init({
		appId      : '267328883388489', // App ID
		channelUrl : '//jeanbaptisteminvielle.fr/challengeme/tests/openGraph.html', // Channel File
		status     : true, // check login status
		cookie     : true, // enable cookies to allow the server to access the session
		xfbml      : true  // parse XFBML
	});
	// Additional initialization code here

	FB.getLoginStatus(function(response) {

		if (response.status === 'connected') {
			showProfile(); //to get the connected profile
		} else if (response.status === 'not_authorized') {
			showFacebookButton(); //to get the facebook button
		} else {
			//to get the facebook button
			showFacebookButton(); //to get the facebook button
		}
	 });
};

showProfile = function() {
	$('#facebookConnect').addClass('hidden');
	$('#userInfos').removeClass('hidden');
};

showFacebookButton = function() {
	$('#facebookConnect').addClass('hidden');
	$('#userInfos').removeClass('hidden');
};

// Load the SDK Asynchronously
(function(d){
	 var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
	 if (d.getElementById(id)) {return;}
	 js = d.createElement('script'); js.id = id; js.async = true;
	 js.src = "//connect.facebook.net/fr_FR/all.js";
	 ref.parentNode.insertBefore(js, ref);
 }(document));