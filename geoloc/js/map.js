	google.maps.event.addDomListener(window, 'load', initialize);//Au chargement de la page on lance la fonction initialize
	var map;
	var webservice = function (webservice, args) //AJAX, récupère les données du JSON
	{
		var renderObj;

		$.ajax({
			data: args,
			url: "webservices/"+webservice+'.json',
			async: false,
			success: function(obj) {
				renderObj= obj;
			},
			error: function(obj) {
				renderObj= obj;
			}
		});

		return renderObj;
	}
	var res=webservice('get_best_submissions');
	console.log(res[0].coord.latitude);
	console.log(JSON.stringify(webservice('get_best_submissions')));//Test pour savoir si on accède bien aux données du JSON
	
    function initialize() 
	{
        var mapOptions = 
		{
          zoom: 11,//définit le zoom sur la carte
          mapTypeId: google.maps.MapTypeId.ROADMAP//affiche la carte avec les routes
        };
        map = new google.maps.Map(document.getElementById('map_canvas'),
            mapOptions);

        // Si le navigateur prend en compte le HTML5
        if(navigator.geolocation) 
		{
          navigator.geolocation.getCurrentPosition(function(position) 
		  {
            var pos = new google.maps.LatLng(position.coords.latitude,
                                             position.coords.longitude);
			map.setCenter(pos);//pour centrer la map sur notre lieu actuel
			for(i=0;i<res.length;i++)//On va afficher tous les marker représentant les meilleurs soumissions de défis 
			{
				var posMark = new google.maps.LatLng(res[i].coord.latitude,
                                             res[i].coord.longitude);
				
				var oMarker = new google.maps.Marker
				({
				  icon:'img/icone.png',
				  map: map,
				  position: posMark
				});
				
				//oMarker.setDraggable(true);
				
				var contentString = 
				[
				  '<div id="containerTabs">',
					  '<div id="tabs">',
						  '<h3>'+ res[i].title +'</h3>',
						  '<div id="tab-1">',
							'<p>Réalisé par <a id="nom" href="'+ res[i].permalink +'">'+ res[i].author +'</a></p>',
						  '</div>',
						  '<a href="#"><span>Voir la vidéo</span></a><br/>',
						  '<a href="#"><span>Facebook</span></a>',
					  '</div>',
				  '</div>'
				].join('');
				
				var infoWindow=new google.maps.InfoWindow({
					//content:contentString,
					position:posMark
				});
				setEventMarker( oMarker, infoWindow, contentString);//########################
				CloseWindow( oMarker, infoWindow);//########################
				
				google.maps.event.addListener( oMarker, 'mouseover', function()
				{
					if( !this.flagIcon)
					{
					  this.savIcon = this.getIcon();  // récupération de l'image via la méthode getIcon()
					  this.flagIcon = true;
					}
					this.setIcon( 'img/MouseOverIcone.png');
				});
				// restauration sur le mouseout
				google.maps.event.addListener( oMarker, 'mouseout', function()
				{
					this.setIcon( this.savIcon);
				});
			}
			function setEventMarker( marker, infowindow, texte)//########################
			{
			  google.maps.event.addListener( marker, 'click', function() 
			  {
				// affectation du texte
				infowindow.setContent(texte);
				// affichage InfoWindow
				infowindow.open( map, marker);
			  });
			}
			function CloseWindow( marker, infoWindow)
			{
				google.maps.event.addListener(map,'click',function()
				{
					infoWindow.close(map,marker);
				});
			}
			google.maps.event.addListener(oMarker, 'dragend', function(event) 
				{
					//message d'alerte affichant la nouvelle position du marqueur
					//alert("La nouvelle coordonnée du marqueur est : "+event.latLng);
					pos=event.latLng;
					map.setCenter(pos);
				});
			
          }, function() 
		  {
            handleNoGeolocation(true);
          });
		}
		else 
		{
          // Si le navigateur n'accepte pas la geoloc
          handleNoGeolocation(false);
        }
    }
    function handleNoGeolocation(errorFlag) 
	{
        if (errorFlag) 
		{
          var content = 'Error: The Geolocation service failed.';
        } 
		else 
		{
          var content = 'Error: Your browser doesn\'t support geolocation.';
        }

        var options = 
		{
          map: map,
          position: new google.maps.LatLng(60, 105),
          content: content
        };

        var infowindow = new google.maps.InfoWindow(options);
        map.setCenter(options.position);
    }