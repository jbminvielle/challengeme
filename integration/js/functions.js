$(document).ready(function(){
	$('#list-slider').carouFredSel({
		circular: false,
		infinite: false,
		auto    : false,
		prev    : {
			button  : ".prev-slide",
			key     : "left"
		},
		next    : {
			button  : ".next-slide",
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

window.CHALLENGEME = {

// get/set webservices
// string webserviceName : 	the name of the webservice we want to contact
// object args			 : 	the object of arguments to pass to the webservice
// list of webservices :
// 		"get_best_submissions"
//		"get_challenger"
	localWebservice: function (webserviceName, args) {
		alert(webserviceName);
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

		console.log(renderObj);
		return renderObj;
	}
};

window.MAP = 
{
	map: null,
	res: window.CHALLENGEME.localWebservice('get_best_submissions'),
	initialize : function () 
	{	
        var mapOptions = 
		{
          zoom: 11,//définit le zoom sur la carte
          mapTypeId: google.maps.MapTypeId.ROADMAP//affiche la carte avec les routes
        };

        MAP.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
        // Si le navigateur prend en compte le HTML5
        if(navigator.geolocation) 
		{
		  navigator.geolocation.getCurrentPosition(MAP.geoSuccess,
		  											MAP.geoError,
		  											{enableHighAccuracy:true});
		}
		// Si le navigateur n'accepte pas la geoloc
		else {MAP.handleNoGeolocation(false);}
    },
	MouseOver : function ()
	{
		if( !this.flagIcon)
		{
		  this.savIcon = this.getIcon();  // récupération de l'image via la méthode getIcon()
		  this.flagIcon = true;
		}
		this.setIcon( 'img/MouseOverIcone.png');
	},
	MouseOut : function(){ this.setIcon( this.savIcon); },
	//################################ Fonction de succès
	NouvPos : function (event) 
	{
		pos=event.latLng;
		MAP.map.setCenter(pos);
	},
	geoSuccess :  function (position)
	{
		var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		MAP.map.setCenter(pos);//pour centrer la map sur notre lieu actuel

		for(i=0;i<MAP.res.length;i++)//On va afficher tous les marker représentant les meilleurs soumissions de défis 
		{
			var posMark = new google.maps.LatLng(MAP.res[i].coord.latitude, MAP.res[i].coord.longitude);
			var oMarker = new google.maps.Marker //on attribue les options des markers
			({
			  icon:'img/icone.png',
			  map: MAP.map,
			  position: posMark
			});
			//oMarker.setDraggable(true);//Permet de déplacer le marker sur la map
			var contentString = 
			[
			  '<div id="containerTabs">',
				  '<div id="tabs">',
					  '<h3>'+ MAP.res[i].title +'</h3>',
					  '<div id="tab-1">',
						'<p>Réalisé par <a id="nom" href="'+ MAP.res[i].permalink +'">'+ MAP.res[i].author +'</a></p>',
					  '</div>',
					  '<a href="#"><span>Voir la vidéo</span></a><br/>',
					  '<a href="#"><span>Facebook</span></a>',
				  '</div>',
			  '</div>'
			].join('');
			
			var infoWindow=new google.maps.InfoWindow({ position:posMark });//créé une infowindow à la position du marqueur
			MAP.setEventMarker( oMarker, infoWindow, contentString);//ouvre l'infowindow sur le marker
			MAP.CloseWindow( oMarker, infoWindow);//ferme l'infowindow 
			google.maps.event.addListener( oMarker, 'mouseover', MAP.MouseOver);//changer l'icone du marker au passage de la souris
			google.maps.event.addListener( oMarker, 'mouseout', MAP.MouseOut);//restauration sur le mouseout
		}
		//google.maps.event.addListener(oMarker, 'dragend', MAP.NouvPos);//afficher la nouvelle position d'un marqueur si on le déplace
    },
	setEventMarker : function ( marker, infowindow, texte)
	{
	  google.maps.event.addListener( marker, 'click', function() 
	  {
		infowindow.setContent(texte);// affectation du texte
		infowindow.open( MAP.map, marker);// affichage InfoWindow
	  });
	},
	CloseWindow : function ( marker, infoWindow)
	{
		google.maps.event.addListener(MAP.map,'click',function(){infoWindow.close(MAP.map,marker);});
	},
	//############################## Fonction d'erreur
	geoError : function () {MAP.handleNoGeolocation(true);},
    handleNoGeolocation : function (errorFlag) 
	{
        if (errorFlag) {var content = 'Error: The Geolocation service failed.';} 
		else {var content = 'Error: Your browser doesn\'t support geolocation.';}
        var options = 
		{
          map: MAP.map,
          position: new google.maps.LatLng(60, 105),
          content: content
        };
        var infowindow = new google.maps.InfoWindow(options);
        MAP.map.setCenter(options.position);
    }
}
window.addEventListener("DOMContentLoaded", window.MAP.initialize, false);

// Load the SDK Asynchronously
(function(d){
	 var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
	 if (d.getElementById(id)) {return;}
	 js = d.createElement('script'); js.id = id; js.async = true;
	 js.src = "//connect.facebook.net/fr_FR/all.js";
	 ref.parentNode.insertBefore(js, ref);
 }(document));

window.fbAsyncInit = function() {
	FBAPI.showFacebookButton();

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
			console.log(response.authResponse);
			FBAPI.showProfile(response.authResponse.accessToken); //to get the connected profile
		} else if (response.status === 'not_authorized') {
			console.log(response.status);
			FBAPI.showFacebookButton(); //to get the facebook button
		} else {
			//to get the facebook button
			console.log(response.status);
			FBAPI.showFacebookButton(); //to get the facebook button
		}
	 });
};

window.FBAPI = {
	showProfile: function(access_token) {
		console.log('show profile');
		$('#facebookConnect').addClass('hidden');
		$('#userInfos').removeClass('hidden');

		$.ajax({
			url: 'https://graph.facebook.com/me',
			method: 'GET',
			async: false,
			data: {
				access_token: access_token,
				fields: 'id,name'
			},
			complete: function(response) {
				if(response.status!=200) return false;
				var data = JSON.parse(response.responseText);
				console.log(data);
				$('#userName').text(data.name);
				$('#userPicture').attr('src', 'http://graph.facebook.com/'+data.id+'/picture');
			}
		});

	},

	showFacebookButton: function() {
		console.log('show facebook button');

		$('#facebookConnect').removeClass('hidden');
		$('#userInfos').addClass('hidden');
	}
}
