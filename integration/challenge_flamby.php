<!doctype html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Défi - Gobage de Flamby</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width,initial-scale=1">
		<!-- Identifiant de l'application opengraph -->
	<meta property="fb:app_id" content="267328883388489" />
	<!-- Propriétés de l'objet --> 
	<meta property="og:type" content="challengemehetic:challenge" /> 
	<meta property="og:title" content="Gobage de famby !" /> 
	<meta property="og:description" content="Ce défi consiste à gober un flamby lolilol" /> 
	<meta property="og:image" content="medias/challenges_images/gobage_flamby.png" /> 
	<meta property="og:url" content="challenge.php?gobage-famby" />

	<link rel="stylesheet" href="css/style_temp.css">
	<?php require('header.php'); ?>
	<span class="separator">&nbsp;</span>
	<!-- Page pour le déji "gobage de flamby" -->
	<div id="laVideo">
		<a id="close" href="">[Fermer]</a>
	</div>
	<section id="defi">
		<header id="defi-semaine-head">
			<h1>Le défi</h1>
		</header>
		<div id="absolute">
			<img src="medias/challenges_images/gobage_famby.png" alt="Gobage_flamby" title="Gobage_flamby" width="376px" height="210px">
			<h2>"Gobage de Flamby"</h2>
			<p>
				<span>Votre objectif :</br></span>
					Suspendisse commodo, metus nec tristique facilisis, 
					justo leo tristique dolor, nec mattis dolor justo quis felis. 
					Pellentesque eleifend adipiscing orci sit amet suscipit.
			</p>
			<a href="" class="call_action">Participer</a>
			<a href="#video_gallerie" class="call_action">Voir les vidéos</a>
		</div>
	</section>
	<section class="autre_defi">
		<h1>Les vidéos réalisées autour de vous !</h1>
		<p id="ligne_orange"></p>
		<div id="gmap"></div>
	</section>
	<section class="autre_defi" id="video_gallerie">
		<h1>La galerie des videos</h1>
		<p id="ligne_orange"></p>
		<p id="trier">Trier par :</p>
		<nav>
			<a href="#" id="date" class="classement active">Date</a>
			<p> | </p>
	       	<a href="#" id="pop" class="classement">Popularité</a>
	    </nav>
		<section id="gallery">
			<ul>
		 		<li>
					<a href=""><img src="" alt="" title="" width="200px" height="153px"></a>
					<p>
						réalisé par 
						<a href="">pseudo</a>
					</p>
					<p>date</p>
				</li>
			</ul>
		</section>

	</section>
		<?php require('footer.php'); ?>
	</div>
	
</body>
</html>