// on click on a link non absolute : try to load template for this link :
// if no result go to the .php

$('a').click(function(ev) {
	var $this = $(this);
	var link = $this.attr('href');
	//check if the link is a absolute one
	if(link.substr(0, 7) == 'http://')
		return true;

	var returningTrue = false;

	//else try to load page in ajax
	var tpl = link.substr(0, link.length-4); //no .PHP 
	$.ajax({
		url: "templates/"+tpl+'.tpl',
		async: false,
		success: function(obj) {
			$('#liveContent').html(obj);
		},
		error: function(obj) {
			if(obj.status == 404)
				//load normally
				returningTrue = true;
		}
	});
	if(returningTrue) return true;
	ev.preventDefault();
	return false;
});


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
	},

	openPage: function( pageName) {

	}
};

window.MAP = 
{
	map: null,
	info:false,
	res: window.CHALLENGEME.localWebservice('get_best_submissions'),
	initialize : function () 
	{	
        var mapOptions = 
		{
          zoom: 11,//définit le zoom sur la carte
          mapTypeId: google.maps.MapTypeId.ROADMAP,//affiche la carte avec les routes
		  scrollwheel:false
        };
		if(document.getElementById('map_canvas'))
		{
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
		}
		else if(document.getElementById('carte'))
		{
			MAP.map = new google.maps.Map(document.getElementById('carte'), mapOptions);
			// Si le navigateur prend en compte le HTML5
			if(navigator.geolocation) 
			{
			  navigator.geolocation.getCurrentPosition(MAP.geoSuccess2,
														MAP.geoError,
														{enableHighAccuracy:true});
			}
			// Si le navigateur n'accepte pas la geoloc
			else {MAP.handleNoGeolocation(false);}
		}
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
	NouvPos : function (event) 
	{
		pos=event.latLng;
		MAP.map.setCenter(pos);
	},
	
	//################################ Fonction de succès
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
    },
	geoSuccess2 :  function (position)
	{
		var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		MAP.map.setCenter(pos);//pour centrer la map sur notre lieu actuel

		var oMarker = new google.maps.Marker //on attribue les options des markers
		({
		  icon:'img/icone.png',
		  map: MAP.map,
		  position: pos
		});
		oMarker.setDraggable(true);//Permet de déplacer le marker sur la map
		//Va permettre de récupérer notre lieu à partir de nos coordonnées lat et long
		var lieu = new google.maps.Geocoder();
		var GeoReverse=lieu.geocode({'latLng': pos}, function(results, status) 
		{
			if (status == google.maps.GeocoderStatus.OK) 
			{
				if (results[1]) 
				{
				  console.log(results[1].formatted_address);
				  console.log(results[1]);
				}
			}
		});
		var geocoder = document.getElementById("addvideo");
		MAP.geoCoding(oMarker, geocoder);//déplacer le curseur directement à l'endroit saisi
		google.maps.event.addListener( oMarker, 'mouseover', MAP.MouseOver);//changer l'icone du marker au passage de la souris
		google.maps.event.addListener( oMarker, 'mouseout', MAP.MouseOut);//restauration sur le mouseout
		google.maps.event.addListener( oMarker, 'dragend', MAP.NouvPos);//afficher la nouvelle position d'un marqueur si on le déplace
		
    },
	geoCoding : function(marker,geocoding)
	{
		
		geocoding.addEventListener('submit',function(e)
		{
			e.preventDefault();
			var address=document.querySelector("input[name='position']");
			var geocoder=new google.maps.Geocoder(); //objet de google maps
			geocoder.geocode({"address":address.value},function(data,status)
			{
				if(status=='OK')
				{
					marker.setMap(null);
					MAP.map.setCenter(data[0].geometry.location);
					// Va permettre de récupérer toutes les villes de même nom et leurs coordonnées
					for(i=0;i<data.length;i++)
					{
						data[i];
						console.log(data[i]);
					}
					marker = new google.maps.Marker({icon:'img/icone.png',position: data[0].geometry.location,map:MAP.map});
					marker.setDraggable(true);
					google.maps.event.addListener( marker, 'mouseover', MAP.MouseOver);//changer l'icone du marker au passage de la souris
					google.maps.event.addListener( marker, 'mouseout', MAP.MouseOut);//restauration sur le mouseout
					google.maps.event.addListener( marker, 'dragend', MAP.NouvPos);//afficher la nouvelle position d'un marqueur si on le déplace
				}
			});
		},false);
		
	},
	setEventMarker : function ( marker, infowindow, texte)
	{
	  google.maps.event.addListener( marker, 'click', function() 
	  {
		  console.log(MAP.info);
		  if(MAP.info=="false")
		  {
			  infowindow.setContent(texte);
			  infowindow.open(MAP.map, marker);
			  MAP.info=true;
		  }
		  else 
		  {
			infowindow.close(MAP.map,marker);
			infowindow.setContent(texte);
			infowindow.open(MAP.map, marker);
			MAP.info=true;
		  }
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
		$('#facebookAuth').addClass('hidden');
		$('#userInfos').removeClass('hidden');
		$('#userMenu').removeClass('hidden');

		FB.api('/me', function(data) {
			$('#userName').text(data.name);
			$('#userPicture').attr('src', 'http://graph.facebook.com/'+data.id+'/picture');
		});

	},

	showFacebookButton: function() {
		console.log('show facebook button');

		$('#facebookAuth').removeClass('hidden');
		$('#userInfos').addClass('hidden');
		$('#userMenu').addClass('hidden');
	}
}

//Send_video.php
$('.choix').click(function(e){
	var n = $(this).parent().text().length;
	$('#lieu').text($(this).parent().text().substring(0,n-20));
	e.preventDefault();
});

$('input[name="verif"]').focusout(function(){
		var n = $(this).index()+1;
	if($(this).val() == ''){
		if(n%5 == 0){
			$('.input').eq(0).attr('class','input non');
		}
		else{
			$('.input').eq(1).attr('class','input non');
		}
	}
	else{
		if(n%5 == 0){
			$('.input').eq(0).attr('class','input oui');
		}
		else{
			$('.input').eq(1).attr('class','input oui');
		}
	}
});

//time until

$('[data-timeUntil]').each(function() {
	$el = $(this);
	setInterval(function() {

		//alert($(this).attr('data-timeUntil'));
		var datetime = new Date($el.attr('data-timeUntil'));
		var datetimeToday = new Date();
		var dateToGo = new Date();
		dateToGo.setTime(datetime.getTime()-datetimeToday.getTime());

		var totalHours = ((dateToGo.getFullYear()-1970)*12*30*24)+(dateToGo.getMonth()*30*24)+(dateToGo.getDate()*24) + dateToGo.getHours(); //not efficient if we have a date far away
		$el.html(totalHours+'h '+dateToGo.getMinutes()+'m '+dateToGo.getSeconds()+'s');
	}, 1000)

	

});

//Page défi
$('#gallery ul li a').click(function(e){
	e.preventDefault();
    // getVideo(this);
    var laVideo = document.getElementById('laVideo');
    laVideo.style.display = 'inline-block';
    var n = $('body').scrollTop() - 200;
    laVideo.style.top=((window.innerHeight-laVideo.offsetHeight )/2)+n+'px';
    return false;
});

//Liste des videos
var username = 'user15011040';
var callback = 'showGallery';
var oEmbedCallback = 'switchVideo';
var oEmbedEndpoint = 'http://vimeo.com/api/oembed.json'
var url = 'http://vimeo.com/api/v2/' + username + '/videos.json?callback=' + callback;
var videos = new Array();
var defi = {};//Initialisation d'un objet contenant tous les défis
defi.flamby = new Array();//Tableau contenant les videos du défi "Gobage de Flamby"
defi.gangnam = new Array();//Tableau contenant les videos du défi "Dansez le gangnam style"
var url_page = window.location.pathname;
var page = 2;

$(document).ready(function(){
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', url);
    document.getElementsByTagName('head').item(0).appendChild(js);
});

//Afficher la galerie
function showGallery(video) {
    videos = video;
    var n = 0;
    var m = 0;
    for(i = 0; i < videos.length; i++){
    	if(video[i].tags == 'gangnam'){
    		defi.gangnam[n] = video[i];
    		n++;
    	}
    	else if(video[i].tags == 'flamby'){
    		defi.flamby[m] = video[i];
    		m++;
    	}
    }
    if(url_page.indexOf('flamby') != -1 ){
		page = 0;
		affiche(defi.flamby,page);
	}
	else if(url_page.indexOf('gangnam') != -1 ){
		page = 0;
		affiche(defi.gangnam,page);
	}
	else{
		affiche(video,page);
	}
}
//Afficher la galerie
function affiche(video,page){
	if(page == 1){
	    var ul = document.createElement('ul');
	    var gallery = document.getElementById('resultat_recherche');
	    gallery.innerHTML = ' ';
	    gallery.appendChild(ul);
	    for(i = 0; i < video.length; i++){
	        var li = document.createElement('li');
	        ul.appendChild(li);
	        li.setAttribute('class','video');

	        var a = document.createElement('a');
	        li.appendChild(a);
	        a.setAttribute('href',video[i].url);

	        var img = document.createElement('img');
	        a.appendChild(img);
	        img.setAttribute('src',video[i].thumbnail_medium);
	        img.setAttribute('title',video[i].thumbnail_medium);
	        img.setAttribute('alt',video[i].thumbnail_medium);

	        var h3 = document.createElement('h3');
	        li.appendChild(h3);
	        h3.innerHTML = video[i].title;

	        var p1 = document.createElement('p');
	        li.appendChild(p1);
	        p1.innerHTML = 'réalisé le';

	        var date = document.createElement('p');
	        li.appendChild(date);
	        date.innerHTML = video[i].upload_date;

	        var p2 = document.createElement('p');
	        li.appendChild(p2);
	        p2.innerHTML = 'à';

	        var lieu = document.createElement('p');
	        li.appendChild(lieu);
	        lieu.innerHTML = 'Montreuil';

	        var p3 = document.createElement('p');
	        li.appendChild(p3);
	        p3.innerHTML = ' - ';

	        var duree = document.createElement('p');
	        li.appendChild(duree);
	        duree.innerHTML = video[i].duration;

	        var auteur = document.createElement('p');
	        auteur.setAttribute('class','auteur');
	        li.appendChild(auteur);
	        auteur.innerHTML = 'par';

	        var lien = document.createElement('a');
	        auteur.appendChild(lien);
	        lien.setAttribute('href','#');
	        lien.innerHTML = video[i].user_name;

	        var description = document.createElement('p');
	        li.appendChild(description);
	        description.setAttribute('class','description');
	        description.innerHTML = video[i].description;
	    }
	}
	else{
		var ul = document.createElement('ul');
        var gallery = document.getElementById('gallery');
        gallery.innerHTML = ' ';
        gallery.appendChild(ul);
        for(i = 0; i < video.length; i++){
            var li = document.createElement('li');
            ul.appendChild(li);

            var a = document.createElement('a');
            li.appendChild(a);
            a.setAttribute('href',video[i].url);

            var img = document.createElement('img');
            a.appendChild(img);
            img.setAttribute('src',video[i].thumbnail_medium);
            img.setAttribute('title',video[i].thumbnail_medium);
            img.setAttribute('alt',video[i].thumbnail_medium);

            var p1 = document.createElement('p');
            li.appendChild(p1);
            p1.innerHTML = 'réalisé par';

            var auteur = document.createElement('a');
            p1.appendChild(auteur);
            auteur.setAttribute('href','#');
            auteur.innerHTML = video[i].user_name;

	        var date = document.createElement('p');
	        li.appendChild(date);
	        date.innerHTML = video[i].upload_date;
	    }
	}
	$('#resultat_recherche ul li a').click(function(e){
		e.preventDefault();
	    popin(this);
	    return false;
	});
	$('#gallery ul li a').click(function(e){
		e.preventDefault();
	    popin(this);
	    return false;
	});
}

function popin(video){
	getVideo(video);
	var laVideo = document.getElementById('laVideo');
    laVideo.style.display = 'inline-block';
	var n = $('body').scrollTop() - 200;
    laVideo.style.top=((window.innerHeight-laVideo.offsetHeight )/2)+n+'px';
}

//Afficher une video dans la popin
function getVideo(url) { //Récupère les informations relatives à la video
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', oEmbedEndpoint + '?url=' + url + '&width=620&height=350&callback=' + oEmbedCallback);
    document.getElementsByTagName('head').item(0).appendChild(js);
}

function switchVideo(video) {
    var laVideo = document.getElementById('laVideo');
    laVideo.innerHTML += unescape(video.html);//Affiche la video
    $('#close').click(function(e){ //Pour fermer la video
		e.preventDefault();
		var laVideo = document.getElementById('laVideo');
		laVideo.innerHTML = ' ';
		laVideo.style.display='none';
		return false;
	});
}

//Navigation Trier par Date ou Popularité
$('.classement').click(function(e){
	$('.classement').removeClass('active');
	$(this).addClass('active');
	if($(this).text() == 'Popularité'){
		if(url_page.indexOf('flamby') != -1 ){
			popularite(defi.flamby);
		}
		else if(url_page.indexOf('gangnam') != -1 ){
			popularite(defi.gangnam);
		}
		else{
			popularite(videos);
		}
	}
	else{
		if(url_page.indexOf('flamby') != -1 ){
			recente(defi.flamby);
		}
		else if(url_page.indexOf('gangnam') != -1 ){
			recente(defi.gangnam);
		}
		else{
			recente(videos);
		}
	}
	e.preventDefault();
});

//Classement par popularité
function popularite(video){
    var temp;
    for(i = 0; i < video.length-1; i++){
        var max = i;
        for(j = i+1; j < video.length; j++){
            if(video[max].stats_number_of_likes < video[j].stats_number_of_likes){
                max = j;
            }
        }
        temps = video[i];
        video[i] = video[max];
        video[max] = temps;
    }
    affiche(video,page);
}

//Classement par date
function recente(video){
    var temp;
    for(i = 0; i < video.length-1; i++){
        var max = i;
        for(j = i+1; j < video.length; j++){
            if(video[max].upload_date < video[j].upload_date){
                max = j;
            }
        }
        temps = video[i];
        video[i] = video[max];
        video[max] = temps;
    }
    affiche(video,page);
}

//Konami Code
