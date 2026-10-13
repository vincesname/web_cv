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

OVH sert le dossier `./www` comme racine du site. Le build y écrit directement le site compilé et ce dossier est versionné avec le code source pour que Git Deploy le publie tel quel. Le fichier `public/.htaccess` est copié à la racine de `www/`. L’hébergement n’a pas besoin d’installer Node.js.

Après une modification, régénérer `www/` avec `npm run build` avant le push sur `main`. Le build statique est volontairement léger pour rester très en dessous de la limite d’hébergement de 100 Mo.
