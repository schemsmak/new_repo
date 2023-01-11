#Description projet 

Ce projet a été généré avec Angular CLI version 11.2.6 avec l'api omdbapi.com. Le projet est un site web comportant les données de films,jeux video et séries.
La page d'acceuil affiche les films les plus populaires, on peut y accéder grâce au bouton Movies.Celle ci fonctionne grâce au component film.component.ts qui fait appel à l'api omdbapi.com grâce à la méthode getMovies() qui est dans le service film.service.ts. Pour ce qui est des onglets séries et game ainsi que films celle ci sont filtrées avec le component home.component.ts. Nous pouvons accéder à chaque data plus precisement grace au component detail-film.component.ts et homepage qui affiche le titre du texte, le genre, la note imdb ainsi que le résumé et un bouton back pour retourner en arrière. Pour ce qui est de la page about elle est dirigée par le component about.component.ts.
Nous avons crée un component page-not-found qui redirige le navigateur vers une page d'erreur si l'url est mauvais. Pour finir on a créé un component border-card.directive.ts qui permet de mettre une bordure autour de chaque film lorsque l'on passe la souris dessus.On a aussi crée un component search.component.ts qui permet de rechercher un film grâce à la barre de recherche mais on a pas réussi a l'implémenter dans le projet. Pour ce qui est du css on a crée un fichier style.css qui permet de mettre en forme le site web. Pour ce projet nous etions 2 personnes: Estelle Guillaume et Schems Makhlouf et n'avions jamais fait d'angular auparavant.  



# new_repo
webdev angular api

#Commande pour ajouter modification 

git add .
(ajoute toutes les modifications (le . symbolise tout))

git commit -m "explication" 
(creer un nouveau commit git add pousse les fichiers en zone
index, git commit ls sauvegarde reelement dans un nouveau commit)

git status ( verifier etat du fichier)

git push -u origin main (pousse les modifications vers le serveurs github)

#Pour ouvrir le code sur vs code 
code .

