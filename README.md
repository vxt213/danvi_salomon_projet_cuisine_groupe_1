# danvi_salomon_projet_cuisine_groupe_1
Restaurant Pixelspark.co
Bienvenue sur le site web de Pixelspark.co !  
Ce site présente notre menu ainsi que les prix des repas, une rubrique qui parle de notre histoire et nos valeurs, los horaires d’ouvertures de notre restaurant, pourquoi choisir notre restaurant et le retour de nos clients. Sur ce site, vous pouvez également nous contacter directement (par email, par téléphone) et comment passer votre commande.
Fonctionnalités
* Présentation du restaurant : Découvrez notre histoire et nos valeurs,notre contact, et les retours clients
-  Menu interactif : Consultez nos plats et boissons avec leurs descriptions et prix
* Site responsive : Compatible avec mobiles, tablettes et ordinateurs.

Déploiement avec GitHub Pages
Pour lancer le site sur GitHub page, voilà les étapes à suivre :
Étape 1 : Créer un dépôt GitHub pour notre site 
a- Pour créer un dépôt GitHub, il faut avoir d’abord créé (pré-requis) :
* Un compte [GitHub](https://github.com/)
* Git installé sur ton ordinateur (facultatif, mais recommandé)

b- Après avoir créé un compte GitHub :
* Connecte-toi à [GitHub](https://github.com/) et créez un nouveau dépôt.
* Clonez-le sur votre ordinateur ou ajoutez-y les fichiers du site.

c- Pour créer un dépôt GitHub :
1. Va sur [GitHub](https://github.com/) et connecte-toi.
2. Clique sur *New repository*.
3. Donne un nom à ton dépôt (ex. mon-site).
4. Coche *"Add a README file"* (optionnel).
5. Clique sur *Create repository*.

d- Pour ajouter des fichiers du site on a deux options :
Option 1 : Ajouter les fichiers directement sur GitHub
1. Ouvre ton dépôt.
2. Clique sur *Add file > Upload files*.
3. Ajoute ton fichier *index.html* et d'autres fichiers (CSS, JS, images…).
4. Clique sur *Commit changes*.

Option 2 : Utiliser Git sur ton PC
1. Clone ton dépôt :
   bash
   git clone https://github.com/vxt213/danvi_salomon_projet_cuisine_groupe_1.git
   cd mon-site
2. Ajoute ton fichier *index.html*.
3. Fais un commit et pousse les fichiers sur GitHub :
   bash
   git add .
   git commit -m "Ajout des fichiers du site"
   git push origin main
  
Étape 2 : Ajouter et pousser le site sur GitHub
Dans votre terminal, exécute les commandes suivantes :  
```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/vxt213/danvi_salomon_projet_cuisine_groupe_1.git
git push -u origin main

Etape3 : Activer GitHub Pages du site
1. Va sur ton dépôt GitHub.
2. Clique sur Settings (en haut).
3. Dans le menu à gauche, va dans Pages.
4. Sous "Branch", choisis **main et clique sur Save.
Après ça ton site sera accessible sur : https://github.com/vxt213/danvi_salomon_projet_cuisine_groupe_1.git

Personnaliser le site avec un thème (optionnel)
Si tu veux utiliser un thème pour ton site, tu peux ajouter un fichier *\_config.yml* avec :
yml
theme: minima

Mettre à jour le site
Si tu modifies le site, pense à envoyer les changements avec :
bash
git add .
git commit -m "Mise à jour du site"
git push origin main