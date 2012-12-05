<!doctype html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title></title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width,initial-scale=1">

	<?php require('header.php'); ?>

	<section id="monprofil">
		<div id="infos-profil">
			<p class="bandeau-titre">Mon profil</p>
			<img src="" alt="" />
			<a href="#" class="partage-profil">Partager ma fiche<span></span></a>
			<p id="nom-utilisateur"class="violet">Nom Utilisateur</p>
			<ul>
				<li>Pseudo :</li>
				<li>Nombre de défis réalisés :</li>
				<li>Nombre de défis proposés :</li>
				<li>Nombres de badges :</li>
			</ul>
			<ul class="info-valeurs yellow">
				<li>Pseudo</li>
				<li>8</li>
				<li>4</li>
				<li>1</li>
			</ul>
		</div>
		<div id="classement-profil">
			<a href="#" id="num-classement">32</a>
			<p class="violet"><span>ème</span> du classement général</p>
		</div>
		<div id="actions-profil">
			<a href="#">Soumettre un défi</a>
			<a href="#">Défier un ami</a>
		</div>
		<a href="#" id="fb-logout">Logout</a>
	</section>

	<section id="mesbadges">
		<p class="violet">Mes badges :</p>
	</section>

	<section id="mesvideos">

	</section>


	<?php require('footer.php'); ?>
	</div>
	
</body>
</html>