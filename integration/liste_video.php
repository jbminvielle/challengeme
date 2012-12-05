<!doctype html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title></title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width,initial-scale=1">

	<link rel="stylesheet" href="css/style_temp.css">
	<?php require('header.php'); ?>

	<section id="videos">
		<header id="defi-semaine-head" class="bandeau-titre">
			<h1>Les vidéos</h1>
		</header>
		<div id="absolute2">
			<div id="recherche_video">
				<form method="post" name="form">
					<label>Rechercher une vidéo :</label>
					<select>
						<option value="0">Intitulé du défi</option>
						<option value="1">Défi 1</option>
						<option value="2">Défi 2</option>
						<option value="3">Défi 3</option>
						<option value="4">Défi 4</option>
					</select>
					<select>
						<option value="0">Auteur du défi</option>
						<option value="1">Défi 1</option>
						<option value="2">Défi 2</option>
						<option value="3">Défi 3</option>
						<option value="4">Défi 4</option>
					</select>
					<select>
						<option value="0">Localisation du défi</option>
						<option value="1">Défi 1</option>
						<option value="2">Défi 2</option>
						<option value="3">Défi 3</option>
						<option value="4">Défi 4</option>
					</select>
					<input id="go" type="submit" value="GO" onclick="valid(this);"/>
				</form>
			</div>
			<div id="trier_par">
				<p>Résultats pour :</p>
				<p class="active">quelque chose</p>
				<p id="trier">Trier par :</p>
				<p><a class="classement active" href="#">Date</a></p>
				<p>  |  </p>
				<p><a class="classement" href="#">Popularité</a></p>
			</div>
			<div id="resultat_recherche">
				<div id="video1" class="video">
					<img src="" alt="" title="" width="210px" height="117px">
					<h3>"Titre"</h3>
					<p>réalisé le </p>
					<p class="date">11/02/2012</p>
					<p> à </p>
					<p class="lieu">Montreuil</p>
					<p> - </p>
					<p class="duree">3min30</p>
					<p class="auteur"> par <a href="#">Jean-Luc</a></p>
					<p class="description">Description</p>
				</div>
				<div id="video2" class="video">
					<img src="" alt="" title="" width="210px" height="117px">
					<h3>"Titre"</h3>
					<p>réalisé le </p>
					<p class="date">11/02/2012</p>
					<p> à </p>
					<p class="lieu">Montreuil</p>
					<p> - </p>
					<p class="duree">3min30</p>
					<p class="auteur"> par <a href="#">Jean-Luc</a></p>
					<p class="description">Description</p>
				</div>
			</div>
		</div>


	</section>
		<?php require('footer.php'); ?>
	</div>
	
</body>
</html>

