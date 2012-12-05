	<!-- CSS
  ================================================== -->
	<link rel="stylesheet" href="css/style.css">
	
	<!-- Favicons
================================================== 
	<link rel="shortcut icon" type="image/png" href="images/favicon.png" />-->
	<!--[if lt IE 9]>
	<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	
</head>
<body>
	<div id="global">
		<header>
			<div id="wrapper">
				<div id="userPlace">
					<div id="facebookAuth">
						<p>Connecte toi pour jouer!</p>
						<div id="facebookConnect" class="fb-login-button hidden" scope="email,user_checkins, publish_stream">Se connecter</div>
					</div>
					<div id="userInfos" class="hidden">
						<img src="#" alt="" id="userPicture" />
						<div id="userPseudo">jbminvielle</div>
						<div id="userName"></div>
					</div>

					<div id="userMenu" class="hidden">
						<ul>
							<li><a href="#">Mon Profil</a></li>
							<li><a href="send_video.php">Soumettre une vidéo</a></li>
							<li><a href="#">Défier un ami</a></li>
							<li><div id="facebookUnconnect" class="fb-login-button">Se déconnecter</div>
</li>
						</ul>
					</div>
				</div>
			</div>

			<div id="logo">
				<a href="#"><strong>Challenge Me !</strong></a>
			</div>
		</header>


		<div id="container">
			<nav>
				<ul>
					<li class="current"><a href="#">Accueil</a></li>
					<li><a href="liste_challenge.php">Défis</a></li>
					<li><a href="liste_video.php">Videos</a></li>
					<li><a href="classement.php">Classement</a></li>
				</ul>
			</nav>
			<span class="separator">&nbsp;</span>

			<div id="liveContent">
