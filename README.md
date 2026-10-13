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

OVH déploie le dépôt dans le dossier racine web `./www`. Le site compilé est versionné dans `site/` ; le `.htaccess` à la racine du dépôt sert `site/index.html` et réécrit les chemins des ressources vers ce dossier. Ainsi, `./www` est la racine du site sur l’hébergement, et non un sous-dossier à ajouter au dépôt. L’hébergement n’a pas besoin d’installer Node.js.

Après une modification, régénérer `site/` avec `npm run build` avant le push sur `main`. Le build statique est volontairement léger pour rester très en dessous de la limite d’hébergement de 100 Mo.
