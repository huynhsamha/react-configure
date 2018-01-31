# create-react-app-config
create-react-app with redux, sass, code spliting, router, ...




- [create-react-app-config](#create-react-app-config)
- [Start with create-react-app](#start-with-create-react-app)
- [Config environment variables](#config-environment-variables)
- [Post-Processing CSS:](#post-processing-css)
- [CSS Preprocessor (Sass, Less etc.)](#css-preprocessor-sass-less-etc)
- [Create server node](#create-server-node)
    - [express to init node](#express-to-init-node)
    - [config server express](#config-server-express)
    - [install dependencies package](#install-dependencies-package)
    - [add package cors](#add-package-cors)
    - [start server-client](#start-server-client)
- [Environment for react app](#environment-for-react-app)
- [Remove default component App](#remove-default-component-app)




# Start with create-react-app
Create react app from create-react-app:

`create-react-app react-app`

1. combine .gitignore from react-app to ./../
2. remove README.md from react-app
3. remove .gitignore from react-app
4. move all ./react-app to ./../
5. use `npm start` or `yarn start` to start development
6. use `npm build` or `yarn build` to build production




# Config environment variables
Create files env, `create-react-app` will use them.

`touch .env .env.development .env.production`

In `.env.development`: set var REACT_APP_ENV is development
`REACT_APP_ENV=development`

In `.env.production`: set var REACT_APP_ENV is production
`REACT_APP_ENV=production`

Only var with prefix `REACT_APP_` can use in `create-react-app`



# Post-Processing CSS:
This project setup minifies your CSS and adds vendor prefixes to it automatically through Autoprefixer so you don’t need to worry about it.






# CSS Preprocessor (Sass, Less etc.)

`npm install --save node-sass-chokidar npm-run-all`

should use: `yarn add node-sass-chokidar npm-run-all`

file `package.json`:

```
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build-js": "react-scripts build",
+    "build": "npm-run-all build-css build-js",
```

file `.gitignore`:

```
# auto generated files (sass, less, ...)
src/**/*.css
```





# Create server node

## express to init node

```bash
mkdir server
cd server
express
```

## config server express

1. rename app.js to server.js
2. join server.js and ./bin/www
3. correct file server.js
4. move server.js to root
5. insert dependencies in package.json to package.json in root
6. remove dependencies not use (serve-favicon, jade)
7. remove all file in server, execpt routes/index.js

## install dependencies package

`yarn` or `npm install`

## add package cors

Using package cors to cross localhost:3000 (client-side, is react) to localhost:4200 (server-side, is node express)

`yarn add cors` or `npm install --save cors`

## start server-client

client side (react): localhost:3000
`yarn start` or `npm start`

server-side (node express): localhost:4200
`node server`





# Environment for react app

```bash
mkdir src/environments
cd src/environments
touch env.development.js env.production.js index.js
```

1. create file as source code
2. in development, use `localhost:4200` as server, so you can detect env to use `baseUrl API`, in production, `baseUrl` then is only `/`

Only var with prefix `REACT_APP_` can use in `create-react-app`





# Remove default component App
1. change extension to .jsx
2. remove `logo.svg`
3. change `.css` to `.scss` (auto generated)
4. remove all style