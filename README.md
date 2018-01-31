# create-react-app-config
create-react-app with redux, sass, code spliting, router, ...

# step to step to create project

## create-react-app
Create react app from create-react-app:

`create-react-app react-app`

1. combine .gitignore from react-app to ./../
2. remove README.md from react-app
3. remove .gitignore from react-app
4. move all ./react-app to ./../

## start

`npm start` or use `yarn start`

## environment variables
create files env, create-react-app will use them.

`touch .env .env.development .env.production`

can edit these files as source code

## CSS Preprocessor (Sass, Less etc.)

### Post-Processing CSS:
This project setup minifies your CSS and adds vendor prefixes to it automatically through Autoprefixer so you don’t need to worry about it.

### sass, less, scss,...

`npm install --save node-sass-chokidar npm-run-all`
should use: `yarn add node-sass-chokidar npm-run-all`

file package.json:

```json
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build-js": "react-scripts build",
+    "build": "npm-run-all build-css build-js",
```

file .gitignore:
```
# auto generated files (sass, less, ...)
src/**/*.css
```

## create server node

### express to init node

```bash
mkdir server
cd server
express
```

1. rename app.js to server.js
2. join server.js and ./bin/www
3. correct file server.js
4. move server.js to root
5. insert dependencies in package.json to package.json in root
6. remove dependencies not use (serve-favicon, jade)
7. remove all file in server, execpt routes/index.js

### install package

`yarn` or `npm install`

### add package cors

use package cors to cross localhost:3000 (client-side, is react) to localhost:4200 (server-side, is node express)

`yarn add cors` or `npm install --save cors`

### run to test

client side (react): localhost:3000
`yarn start` or `npm start`

server-side (node express): localhost:4200
`node server`


## Environment for react app

```bash
mkdir src/environments
cd src/environments
touch env.development.js env.production.js index.js
```

1. create file as source code
2. in development, use `localhost:4200` as server, so you can detect env to use `baseUrl API`, in production, `baseUrl` then is only `/`

## Remove default component App
1. change extension to .jsx
2. remove `logo.svg`
3. change `.css` to `.scss` (auto generated)
4. remove all style