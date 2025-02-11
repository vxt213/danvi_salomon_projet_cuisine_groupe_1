# danvi_salomon_projet_cuisine_groupe_1

# Tutoriel : Heberger un site web avec GitHub Pages

## 1. Pré-requis

- Un compte [GitHub](https://github.com/vxt213/danvi_salomon_projet_cuisine_groupe_1)
- Git installé sur ordinateur (facultatif, mais recommandé)



## 2. Créer un dépôt GitHub

1. Va sur [GitHub](https://github.com/vxt213/danvi_salomon_projet_cuisine_groupe_1) et connecte-toi.
2. Clique sur **New repository**.
3. Donne un nom à ton dépôt (ex. ).
4. Coche **"Add a README file"** (optionnel).
5. Clique sur **Create repository**.



## 3. Ajouter des fichiers du site

### Option 1 : Ajouter les fichiers directement sur GitHub

1. Ouvre ton dépôt.
2. Clique sur **Add file > Upload files**.
3. Ajoute ton fichier **index.html** et d'autres fichiers (CSS, JS, images…).
4. Clique sur **Commit changes**.

### Option 2 : Utiliser Git sur ton PC

1. Clone ton dépôt :
   ```bash
   git clone https://github.com/ton-utilisateur/mon-site.git
   cd mon-site
   ```
2. Ajoute ton fichier **index.html**.
3. Fais un commit et pousse les fichiers sur GitHub :
   ```bash
   git add .
   git commit -m "Ajout des fichiers du site"
   git push origin main
   ```

## 4. Activer GitHub Pages

1. Va sur ton dépôt GitHub.
2. Clique sur **Settings** (en haut).
3. Dans le menu à gauche, va dans **Pages**.
4. Sous **"Branch"**, choisis **main** et clique sur **Save**.

🚀 **Ton site sera accessible à** :

```
https://ton-utilisateur.github.io/mon-site/
```


## 5. Personnaliser avec un thème

Si tu veux utiliser un thème pour ton site, tu peux ajouter un fichier **\_config.yml** avec :

```yml
theme: minima
```

---

## 6. Mettre à jour ton site

Si tu modifies ton site, pense à envoyer les changements avec :

```bash
git add .
git commit -m "Mise à jour du site"
git push origin main
```


