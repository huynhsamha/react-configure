# create-react-app-config
create-react-app with redux, sass, code spliting, router, jQuery, ...


Table of Contents:
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
- [jQuery](#jquery)
    - [Installation](#installation)
    - [How to use?](#how-to-use)
    - [Recommend](#recommend)
- [Bootstrap 4](#bootstrap-4)
    - [Use along with jQuery](#use-along-with-jquery)
        - [Installation](#installation)
        - [How to use?](#how-to-use)
- [VS Code Extensions](#vs-code-extensions)
- [VS Code User Settings](#vs-code-user-settings)







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

file `json`:

```
{
    "scripts": {
    -   "start": "react-scripts start",
    -   "build": "react-scripts build",
    +   "start": "npm-run-all -p watch-css start-js",
    +   "build": "npm-run-all build-css build-js",
    +   "start-js": "react-scripts start",
    +   "build-js": "react-scripts build",
    +   "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
    +   "build-css": "node-sass-chokidar src/ -o src/",
  }
}
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









# jQuery

## Installation
1. `yarn add jquery` or `npm install --save jquery`
2. `mkdir src/lib`
3. `touch src/lib/jquery.js`
4. edit created file by following lines:

```javascript
import $ from 'jquery';

// config jquery variables for other lib use jQuery (such as bootstrap)
window.$ = $;
window.jQuery = $;
```

## How to use?
1. In `index.js`, import config as: `import './lib/jquery';`
2. In the component, to use jQuery, you should import: `import $ from 'jquery';`
3. To declare jquery function, only use in `componentDidMount()`, such as:

```javascript
  componentDidMount() {
    // jQuery should declare at here
    $(document).ready(() => {
      $('#alert').click(() => alert('This is alert be jQuery'));
    });
  }
```

## Recommend
Not use jQuery if it's not needed






# Bootstrap 4
## Use along with jQuery
### Installation
1. `yarn add bootstrap` or `npm install --save bootstrap`
2. `mkdir src/lib` (if you have `lib`, skip this step)
3. `touch src/lib/bootstrap.js`
4. edit created file as lines:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

### How to use?
1. In `index.js`, import by: `import './lib/bootstrap';`
2. In the component, you can use bootstrap 4 as document available









# VS Code Extensions
should install the below extensions I think helpful:

1. Auto Close Tag
2. Auto Rename Tag
3. Bootstrap 3 Snippets
4. Bootstrap 4 & Font awesome snippets
5. Bracket Pair Colorizer
6. EditorConfig for VS Code
7. ESLint
8. Font-awesome codes for css
9. Font-awesome codes for html
10. HTML CSS suppport
11. HTML Snippets
12. IntelliSense for CSS class names
13. JavaScript (ES6) code snippets
14. Markdown All in One
15. Markdown PDF
16. npm
17. npm INtellisence
18. Path Intellisense
19. Prettier - Code formatter
20. Sass
21. Sass Formatter
22. SCSS IntelliSence
23. TSLint
24. vscode-icons
25. Beautify css/sass/scss/less











# VS Code User Settings
you also setting by:

1. `Ctrl + Shift P`
2. Search `user settings` and `enter`
3. And below settings I think helpful

```json
{
    "workbench.iconTheme": "vscode-icons",
    "workbench.startupEditor": "newUntitledFile",
    "window.zoomLevel": 0,
    "editor.fontSize": 13,
    "eslint.autoFixOnSave": true,
    "tslint.autoFixOnSave": true,
    "editor.formatOnSave": false,
    "editor.renderWhitespace": "boundary",
    "editor.quickSuggestions": {
        "other": true,
        "comments": true,
        "strings": true
    },
    "terminal.integrated.cursorStyle": "line",
    "terminal.integrated.fontSize": 13,
    "terminal.integrated.fontFamily": "",
    "vsicons.projectDetection.autoReload": true,
}
```