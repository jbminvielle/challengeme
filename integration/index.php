<!doctype html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title></title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width,initial-scale=1">

	<?php require('header.php'); ?>
	<span class="separator">&nbsp;</span>
	<div id="main-slider">
		<a href="#" id="prev-slide">&nbsp;</a>
		<a href="#" id="next-slide">&nbsp;</a>
		<ul>
			<li>
				<img src="img/slide1.jpg" alt="Principe du site"/>
				<span><p class="titre-slide">Le principe ?</p>
				<p class="sous-titre-slide">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet !</p></span>
			</li>
			<li>
				<img src="img/slide1.jpg" alt="Principe du site"/>
				<span><p class="titre-slide">Le principe ?</p>
				<p class="sous-titre-slide">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet !</p></span>
			</li>
			<li>
				<img src="img/slide1.jpg" alt="Principe du site"/>
				<span><p class="titre-slide">Le principe ?</p>
				<p class="sous-titre-slide">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet !</p></span>
			</li>
		</ul>
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
				<p>Temps restant : <span>53h 43min 32sec</span></p>
				<p>Participants : <span>32</span></p>
				<p>Votants : <span>145</span></p>
			</div>
			<img src="img/img-defi.jpg" alt="Nom du défi"/>
		</div>
		<div id="classement">
			<p>Ils dominent le classement !</p>
			<ul>
				<li><span>1er</span> Akajiro <span>&nbsp;</span></li>
				<li><span>2ème</span> Neuski <span>&nbsp;</span></li>
				<li><span>3ème</span> Dragirl <span>&nbsp;</span></li>
				<li><span>4ème</span> Nadium <span>&nbsp;</span></li>
				<li><span>5ème</span> Scouty <span>&nbsp;</span></li>
			</ul> <!-- Récupération du classement avec requête JS -->
		</div>
	</div>
	
	<div id="bandeau-participer">
		<a href="#">Accédez à tous les défis</a>
		<a href="#">Envie de défis ? Participez dès maintenant !</a>
	</div>
	
	<div id="map">
		<p>Le best-of des challenges réalisés autour de vous !</p>
		<div></div>
	</div>

		<?php require('footer.php'); ?>
	</div>
	
</body>
</html>