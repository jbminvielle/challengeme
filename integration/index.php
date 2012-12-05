<!doctype html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title></title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width,initial-scale=1">

	<?php require('header.php'); ?>

	<section id="main-slider">
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
	</section>

	<section id="bloc-defis" class="clearfix">
		<div id="defi-semaine">
			<div id="defi-semaine-head" class="bandeau-titre">
				<p>Le défi de la semaine :</p>
				<a href="#">« Danser le Gangnam Style en public »</a> <!-- A l'avenir, récupérer le titre, infos et image de la vidéo par requête JS -->
			</div>
			<div id="defi-semaine-participer">
				<a href="#">Participez !</a>
			</div>
			<div id="defi-semaine-infos">
				<ul>
					<li>Temps restant :</li>
					<li>Participants :</li>
					<li>Votants : </li>
				</ul>
				<ul class="info-valeurs yellow">
					<li>53h 43min 32sec</li>
					<li>32</li>
					<li>145</li>
				</ul>
			</div>
			<img src="img/img-defi.jpg" alt="Nom du défi"/>
		</div>
		<div id="classement">
			<p>Ils dominent le classement !</p>
			<ul>
				<li><span>1er</span><a href="#"> Akajiro <span class="fleche">&nbsp;</span></a></li>
				<li><span>2ème</span><a href="#"> Neuski <span class="fleche">&nbsp;</span></a></li>
				<li><span>3ème</span><a href="#"> Dragirl <span class="fleche">&nbsp;</span></a></li>
				<li><span>4ème</span><a href="#"> Nadium <span class="fleche">&nbsp;</span></a></li>
				<li><span>5ème</span><a href="#"> Scouty <span class="fleche">&nbsp;</span></a></li>
			</ul> <!-- Récupération du classement avec requête JS -->
		</div>
	</section>
	
	<div id="bandeau-participer">
		<a href="#">Accédez à tous les défis</a>
		<a href="#">Envie de défis ? <span>Participez dès maintenant !</span></a>
	</div>
	
	<section id="map">
		<p>Le best-of des challenges réalisés autour de vous !</p>
		<div id="map_canvas"></div>
	</section>

		<?php require('footer.php'); ?>
	</div>
	
</body>
</html>