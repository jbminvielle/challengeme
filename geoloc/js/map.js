	google.maps.event.addDomListener(window, 'load', initialize);//Au chargement de la page on lance la fonction initialize
	var map;

    function initialize() 
	{
        var mapOptions = 
		{
          zoom: 17,//définit le zoom sur la carte
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
            var oMarker = new google.maps.Marker
			({
			  icon:'img/icone.png',
              map: map,
              position: pos
            });
			map.setCenter(pos);// on centre la map sur notre position
			//alert(pos);
			oMarker.setDraggable(true);
			google.maps.event.addListener(oMarker, 'dragend', function(event) 
			{
				//message d'alerte affichant la nouvelle position du marqueur
				//alert("La nouvelle coordonnée du marqueur est : "+event.latLng);
				pos=event.latLng;
				map.setCenter(pos);
			});
			//var content="Défi de Jojo300";
			var contentString = 
			[
			  '<div id="containerTabs">',
				  '<div id="tabs">',
					  '<h3>Gobage de Flamby</h3>',
					  '<div id="tab-1">',
						'<p>Réalisé par <a id="nom" href="#">Durilou</a></p>',
					  '</div>',
					  '<a href="#"><span>Voir la vidéo</span></a><br/>',
					  '<a href="#"><span>Facebook</span></a>',
				  '</div>',
			  '</div>'
			].join('');
			
			var infoWindow=new google.maps.InfoWindow({
				content:contentString,
				position:pos
			});

			google.maps.event.addListener(oMarker,'click',infoClickOpen);//au passage de la souris sur le marqueur, on déclenche une fct
            google.maps.event.addListener(map,'click',infoClickClose);//lorsque la souris part, idem
			
			function infoClickOpen()
			{
				infoWindow.open(map,oMarker);//on ouvre une fenêtre sur le marqueur
				if( !oMarker.flagIcon)
				{
					oMarker.savIcon = oMarker.getIcon();  // récupération de l'image via la méthode getIcon()
					oMarker.flagIcon = true;
				}
				oMarker.setIcon('img/MouseOverIcone.png');
			}
			
			function infoClickClose()
			{
				infoWindow.close(map,oMarker);
				// restauration sur le mouseout
				oMarker.setIcon( oMarker.savIcon);
			}
			//console.log(pos);
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