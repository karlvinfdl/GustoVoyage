<h1>Marche à suivre pour la mise en place du projet </h1>
<strong>Prérequis : NodeJs,Vite, cmd et npm</strong> 
<br>
<h2>Récupérer le projet ouvrir depuis Git</h2>
Récupéré le projet du git et faire un git clone dans le terminal : <br>

`git clone <url_du_projet>`<em> → URL récuparable dans le reposite sur GitHub</em><br>
`cd <nom_du_projet>`

<h2>Créer un projet avec Vite</h2>

`npm init -y` → initialise ton projet Node.js. <br>
`npm install -D sass` → pour installer Sass <br>
`npm install vite --save-dev` → installe Vite comme outil de développement. <br>

<h3>Ajouter dans le fichier package.json:</h3>

> "scripts": { <br>
  "dev": "vite", <br>
  "build": "vite build", <br>
  "preview": "vite preview" <br>
}
<h3>Démarrer le serveur de développement :</h3>

`npm run dev` → Démarrer le serveur <em>ctrl + clique gauche pour l'ouvrir,</em> <br>
Le projet sera disponible généralement sur http://localhost:5173

Lien de mon site publier https://karlvinfdl.github.io/GustoVoyage/
