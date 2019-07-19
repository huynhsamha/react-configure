# react-configure


Necessary configure for [create-react-app](https://github.com/facebook/create-react-app) with [redux](https://redux.js.org/docs/basics/UsageWithReact.html), 
react-redux, 
redux-thunk, 
react-router, 
react-router-dom, 
sass, 
code spliting, 
jQuery, 
bootstrap, 
react-loadable, 
react-scrollchor, 
react-intl, 
react-select, 
react-datepicker, 
react-table, 
moment, 
...



![vn](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Vietnam.png) [**Vietnamese version here**](https://github.com/huynhsamha/react-configure/blob/master/README.VN.md)




## Table of contents:
- [Start with `create-react-app`](#start-with-create-react-app)
- [Config environment variables](#config-environment-variables)
- [Post-Processing CSS:](#post-processing-css)
- [CSS Preprocessor (Sass, Less, etc.)](#css-preprocessor-sass-less-etc)
- [Create Node.JS server](#create-nodejs-server)
	- [Use `express` to initialization](#use-express-to-initialization)
	- [Configuration](#configuration)
	- [Install dependencies package](#install-dependencies-package)
	- [Install package `cors`](#install-package-cors)
	- [Start server-client](#start-server-client)
- [Environment for react app](#environment-for-react-app)
- [Organize `src` react app](#organize-src-react-app)
	- [Styles](#styles)
	- [Library and packages](#library-and-packages)
	- [Utility service](#utility-service)
	- [Reducers - Actions](#reducers---actions)
	- [Components](#components)
		- [Layout Components](#layout-components)
		- [Common Components](#common-components)
		- [Pages Components](#pages-components)
- [jQuery](#jquery)
	- [Installation](#installation)
	- [How to use?](#how-to-use)
	- [Recommend](#recommend)
- [Bootstrap 3, 4](#bootstrap-3-4)
	- [Use along with jQuery](#use-along-with-jquery)
		- [Installation](#installation)
		- [How to use?](#how-to-use)
	- [Use via React Component - `reactstrap`](#use-via-react-component---reactstrap)
		- [Installation and Usage](#installation-and-usage)
	- [Recommend](#recommend)
- [Font Awesome](#font-awesome)
	- [Add via `index.html`](#add-via-indexhtml)
	- [Add via npm package](#add-via-npm-package)
- [Animate.css](#animatecss)
	- [Install and configure](#install-and-configure)
	- [Custom duration time](#custom-duration-time)
	- [How to use](#how-to-use)
	- [Demo](#demo)
- [`react-router-dom` (router)](#react-router-dom-router)
- [`react-loadable` (code-splitting)](#react-loadable-code-splitting)
	- [Installation, Usage](#installation-usage)
	- [Test Loadable Components - code-splitting](#test-loadable-components---code-splitting)
- [`react-intl` - API to format date, number and string](#react-intl---api-to-format-date-number-and-string)
	- [Features](#features)
	- [Document](#document)
	- [Usage in this tutorial](#usage-in-this-tutorial)
- [Redux: `redux, react-redux, redux-thunk`](#redux-redux-react-redux-redux-thunk)
	- [Installation](#installation)
	- [Usage](#usage)
- [Fetch Data API to server node](#fetch-data-api-to-server-node)
	- [Create `services` to get API](#create-services-to-get-api)
- [UI Awesome with React Component](#ui-awesome-with-react-component)
	- [Reveal Component on scroll: use `react-reveal`](#reveal-component-on-scroll-use-react-reveal)
		- [Installation](#installation)
		- [Support](#support)
			- [Reveal with React](#reveal-with-react)
			- [Animated.css with React](#animatedcss-with-react)
		- [How to use?](#how-to-use)
	- [Scroll animated to target - react-scrollchor](#scroll-animated-to-target---react-scrollchor)
		- [Installation](#installation)
		- [How to use?](#how-to-use)
- [Datatable with `react-table`](#datatable-with-react-table)
- [VS Code Extensions](#vs-code-extensions)
	- [Icons, Colors, View](#icons-colors-view)
	- [Snippets](#snippets)
	- [Intellisence](#intellisence)
	- [Lint Code, Formater](#lint-code-formater)
	- [Edit, Preview README - Markdown files](#edit-preview-readme---markdown-files)
- [VS Code User Settings](#vs-code-user-settings)




## Donate

<a href="https://www.paypal.me/harisk305/5" target="_blank"><img src="https://i.imgur.com/4bN8fdy.jpg" alt="Donate to my paypal" width=240></a>



# Start with `create-react-app`
In this step, you should have `create-react-app` is installed globally.

1. Create a new app: `create-react-app react-app`
2. use `npm start` or `yarn start` to start development
3. use `npm build` or `yarn build` to build production

In this tutorial, I will use `yarn`, you can also use `npm`.




# Config environment variables
Create environment files, `create-react-app` will use them.

1. In terminal at root: `touch .env .env.development .env.production`
2. In `.env.development`: `REACT_APP_ENV=development`
3. In `.env.production` : `REACT_APP_ENV=production`

You can also set new environment variable.
**Note:** only variable with prefix `REACT_APP_` can use in `create-react-app`







# Post-Processing CSS:
As `create-react-app` said:

> This project setup minifies your CSS and adds vendor prefixes to it automatically through Autoprefixer so you don’t need to worry about it.







# CSS Preprocessor (Sass, Less, etc.)

1. In terminal: `yarn add node-sass-chokidar npm-run-all`
2. In file `package.json`:
```json
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
3. In file `.gitignore`:

```
# auto generated files (sass, less, ...)
src/**/*.css
```









# Create Node.JS server
Optional if you need a node.js server

## Use `express` to initialization

```bash
mkdir server
cd server
express
```

## Configuration

1. Rename `app.js` to `server.js`
2. Join `server.js` and `./bin/www`
3. Move `server.js` to root app
4. Insert dependencies in `package.json` (which is generated by `express`) to `package.json` in root (which is generated by `create-react-app`)
5. Remove dependencies not use (`serve-favicon`, `jade`, `ejs`, etc.)
6. Remove all file in `server`, except `routes/index.js`
7. Correct and customize file `server.js`


## Install dependencies package

`yarn`

## Install package `cors`

For development, use package `cors` to cross `localhost:3000` (client-side, is react app) to `localhost:4200` (server-side, is node express)

`yarn add cors`

## Start server-client

`yarn start` or `npm start`: start client side (react): `localhost:3000`

`node server`: start server-side (node express): `localhost:4200`









# Environment for react app
In development, because we use node server at port 4200, but client side is port 3000, so we should check out environment variable `REACT_APP_ENV` (which created in above steps) to fetch data from the server.

1. Create environment files:
In your terminal:
```bash
mkdir src/environments
cd src/environments
touch env.development.js env.production.js index.js
```
2. Edit the files as source code. `baseUrl` is url to server.







# Organize `src` react app

## Styles
Create `styles` in `src/` to contain variables, mixins, classes, common styles, or theme, etc. for your app:
	+ `_variables.scss`: declare variables for style.
	+ `_mixins.scss`: declare mixins for style
	+ `_classes.scss`: declare some util classes for style
	+ `index.scss`: import `_` files to this file, you should move `index.scss` (in root) to this folder and in `index.js`, you only import `./styles/index.css`
	+ You also override some theme (such as AdminLTE, Bootstrap, Material, Angular, Datatables, Charts, ...) with files `_` and import to `index.scss`

## Library and packages
Create `lib` in `src` to contain some library or package you use in this app, or config something with these packages (such as jQuery, Bootstrap, Font-Awesome, Ionicons, Material, ...):
	+ You also create `index.js` in `lib` to import these files in folder.
	+ In `index.js` in root, you only import by one line: `import './lib';`

## Utility service
Create `services` to contain your services for app. Guides are below sections

## Reducers - Actions
Create `actions`, `reducers` to do with `redux`. Guides are below sections

## Components
Create `components` to contain components in app:
Guides for these components is below sections

### Layout Components
- Create `layout` in `components` to contain layout of app (flow).
- Your `App.js`, `App.scss` also in here, which import `Header`, `Footer`, `Sidebar`, `Menu`, `Body`,... for Navigations and Router

### Common Components
Create `common` in `components` to contain some components which are used a lot of times. Such as `Loading`, `Modal`, `Alert`, `Notification`, `Box`, ...

### Pages Components
Create `pages` in `components` to contain some pages in app, which is route in component `Body`, such as `Home`, `Dashboard`, `Profile`, `Form`, `Terms of Service`, `Support`, `Page not found`, `Error page`,...







# jQuery

## Installation
1. In terminal: `yarn add jquery`
2. In terminal: `touch src/lib/jquery.js`
3. Edit created file by the following lines:

```js
import $ from 'jquery';

// config jquery variables for other lib use jQuery (such as bootstrap)
window.$ = $;
window.jQuery = $;
```

## How to use?
1. In `lib/index.js`, import by: `import './jquery';`
2. In `index.js` at root, `import './lib';` (if you don't have).
3. In the component, to use jQuery, you should import: `import $ from 'jquery';`
4. To use jquery function, only use from `componentDidMount()` in Lifecycle React components:
5. [View Demo here](https://huynhsamha.github.io/react-configure/jquery)
6. [View Implementation here](https://github.com/huynhsamha/react-configure/blob/master/src/components/pages/demo-jquery/DemoJquery.jsx)


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






# Bootstrap 3, 4


## Use along with jQuery
### Installation
1. In terminal: `yarn add bootstrap` (add @version you choose)
2. In terminal: `mkdir src/lib` (if you have `lib`, skip this step)
3. In terminal: `touch src/lib/bootstrap.js`
4. Edit created file as lines (In this tutorial, I use bootstrap 4):

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

### How to use?
1. In `lib/index.js`, import by: `import './bootstrap';`
2. In `index.js` at root, `import './lib';` (if you don't have).
3. In the component, you can use bootstrap 3, 4 as document available
4. View demo with component `DemoBootstrap`.
5. [View Demo here](https://huynhsamha.github.io/react-configure/bootstrap)
6. [View Implementation here](https://github.com/huynhsamha/react-configure/blob/master/src/components/pages/demo-bootstrap/DemoBootstrap.jsx)




## Use via React Component - `reactstrap`

### Installation and Usage
1. In terminal: `yarn add reactstrap@next`
2. Only import Component to use as reactstrap document
3. View demo with component `DemoReactstrap`.
4. [View Demo here](https://huynhsamha.github.io/react-configure/reactstrap)
5. [View Implementation here](https://github.com/huynhsamha/react-configure/blob/master/src/components/pages/demo-reactstrap/DemoReactstrap.jsx)

## Recommend
1. I think you should use `reactstrap` if you want to use some component in react, with event handlers.
2. If you need some style in bootstrap, you can use directly and don't need to use `jQuery`







# Font Awesome
## Add via `index.html`

You can include via file `index.html` in folder `public` via `CDN` or download and `link stylesheet`


## Add via npm package

1. In terminal: `yarn add font-awesome`
2. Create file `lib/font-awesome.js` and add line `import 'font-awesome/css/font-awesome.min.css';`
3. In `lib/index.js`, import by: `import './font-awesome';`
4. In `index.js` at root, `import './lib';` (if you don't have).








# Animate.css
## Install and configure
1. `yarn add animate.css`
2. In `lib/` create file `animate-css.js` and add `import 'animate.css';`
3. In `index.js`, also import by line `import './animate-css';`

## Custom duration time
1. Custom duration of animation by file scss config in `style/`:
2. Create file `_animate.scss` as source code
3. In `index.scss`: `@import './animate.scss';`
4. This file will create classes style to custom time duration:
```
.animated.duration-100
.animated.duration-200
...
.animated.duration-1100
.animated.duration-1200
...
.animated.duration-3000
```

## How to use
Example:
```html
<!-- In/Out default -->
<div class="animated slideInUp">ABCDEFGHIJKLMNOP</div>
<div class="animated slideOut" >ABCDEFGHIJKLMNOP</div>
<div class="animated fadeInDown" >ABCDEFGHIJKLMNOP</div>
<!-- In/Out custom duration -->
<div class="animated fadeInUp duration-500" >ABCDEFGHIJKLMNOP</div>
<div class="animated flipIn duration-1000" >ABCDEFGHIJKLMNOP</div>
<div class="animated slideOutDown duration-700" >ABCDEFGHIJKLMNOP</div>
<!-- Infinite default/custom duration -->
<div class="animated flash infinite" >ABCDEFGHIJKLMNOP</div>
<div class="animated flash infinite duration-1200" >ABCDEFGHIJKLMNOP</div>
```


## Demo
+ View demo at component `DemoAnimateCss`
+ [View Demo here](https://huynhsamha.github.io/react-configure/animate-css)
+ [View Implementation here](https://github.com/huynhsamha/react-configure/blob/master/src/components/pages/demo-animate-css/DemoAnimateCss.jsx)








# `react-router-dom` (router)
`react-router-dom` is used for route Single Page Application (SPA), not loading again page.

1. In terminal: `yarn add react-router-dom`
2. You can view implement in `components/layout/body`
3. You also view implement in `components/pages/demo-react-router`
4. The Document is available at [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

4. [View Demo here](https://huynhsamha.github.io/react-configure/react-router)
5. [View Implementation here](https://github.com/huynhsamha/react-configure/blob/master/src/components/pages/demo-react-router/DemoReactRouter.jsx)







# `react-loadable` (code-splitting)

## Installation, Usage

`react-loadable` is useful for code-splitting:
+ Lazy load components until it's called by user, it speeds up your Single Page App (SPA).
+ `create-react-app` will bundle a new script file, when it's called, it will import this file to app.

1. In terminal: `yarn add react-loadable react-router-dom`
2. Create Loading component (view components/common/loading/)
3. When use Loadable with loading component, it will add props to this component, such as:
    `{ isLoading: true, pastDelay: false, timedOut: false, error: null }`
4. View `components/page/demo-loadable-component` to sample implement.
5. Component `DemoLoadableComponent` (is not loadable) and `LoadableDemoComponent` (is loadable)

## Test Loadable Components - code-splitting
1. Inspect element in the browser
2. Choose tab network
3. Click filter JS
4. Refresh page
5. First only `bundle.js` and some js file
6. Click component which loadable, you see `*.chunk.js` is loaded. That is lazy loading component
4. [View Demo here](https://huynhsamha.github.io/react-configure/react-loadable)
5. [View Implementation here](https://github.com/huynhsamha/react-configure/blob/master/src/components/pages/demo-react-router/DemoReactRouter.jsx)









# `react-intl` - API to format date, number and string
Internationalize React apps. This library provides React components and an API to format dates, numbers, and strings, including pluralization and handling translations.

## Features
+ Display numbers with separators.
+ Display dates and times correctly.
+ Display dates relative to "now".
+ Pluralize labels in strings.
+ Support for 150+ languages.
+ Runs in the browser and Node.js.
+ Built on standards.

## Document
You can view the document here: [https://github.com/yahoo/react-intl](https://github.com/yahoo/react-intl)


## Usage in this tutorial
1. In `index.js`, we import and use provider for App component:

```jsx
import { IntlProvider } from 'react-intl';

ReactDOM.render(

  <Provider store={store}>
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  </Provider>,

  document.getElementById('root')
);
```

2. In specific component, you can import component of `react-intl` to use. You can view 1 demo about this in demo redux with format date.









# Redux: `redux, react-redux, redux-thunk`

## Installation
`yarn add redux react-redux redux-thunk`

## Usage
1. In `src`, create dir and files:
    + `actions/action-types.js`: declare action name as const
    + `actions/index.js`: declare actions for redux
    + `reducers/`: declare reducers
    + `reducers/[name].js`: declare action for a specific object.
    + `reducers/index.js`: to combine reducer with redux, after that is to createStore.

2. In `index.js`: 
    + `import { Provider } from 'react-redux';`: use Provider to store redux
    + `import { createStore, applyMiddleware } from 'redux';`: use createStore and middleware `thunk` with createStore
    + `import thunk from 'redux-thunk';`: middleware for createStore, support async function
    + `import allReducers from './reducers';`: reducers after combined
    + `const store = createStore(allReducers, applyMiddleware(thunk));`: createStore with combined reducer, and apply middleware thunk
    + You don't care about other reducers, such as `Users`

3. In `reducers/index.js`: combine reducers:
	+ In this tutorial, I demo with Items and Users (users is used for other section demos).
```js
import { combineReducers } from 'redux';

import Items from './items';
import Users from './users';

const reducers = combineReducers({
  Items,
  Users
});

export default reducers;
```

4. [View Demo here](https://huynhsamha.github.io/react-configure/redux)
5. [View Implementation here](https://github.com/huynhsamha/react-configure/blob/master/src/components/pages/demo-redux/DemoRedux.jsx)














# Fetch Data API to the server node
## Create `services` to get API
1. `mkdir src/services` (if you have not)
2. `touch db-service.js auth-service.js` (db- to get database, auth- to authentication user)
3. Example with `db-service.js`:
    + `import Env from './../environments';`: to get `baseUrl` with environments
    + `export default class DbService` as static class
    + set baseUrl to get API:
```jsx
static baseUrl() { return Env.baseUrl; }
static parseUrl(url) { return DbService.baseUrl() + url; }
```

Example `get` API:
```js
static getItems = () => {
    let url = DbService.parseUrl('/api/items');
    console.log(url);
    return fetch(url).then(res => res.json());
}
```

Example `Post` API:
```js
 static addItem = (item) => {
    let url = DbService.parseUrl('/api/items');
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    }).then(res => res.json());
}
```














# UI Awesome with React Component


## Reveal Component on scroll: use `react-reveal`

Animation to show component when user scroll to view.

### Installation
`yarn add react-reveal` 

### Support

#### Reveal with React
```
Fade
Flip
Rotate
Zoom
Bounce
Slide
Roll

left/right/top/bottom
fadeOut
```
#### Animated.css with React
```
Jump
Flash
HeadShake
Jello
Pulse
RubberBand
Shake
Spin
Swing
Tada
```

### How to use?
1. Use http://www.react-reveal.com/examples/.
2. View demo with component `DemoReactReveal`.

4. [View Demo here](https://huynhsamha.github.io/react-configure/react-reveal)
5. [View Implementation here](https://github.com/huynhsamha/react-configure/blob/master/src/components/pages/demo-react-reveal/DemoReactReveal.jsx)









## Scroll animated to target - react-scrollchor

Animation to scroll to a component when user clicks to the link.

### Installation
`yarn add react-scrollchor` 


### How to use?
1. Use https://github.com/bySabi/react-scrollchor
2. View demo with component `DemoReactScrollchor`.

4. [View Demo here](https://huynhsamha.github.io/react-configure/react-scrollchor)
5. [View Implementation here](https://github.com/huynhsamha/react-configure/blob/master/src/components/pages/demo-react-scrollchor/DemoReactScrollchor.jsx)







# Datatable with `react-table`
1. View demo for this guide here: [Demo](https://huynhsamha.github.io/react-configure/react-table)
2. View implementation in [`demo-react-table` - Implementation](https://github.com/huynhsamha/react-configure/blob/master/src/components/pages/demo-react-table/DemoReactTable.jsx)
3. In this guide, we use [`react-table`](https://react-table.js.org/#/story/readme) with features:
	+ Lightweight at 11kb (and just 2kb more for styles)
	+ Fully customizable (JSX, templates, state, styles, callbacks)
	+ Client-side & Server-side pagination
	+ Multi-sort
	+ Filters
	+ Pivoting & Aggregation
	+ Minimal design & easily themeable
	+ Fully controllable via optional props and callbacks
4. In this guide, we also use `react-select` and `react-datepicker` with `moment`. You can view docs for these packages here:
	+ [`react-select` - Demo](http://jedwatson.github.io/react-select/)
	+ [`react-select` - Docs](https://github.com/JedWatson/react-select)
	+ [`react-datepicker` - Demo](https://reactdatepicker.com/)
	+ [`react-datepicker` - Docs](https://github.com/Hacker0x01/react-datepicker)










# VS Code Extensions
I think the following extensions are helpful for development:

## Icons, Colors, View
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)

## Snippets
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
- [Bootstrap 3 Snippets](https://marketplace.visualstudio.com/items?itemName=wcwhitehead.bootstrap-3-snippets)
- [Bootstrap 4 & Font awesome snippets](https://marketplace.visualstudio.com/items?itemName=thekalinga.bootstrap4-vscode)
- [Font-awesome codes for html](https://marketplace.visualstudio.com/items?itemName=medzhidov.font-awesome-codes-html)
- [Font-awesome codes for css](https://marketplace.visualstudio.com/items?itemName=medzhidov.font-awesome-codes-css)
- [HTML Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)
- [HTML CSS support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)

## Intellisence
- [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)
- [npm Intellisence](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [SCSS IntelliSence](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [IntelliSense for CSS class names](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)

## Lint Code, Formater
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- [Sass](https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented)
- [Sass Formatter](https://marketplace.visualstudio.com/items?itemName=sasa.vscode-sass-format)
- [Beautify css/sass/scss/less](https://marketplace.visualstudio.com/items?itemName=michelemelluso.code-beautifier)


## Edit, Preview README - Markdown files
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
- [Markdown PDF](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf)































# VS Code User Settings

I think you also setting your VSCode by following steps:

1. Enter `Ctrl + Shift P`
2. Search `user settings`
3. Choose `Preferences: Open User Settings` and enter.
4. Edit your file `User Settings` by following lines:
(you can search in `Default Settings` and customize your style)

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
