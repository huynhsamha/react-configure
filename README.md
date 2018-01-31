# create-react-app-config
create-react-app with redux, sass, code spliting, router, ...

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