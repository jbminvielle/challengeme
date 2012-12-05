	<section id="envoi">
		<header id="defi-semaine-head">
			<h1>Envoyer une video</h1>
		</header>
		<div id="absolute">
			<h2>Titre du défi</h2>
			<form id="addvideo">
				<label> Choisir une vidéo :</label>
				<input type="file" name="fichier" id="fichier"/><br />
				<label> Titre de la vidéo :</label>
		      	<input type="text" name="verif" placeholder="Titre de la video" autocomplete="off"/>
		      	<p class="input non"></p><br />
				<label> Description de la vidéo :</label>
		      	<input type="text" name="verif" placeholder="Description de la video" autocomplete="off"/>
		      	<p class="input non"></p><br />
		      	<label>Ajouter un lieu :</label>
		      	<span id="lieu">Montreuil</span>
		      	<div id="carte">
		      		Gmap ici !
		      	</div>
		      	<section id="localisation">
			      	<p>Votre position : </p>
			      	<p>
			      		<div id="answer"></div>
			      		<a href="#" class="choix">Choisir</a>
			      	</p><br />
			      	<p>Choisir un autre lieu</p>
					<input type="text" name="position" placeholder="Votre lieu" />
			      	<ul>
				      	<li>
				      		Ville 1
				      		<a href="#" class="choix">Choisir</a>
				      	<li>
				      		Ville 2
				      		<a href="#" class="choix">Choisir</a>
				      	</li>
				      	<li>
				      		Ville 3
				      		<a href="#" class="choix">Choisir</a>
				      	</li>
				    </ul>
				</section>
		      	<input type="checkbox" checked id="check" name="CG" value="1">
		      	<a href='http://vimeo.com/terms'>J'accepte les conditions générales de Vimeo</a><br />
		      	<input type="submit" value="Envoyer"/>

		    </form>
		</div>
		
	</section>