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
    - [Use via React Component - reactstrap](#use-via-react-component---reactstrap)
        - [Installation and Usage](#installation-and-usage)
    - [Recommend](#recommend)
- [`react-router-dom` (router) and `react-loadable` (code-splitting)](#react-router-dom-router-and-react-loadable-code-splitting)
    - [Install `react-loadable, react-router-dom`](#install-react-loadable-react-router-dom)
    - [Create a Loading Component](#create-a-loading-component)
    - [Use `react-loadable` to create new component](#use-react-loadable-to-create-new-component)
    - [Create Demo Router](#create-demo-router)
    - [Use `react-router-dom` with loadable components](#use-react-router-dom-with-loadable-components)
    - [Test loadable components:](#test-loadable-components)
- [UI Awesome with React Component](#ui-awesome-with-react-component)
    - [Reveal Component on scroll: use react-reveal](#reveal-component-on-scroll-use-react-reveal)
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
4. Can view `demo-jquery-bootstrap`

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
3. Can view `demo-jquery-bootstrap`

## Use via React Component - reactstrap
### Installation and Usage
1. `yarn add reactstrap@next` or `npm install --save reactstrap@next`
2. Only import Component to use as reactstrap document
3. Can view `demo-jquery-bootstrap`

## Recommend
1. I think you should use `reactstrap` if you want use some component in react, with event handle.
2. If you need some style in bootstrap, you can use directly, and don't need use `jQuery`















# `react-router-dom` (router) and `react-loadable` (code-splitting)

## Install `react-loadable, react-router-dom`

`yarn add react-loadable react-router-dom`
or
`npm install --save react-loadable react-router-dom`

1. `react-loadable`: to code-splitting
    + that means lazy load components until it's called by user, it speed up your Single Page App (SPA).
    + `create-react-app` will bundle new script file, when it's called, it will import this file to app.
2. `react-router-dom`: to router for SPA, not loading again all page.


## Create a Loading Component
1. Create Loading component
2. When use Loadable with loading component, it will add props to this component, such as:
    `{ isLoading: true, pastDelay: false, timedOut: false, error: null }`


## Use `react-loadable` to create new component
1. View `demo-loadable-component` to sample implement.
2. View component `demo-loadable-component.jsx` (not loadable) and `loadable-demo-component.jsx` (loadable)


## Create Demo Router

1. `mkdir src/demo-router`
2. `touch src/demo-router/demo-router.jsx`
3. `mkdir src/demo-router/link-1`
4. craete simple component with `demo-router` and `link-1`
5. copy `link-1` and paste to `link-2` and `link-3`
6. try import `loadable` with `demo-router` with `link-1, link-2, link-3`

Demo for above steps:
```jsx
// demo-router.jsx

// declare style
const DemoRouterStyle = {
    width: '80%',
    margin: '20px auto',
    minHeight: '100px',
    backgroundColor: '#cacaca',
    padding: '25px'
}

render() {
    return (
        <div style={DemoRouterStyle}>
            <LoadableLink1 />
            <LoadableLink2 />
            <LoadableLink3 />
        </div>
    )
}
```


## Use `react-router-dom` with loadable components
1. In `demo-router.jsx`: 
2. `import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';`
3. `<Router>` only one child
4. Route with components:

```jsx
<Switch>
    <Route exact path="/link-1" component={LoadableLink1} />
    <Route exact path="/link-2" component={LoadableLink2} />
    <Route exact path="/link-3" component={LoadableLink3} />
    <Route render={(props) => <div>Page Not Found</div>}/>
</Switch>
```

5. Link to route

```jsx
<Link to="/link-1">Link to 1</Link>
<Link to="/link-2">Link to 2</Link>
<Link to="/link-3">Link to 3</Link>
<Link to="/link-page-not-found">Link to Page Not Found</Link>
```

## Test loadable components:
1. Inspect element in browser
2. Choose tab network
3. Click filter JS
4. Refresh page
5. first only `bundle.js` and some js file
6. click link-1, you see `*.chunk.js` is loaded
7. continue with link-2, link-3, you also see new `chunk file` is loaded by browser
8. That is lazy loading component









# UI Awesome with React Component
## Reveal Component on scroll: use react-reveal
### Installation
`yarn add react-reveal` 

or 

`npm install --save react-reveal`
### How to use?




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