	<footer>
	
	</footer>

<!-- JS
	================================================== -->
	<script type="text/javascript" src="js/jquery-min.js"></script>
	<script type="text/javascript" src="js/jcycle.js"></script>

	<script type="text/javascript" src="js/main.js"></script>
	
	<div id="fb-root"></div>
	<script src="http://connect.facebook.net/fr_FR/all.js"></script>

	<script>
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
					alert(JSON.stringify(response.authResponse)); //to get the 
				} else if (response.status === 'not_authorized') {
					alert('not authorized');
				} else {
					alert('not connected');
				}
			 });
		};

		// Load the SDK Asynchronously
		(function(d){
			 var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
			 if (d.getElementById(id)) {return;}
			 js = d.createElement('script'); js.id = id; js.async = true;
			 js.src = "//connect.facebook.net/fr_FR/all.js";
			 ref.parentNode.insertBefore(js, ref);
		 }(document));
	</script>

</html>
