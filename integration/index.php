<!doctype html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title></title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width,initial-scale=1">

	<?php require('header.php'); ?>

	<div id="main-slider">
		<ul id="list-slider">
			<li>
				<img src="img/slide1.jpg" alt="Principe du site"/>
				<p><span class="titre-slide">Le principe ?</span>
				<span class="sous-titre-slide">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet !</span></p>
			</li>
			<li>
				<img src="img/slide1.jpg" alt="Principe du site"/>
				<p><span class="titre-slide">Texte 2</span>
				<span class="sous-titre-slide">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet !</span></p>
			</li>
			<li>
				<img src="img/slide1.jpg" alt="Principe du site"/>
				<p><span class="titre-slide">Texte 3</span>
				<span class="sous-titre-slide">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet !</span></p>
			</li>
		</ul>
		<div class="clearfix"></div>
		<a class="prev-slide" href="#">&nbsp;</a>
		<a class="next-slide" href="#">&nbsp;</a>
	</div>

	<div id="bloc-defis" class="clearfix">
		<div id="defi-semaine">
			<div id="defi-semaine-head">
				<p>Le défi de la semaine :</p>
				<a href="#">« Danser le Gangnam Style en public »</a> <!-- A l'avenir, récupérer le titre, infos et image de la vidéo par requête JS -->
			</div>
			<div id="defi-semaine-participer">
				<a href="#">Participez !</a>
			</div>
			<div id="defi-semaine-infos">
				<div>
					<p>Temps restant :</p>
					<p>Participants :</p>
					<p>Votants : </p>
				</div>
				<div>
					<p data-timeUntil="Sat, 8 Dec 2012 20:00:00 GMT">c</p>
					<p>32</p>
					<p>145</p>
				</div>
			</div>
			<img src="img/img-defi.jpg" alt="Nom du défi"/>
		</div>
		<div id="classement">
			<p>Ils dominent le classement !</p>
			<ul>
				<li><span>1er</span><a href="#"> Akajiro <span>&nbsp;</span></a></li>
				<li><span>2ème</span><a href="#"> Neuski <span>&nbsp;</span></a></li>
				<li><span>3ème</span><a href="#"> Dragirl <span>&nbsp;</span></a></li>
				<li><span>4ème</span><a href="#"> Nadium <span>&nbsp;</span></a></li>
				<li><span>5ème</span><a href="#"> Scouty <span>&nbsp;</span></a></li>
			</ul> <!-- Récupération du classement avec requête JS -->
		</div>
	</div>
	
	<div id="bandeau-participer">
		<a href="#">Accédez à tous les défis</a>
		<a href="#">Envie de défis ? Participez dès maintenant !</a>
	</div>
	
	<div id="map">
		<p>Le best-of des challenges réalisés autour de vous !</p>
		<div id="map_canvas"></div>
	</div>

		<?php require('footer.php'); ?>
	</div>
	
</body>
</html>