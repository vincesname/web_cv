# Vincent Mangel — CV Web

Site vitrine de CV, en React, TypeScript et Vite. Le projet est entièrement statique : aucune API, base de données ni service externe requis à l’exécution. Le PDF source du CV est servi depuis `public/CV_Vincent_Mangel.pdf`.

## Développement

```bash
npm ci
npm run dev
```

Les composants sont écrits en TSX ; `npm run typecheck` lance la vérification TypeScript seule.

## Production

```bash
npm run build
```

La commande vérifie les types avant de produire le site.

Le dossier `www/` contient le site compilé prêt à publier et est versionné avec le code source. Configure le webhook OVH pour prendre `./www` comme dossier source et publier son contenu à la racine web du domaine. Le fichier `public/.htaccess` est copié à la racine de `www/`, avec `index.html` et les ressources. L’hébergement n’a pas besoin d’installer Node.js.

Après une modification, régénérer `www/` avec `npm run build` avant le push sur `main`. Le build statique est volontairement léger pour rester très en dessous de la limite d’hébergement de 100 Mo.
