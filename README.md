## NPM

```bash
  npm init
```

## SASS

Instalacija [SASS-a](https://sass-lang.com/install)

```bash
  npm install -g sass
```

Kompajliranje SASS-a

```bash
  sass styles/style.scss styles/style.css
```

## CSS minifikacija

Instalacija uglifycss

```bash
  npm install -g uglifycss
```

U style datoteci pokrenuti minifikaciju CSS filea

```bash
  uglifycss style.css --output style.min.css
```

## Transpiliranje JS

Instalacija Babel paketa:

```bash
  npm install @babel/core @babel/cli @babel/preset-env --save-dev
```

Kreiranje .babelrc file u korijenskom direktoriju projekta. To je konfiguracijski file koji definira koje Babel plugine i presetove treba koristiti. U .babelrc fileu, postaviti sljedeći sadržaj:

```json
{
  "presets": ["@babel/preset-env"]
}
```

Transpiliranje JavaScript filea koristeći Babel CLI. U terminalu, izvršiti sljedeću naredbu:

```bash
  npx babel js/main.js --out-file dist/main.js
```

## Minifikacija  JS

Instalacija Terser-a:

```bash
  npm install -g terser --save-dev
```

Pozicionirati se u dist folder te minificirati

```bash
  terser main.js -o main.min.js --compress --mangle
```
