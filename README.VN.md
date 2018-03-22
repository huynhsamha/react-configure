Chào mọi người, đây là bài viết chia sẻ kinh nghiệm của bản thân mình khi tìm hiểu về công cụ create-react-app cho việc lập trình ReactJS trở nên dễ dàng hơn.
Trong bài viết này, mình sẽ nói về những điều có thể cần thiết cần phải tinh chỉnh trước khi bắt đầu 1 dự án React của các bạn, cụ thể là sử dụng [create-react-app](https://github.com/facebook/create-react-app) với các thư viện [redux](https://redux.js.org/docs/basics/UsageWithReact.html), 
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


Đây là demo về 1 số phần mình làm: [https://huynhsamha.github.io/create-react-app-config/](https://huynhsamha.github.io/create-react-app-config/)


<!-- TOC -->

- [Bắt đầu với `create-react-app`](#bắt-đầu-với-create-react-app)
- [Thiết lập biến môi trường (environment variables)](#thiết-lập-biến-môi-trường-environment-variables)
- [Post-Processing CSS](#post-processing-css)
- [CSS Preprocessor (Sass, Less etc.)](#css-preprocessor-sass-less-etc)
- [Tạo server Node.JS](#tạo-server-nodejs)
    - [Use `express` to initialization](#use-express-to-initialization)
    - [Configuration](#configuration)
    - [Install dependencies package](#install-dependencies-package)
    - [Install package `cors`](#install-package-cors)
    - [Start server-client](#start-server-client)
- [Environment cho react app](#environment-cho-react-app)
- [Cấu trúc thư mục `src` trong react app](#cấu-trúc-thư-mục-src-trong-react-app)
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
    - [Sử dụng cùng với jquery](#sử-dụng-cùng-với-jquery)
        - [Installation](#installation-1)
        - [How to use?](#how-to-use-1)
    - [Sử dụng thông qua React Component - `reactstrap`](#sử-dụng-thông-qua-react-component---reactstrap)
        - [Installation and Usage](#installation-and-usage)
- [Font Awesome](#font-awesome)
    - [Thông qua `index.html`](#thông-qua-indexhtml)
    - [Sử dụng npm package](#sử-dụng-npm-package)
- [Animate.css](#animatecss)
    - [Install and configure](#install-and-configure)
    - [Custom duration time](#custom-duration-time)
    - [How to use](#how-to-use)
    - [Demo](#demo)
- [`react-router-dom` (router)](#react-router-dom-router)
- [`react-loadable` (code-splitting)](#react-loadable-code-splitting)
    - [Installation, Usage](#installation-usage)
    - [Test Loadable Components - code-splitting](#test-loadable-components---code-splitting)
- [`react-intl` - API cho format date, number and string](#react-intl---api-cho-format-date-number-and-string)
    - [Features - các tính năng](#features---các-tính-năng)
    - [Document](#document)
    - [Usage in this tutorial](#usage-in-this-tutorial)
- [Redux: `redux, react-redux, redux-thunk`](#redux-redux-react-redux-redux-thunk)
    - [Installation](#installation-2)
    - [Usage](#usage)
- [Fetch Data API to server node](#fetch-data-api-to-server-node)
    - [Create `services` to get API](#create-services-to-get-api)
- [UI Awesome with React Component](#ui-awesome-with-react-component)
    - [Reveal Component on scroll: use `react-reveal`](#reveal-component-on-scroll-use-react-reveal)
        - [Installation](#installation-3)
        - [Support](#support)
            - [Reveal with React](#reveal-with-react)
            - [Animated.css with React](#animatedcss-with-react)
        - [How to use?](#how-to-use-2)
    - [Scroll animted to target - react-scrollchor](#scroll-animted-to-target---react-scrollchor)
        - [Installation](#installation-4)
        - [How to use?](#how-to-use-3)
- [Datatable with `react-table`](#datatable-with-react-table)
- [VS Code Extensions](#vs-code-extensions)
    - [Icons, Colors, View](#icons-colors-view)
    - [Snippets](#snippets)
    - [Intellisence](#intellisence)
    - [Lint Code, Formater](#lint-code-formater)
    - [Edit, Preview README - Markdown files](#edit-preview-readme---markdown-files)
- [VS Code User Settings](#vs-code-user-settings)

<!-- /TOC -->



# Bắt đầu với `create-react-app`
Nếu bạn mới bắt đầu sử dụng react hoặc chưa biết đến create-react-app thì mình nghĩ bạn nên sử dụng thằng này để làm quen với react, vì nó đã làm sẵn mọi thứ giúp ta, ta chỉ cần làm theo những gì ta muốn với công cụ này.

Trước tiên, bạn nên cài package `create-react-app`  mức global từ npm .
`npm install create-react-app -g` 
hoặc nếu bạn dùng Ubuntu hay một số hệ điều hành khác, nó yêu cầu quyền root, bạn thêm `sudo` vào trước lệnh để thực thi.

1. Tạo mới project: `create-react-app react-app`
2. `npm start` or `yarn start`: start môi trường dev. 
3. `npm build` or `yarn build`  build production.

Trong bài  này, mình sử dụng `yarn`, các bạn có thể sử dụng `npm` cũng được theo đúng cú pháp của `npm`.




# Thiết lập biến môi trường (environment variables)
Tạo các file lưu trữ biến môi trường, những file này theo như create-react-app nói nó sẽ nhận ra các biên được khai báo trong các file này.

1. Trong terminal tại root của project: `touch .env .env.development .env.production`
2. In `.env.development`: `REACT_APP_ENV=development`
3. In `.env.production` : `REACT_APP_ENV=production`

**Note:** chỉ mầy biến với prefix là  `REACT_APP_` thì thằng `create-react-app` mới hiểu và đọc được, còn sử dụng nó thì mình nói sau.







# Post-Processing CSS
Khi viết CSS, ta thường quan tâm đến các thuộc tính hỗ trợ trên nhiều trình duyệt . Tuy nhiên `create-react-app` sẽ lo cho ta việc này, do đó ta có thể yên tâm khi viết CSS 1 cách đơn giản.
Đây là lời trích từ document của react:

> This project setup minifies your CSS and adds vendor prefixes to it automatically through Autoprefixer so you don’t need to worry about it.







# CSS Preprocessor (Sass, Less etc.)
Nếu bạn nào đã dùng qua SASS , LESS, SCSS thì cũng biết sự lợi hại và tiện ích của những thằng này. Do đó nếu có thể tích hợp vào React thì khá thú vị.
`create-react-app` cũng hỗ trợ ta việc này, bằng cách thực hiện các bước sau:

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

Lúc này khi ta start de lên, khi có thay đổi gì ở file sass, thì nó sẽ tự build lại các file css cho ta và browser tự động được refresh. 

Còn trong file .gitignore, ta thêm các file tự động sinh ra do sass để tránh gây conflict không cần thiết khi nhiều người commit.









# Tạo server Node.JS
Nhiều lúc, ta cũng muốn sử dụng node cho thằng react :)
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
6. Remove all file in `server`, execpt `routes/index.js`
7. Correct and customize file `server.js`


## Install dependencies package

`yarn`

## Install package `cors`

Ta install package `cors` để cross từ port 3000 localhost tới port 4200 localhost.
+ `localhost:3000` (client-side, là port thằng react)
+ `localhost:4200` (server-side, là port của node express)

`yarn add cors`

## Start server-client

`yarn start` or `npm start`: start client side (react): `localhost:3000`

`node server`: start server-side (node express): `localhost:4200`









# Environment cho react app
Lúc ta phát triển (dev), ta sử dụng node ở port 4200, còn react ở port 3000, do đó để react có thể gọi request đến port 4200, ngoài sử dụng `cors` như ở trên, ta cũng cần sử dụng biên môi trường (đã thiết lập ở bước trên) để lấy dữ liệu từ server node. Ngoài ra ta cũng có thể dùng proxy (tham khảo thêm google cách này).

Như đã nói ở trên, chỉ các biến  `REACT_APP_` được khai báo trong các file tương ứng thì react mới biết được. Cụ thể ta dùng biến  `REACT_APP_ENV` để phân biệt môi trường của server, nếu là production thì không cần phinh phức.

1. Create environment files:
In your terminal:
```bash
mkdir src/environments
cd src/environments
touch env.development.js env.production.js index.js
```
2. Edit the files as source code. `baseUrl` is url to server.







# Cấu trúc thư mục `src` trong react app

## Styles
Tạo thư mục `styles` trong `src/`  để chứa các biến variables, mixins, classes, common styles, or theme, etc. cho app react:
	+ `_variables.scss`: khai báo các variables .
	+ `_mixins.scss`: khai báo các  mixins (dùng sass hoặc less)
	+ `_classes.scss`: khai báo 1 số class hữu ích.
	+ `index.scss`: import các file `_` vào file này,  để file  `index.scss` ở ngoài thư thư mục tương ứng, còn trong file `index.js`, ta import style này vào `./styles/index.css`
	+ Nếu app của bạn sử dụng theme (như AdminLTE, Bootstrap, Material, Angular, Datatables, Charts, ...), ta ghi đề những style cần với file prefix là `_`  và import vô `index.scss`

## Library and packages
Trong thư mục `src`, ta tạo thư mục `lib` để chứa các thư viện và package ta dùng trong app, chẳng hạn như jQuery, Bootstrap, Font-Awesome, Ionicons, Material, ...
+ Tạo file `index.js` trong `lib` để import các file trong thư mục này
+ Trong file `index.js` ngoài thư mục app của ta, ta import thư mục `lib` vừa tạo chỉ bằng dòng  `import './lib';`


## Utility service
Ta cũng tạo thư mục `services` để chứa các tiện ích của app. Việc triển khai thư mục này ta sẽ bàn sau.

## Reducers - Actions
Nếu ta sử dụng `redux`, ta cũng cần tạo 2 thư mục `actions` và `reducers`. Cụ thể triển khai ta sẽ bàn sau.

## Components
Ta tạo `components` để chứa các components của app, trong đó ta chia ra thành:

### Layout Components
Tạo thư mục `layout` để chứa luồng thực thi của app. Trong `layout` ta tạo hai file `App.js` và `App.scss`, ngoài ra còn chứa các thư mục  `Header`, `Footer`, `Sidebar`, `Menu`, `Body` tương ứng cho việc điều hướng app.


### Common Components
Ta tạo `common` để chứa các components dùng chung được sử dụng nhiều lần như `Loading`, `Modal`, `Alert`, `Notification`, `Box`, ...

### Pages Components
Tạo `pages` để chứa các trang của 1 single page app, như  `Home`, `Dashboard`, `Profile`, `Form`, `Terms of Service`, `Support`, `Page not found`, `Error page`,..







# jQuery

## Installation
1. In terminal: `yarn add jquery`
2. In terminal: `touch src/lib/jquery.js`: tạo file jquery config
3. COnfig file này như sau:

```js
import $ from 'jquery';

// config jquery variables for other lib use jQuery (such as bootstrap)
window.$ = $;
window.jQuery = $;
```

## How to use?
1. In `lib/index.js`, import by: `import './jquery';`
2. In `index.js` at ngoài app,  `import './lib';` (nếu như bạn chưa import).
3. Trong mỗi component, để sử dungj jquery mà react không báo lỗi, ta cần import: `import $ from 'jquery';`
4. jquery chỉ sử dụng kể từ `componentDidMount()` trong vòng đời của 1 component react:
5. [View Demo here](https://huynhsamha.github.io/create-react-app-config/jquery)
6. [View Implementation here](https://github.com/huynhsamha/create-react-app-config/blob/master/src/components/pages/demo-jquery/DemoJquery.jsx)


```javascript
  componentDidMount() {
    // jQuery should declare at here
    $(document).ready(() => {
      $('#alert').click(() => alert('This is alert be jQuery'));
    });
  }
```


## Recommend
Chỉ nên dùng jquery khi thực sự cần thiết. vì react đã hỗ trợ khá đủ.






# Bootstrap 3, 4


## Sử dụng cùng với jquery
### Installation
1. In terminal: `yarn add bootstrap` (thêm @version cho version bạn sử dụng)
2. In terminal: `mkdir src/lib` (nếu đã tạo thì bỏ qua)
3. In terminal: `touch src/lib/bootstrap.js`
4. Cấu hình file này như sau (mình đang dùng bootstrap 4):

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

### How to use?
1. In `lib/index.js`, import by: `import './bootstrap';`
2. In `index.js` at root, `import './lib';` (if you don't have).
3. Trong component, ta có thể sử dụng bootstrap 3, 4 như document của bootstrap.
4. View demo with component `DemoBootstrap`.
5. [View Demo here](https://huynhsamha.github.io/create-react-app-config/bootstrap)
6. [View Implementation here](https://github.com/huynhsamha/create-react-app-config/blob/master/src/components/pages/demo-bootstrap/DemoBootstrap.jsx)




## Sử dụng thông qua React Component - `reactstrap`
`reactstrap` là một package react cho bootstrap, tương đối ổn so với bootstrap nhưng không phải là hoàn thiện. 
Bạn có thể google package này để xem qua doc của nó.

Cũng có nhiều framework khác cho react, xây dụng sẵn các component cần thiết cho react, bạn có thể google các framewro hoặc package tương ứng.

### Installation and Usage
1. In terminal: `yarn add reactstrap@next`
2. Only import Component to use as reactstrap document
3. View demo with component `DemoReactstrap`.
4. [View Demo here](https://huynhsamha.github.io/create-react-app-config/reactstrap)
5. [View Implementation here](https://github.com/huynhsamha/create-react-app-config/blob/master/src/components/pages/demo-reactstrap/DemoReactstrap.jsx)








# Font Awesome
## Thông qua `index.html`
Ta có thể include trực tiếp thông qua `index/html` bằng cdn, hoặc download rồi include vào.

## Sử dụng npm package

1. In terminal: `yarn add font-awesome`
2. Create file `lib/font-awesome.js` and add line `import 'font-awesome/css/font-awesome.min.css';`
3. In `lib/index.js`, import by: `import './font-awesome';`
4. In `index.js` at root, `import './lib';` (if you don't have).








# Animate.css
## Install and configure
1. `yarn add animate.css`
2. In `lib/` tạo `animate-css.js` và thêm `import 'animate.css';`
3. In `index.js`, import bằng `import './animate-css';`

## Custom duration time
1. Tùy chỉnh thời gian animation bằng scss config trong  `style/`:
2. Tạo file  `_animate.scss` như source code
3. In `index.scss`: `@import './animate.scss';`
4. File này sẽ tạo ra các class sau:
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
+ [View Demo here](https://huynhsamha.github.io/create-react-app-config/animate-css)
+ [View Implementation here](https://github.com/huynhsamha/create-react-app-config/blob/master/src/components/pages/demo-animate-css/DemoAnimateCss.jsx)








# `react-router-dom` (router)
`react-router-dom` được sử dụng cho 1  Single Page Application (SPA).

1. In terminal: `yarn add react-router-dom`
2. Bạn xem implement trong `components/layout/body`
3. Cũng có thể xem ở `components/pages/demo-react-router`
4. Documents is available at [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

4. [View Demo here](https://huynhsamha.github.io/create-react-app-config/react-router)
5. [View Implementation here](https://github.com/huynhsamha/create-react-app-config/blob/master/src/components/pages/demo-react-router/DemoReactRouter.jsx)







# `react-loadable` (code-splitting)
`code-splitting` là một kỹ thuật tăng tốc độ của single page app. Nó sẽ lazy loading, tức chờ cho điến khi người dùng click vào component đó nó mới thực sự load component đó lên. Điều này giúp ứng dụng của ta load nhanh ở lần chạy đầu tiên khi người dùng chưa cần vào các component này.

create-react-app cũng hỗ trợ ta trong việc code-splitting, do đó ta không nên bỏ qua kỹ thuật này,
## Installation, Usage

`react-loadable` hỗ trợ code-splitting:
+ `create-react-app` sẽ bundle script file mới, khi được gọi, nó mới load file này.

1. In terminal: `yarn add react-loadable react-router-dom`
2. Tạo 1 Loading component (view components/common/loading/)
3. Khi sử dụng Loadable với loading component, các thuộc tính cần quan tâm cho component này:
    `{ isLoading: true, pastDelay: false, timedOut: false, error: null }`
4. View `components/page/demo-loadable-component` to sample implement.
5. Component `DemoLoadableComponent` (is not loadable) and `LoadableDemoComponent` (is loadable)

## Test Loadable Components - code-splitting
1. Inspect element trong trình duyệt
2. Chọn tab network
3. Click filter JS
4. Refresh page
5. lúc đầu chỉ thấy file `bundle.js` và 1 số file js khác.
6. Click component hỗ trợ loadable, ta sẽ thấy `*.chunk.js` is loaded. Đây là lazy loading component
4. [View Demo here](https://huynhsamha.github.io/create-react-app-config/react-loadable)
5. [View Implementation here](https://github.com/huynhsamha/create-react-app-config/blob/master/src/components/pages/demo-react-router/DemoReactRouter.jsx)









# `react-intl` - API cho format date, number and string
Internationalize React apps. Thư viện này cung cấp các React components and API để format dates, numbers, and strings, bao gồm pluralization (số nhiều) và handling translations (chuyến đổi).

## Features - các tính năng
+ Display numbers with separators.
+ Display dates and times correctly.
+ Display dates relative to "now".
+ Pluralize labels in strings.
+ Support for 150+ languages.
+ Runs in the browser and Node.js.
+ Built on standards.

## Document
You can view document at here: [https://github.com/yahoo/react-intl](https://github.com/yahoo/react-intl)


## Usage in this tutorial
1. In `index.js`, ta import và dùng provider cho App component:

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

2. Trong tứng component, ta import component of `react-intl` để sử dụng. Bạn có thể xem demo sử dụng ở demo phần redux.









# Redux: `redux, react-redux, redux-thunk`
Redux là 1 kỹ thuật ta không thể bỏ qua khi làm việc với react.
## Installation
`yarn add redux react-redux redux-thunk`

## Usage
1. In `src`, tạo:
    + `actions/action-types.js`: định nghĩa tên action
    + `actions/index.js`: định nghĩa các action
    + `reducers/`: khai báo các reducer
    + `reducers/[name].js`: định nghĩa các action cụ thể.
    + `reducers/index.js`: combine các reducer của redux, sau đó sẽ được createStore.

2. In `index.js`: 
    + `import { Provider } from 'react-redux';`: dùng Provider để store redux
    + `import { createStore, applyMiddleware } from 'redux';`: dùng createStore và middleware `thunk` cho createStore
    + `import thunk from 'redux-thunk';`: middleware cho createStore, support async function
    + `import allReducers from './reducers';`: reducers sau khi combined
    + `const store = createStore(allReducers, applyMiddleware(thunk));`: createStore với combined reducer, và apply middleware thunk
    + Hiện tại bạn không cần quan tâm reducers `Users`,  ta sẽ sử dụng cái này sau.

3. In `reducers/index.js`: combine reducers:
	+ In this tutorial, I demo with Items and Users (users is used for other section demo).
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

4. [View Demo here](https://huynhsamha.github.io/create-react-app-config/redux)
5. [View Implementation here](https://github.com/huynhsamha/create-react-app-config/blob/master/src/components/pages/demo-redux/DemoRedux.jsx)














# Fetch Data API to server node
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

Tạo animation khi người dụng scroll tới element. Khá hữu ích.

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

4. [View Demo here](https://huynhsamha.github.io/create-react-app-config/react-reveal)
5. [View Implementation here](https://github.com/huynhsamha/create-react-app-config/blob/master/src/components/pages/demo-react-reveal/DemoReactReveal.jsx)









## Scroll animted to target - react-scrollchor

Tạo animation khi người dùng click và chuyên tới 1 element nào đó.

### Installation
`yarn add react-scrollchor` 


### How to use?
1. Use https://github.com/bySabi/react-scrollchor
2. View demo with component `DemoReactScrollchor`.

4. [View Demo here](https://huynhsamha.github.io/create-react-app-config/react-scrollchor)
5. [View Implementation here](https://github.com/huynhsamha/create-react-app-config/blob/master/src/components/pages/demo-react-scrollchor/DemoReactScrollchor.jsx)







# Datatable with `react-table`
1. Xem demo: [Demo](https://huynhsamha.github.io/create-react-app-config/react-table)
2. Xem implementation trong  [`demo-react-table` - Implementation](https://github.com/huynhsamha/create-react-app-config/blob/master/src/components/pages/demo-react-table/DemoReactTable.jsx)
3. Ta dùng [`react-table`](https://react-table.js.org/#/story/readme) with features:
	+ Lightweight at 11kb (and just 2kb more for styles)
	+ Fully customizable (JSX, templates, state, styles, callbacks)
	+ Client-side & Server-side pagination
	+ Multi-sort
	+ Filters
	+ Pivoting & Aggregation
	+ Minimal design & easily themeable
	+ Fully controllable via optional props and callbacks
4. Mình cũng dùng thêm `react-select` và `react-datepicker` với `moment`. You can view docs for these package here:
	+ [`react-select` - Demo](http://jedwatson.github.io/react-select/)
	+ [`react-select` - Docs](https://github.com/JedWatson/react-select)
	+ [`react-datepicker` - Demo](https://reactdatepicker.com/)
	+ [`react-datepicker` - Docs](https://github.com/Hacker0x01/react-datepicker)










# VS Code Extensions
Làm việc với react thì không thể thiếu các extension cần thiết nếu bạn đang sử dụng visual studio code (VS Code)

Các bạn chỉ đơn giản install extension và config nếu cần thiết.

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
- [HTML CSS suppport](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)

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
Cũng nên setting một số config cho VS Code, tạo nên coding style chuẩn:

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
