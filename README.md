# Vincent Mangel — CV Web

Site vitrine de CV, en React et Vite. Le projet est entièrement statique : aucune API, base de données ni service externe requis à l’exécution. Le PDF source du CV est servi depuis `public/CV_Vincent_Mangel.pdf`.

## Développement

```bash
npm ci
npm run dev
```

## Production

```bash
npm run build
```

Le dossier `site/` contient le site statique compilé et est versionné avec le code source afin que le webhook OVH puisse le publier sans installer Node.js sur l’hébergement. Le fichier `.htaccess` sert `site/index.html` à la racine et redirige les ressources vers ce dossier. Le build ne nécessite aucun backend ni base de données.

Après une modification, régénérer `site/` avec `npm run build` avant le push ou la fusion sur `main`. Le build statique est volontairement léger pour rester très en dessous de la limite d’hébergement de 100 Mo.
