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
			var content="Défi de Jojo300";
			var infoWindow=new google.maps.InfoWindow({
				content:content,
				position:pos
			});
			google.maps.event.addListener(oMarker,'mouseover',infoOver);//au passage de la souris sur le marqueur, on déclenche une fct
            google.maps.event.addListener(oMarker,'mouseout',infoOut);//lorsque la souris part, idem
			map.setCenter(pos);
			function infoOver()
			{
				infoWindow.open(map,oMarker);//on ouvre une fenêtre sur le marqueur
				if( !this.flagIcon)
				{
					this.savIcon = this.getIcon();  // récupération de l'image via la méthode getIcon()
					this.flagIcon = true;
				}
				this.setIcon('img/MouseOverIcone.png');
			}
			function infoOut()
			{
				infoWindow.close(map,oMarker);
				// restauration sur le mouseout
				this.setIcon( this.savIcon);
			}
			console.log(pos);
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