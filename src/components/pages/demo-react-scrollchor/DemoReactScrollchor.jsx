import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

import('./DemoReactScrollchor.css');

const timeScroll = 300;

function NavBarHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        <img src="/favicon.ico" alt="Favicon" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav text-center">
          <li className="nav-item active">
            <Scrollchor
              to="#intro" animate={{ duration: timeScroll }}
              className="nav-link"
            >
              Introduction<span className="sr-only">(current)</span>
            </Scrollchor>
          </li>
          <li className="nav-item">
            <Scrollchor
              to="#install" animate={{ duration: timeScroll }}
              className="nav-link"
            >
              Installation
            </Scrollchor>
          </li>
          <li className="nav-item">
            <Scrollchor
              to="#usage" animate={{ duration: timeScroll }}
              className="nav-link"
            >
              Usage
            </Scrollchor>
          </li>
          <li className="nav-item">
            <Scrollchor
              to="#image-react" animate={{ duration: timeScroll }}
              className="nav-link"
            >
            Image
            </Scrollchor>
          </li>
          <li className="nav-item">
            <Scrollchor
              to="#footer" animate={{ duration: timeScroll }}
              className="nav-link"
            >
             Footer
            </Scrollchor>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function SectionIntro() {
  return (
    <div className="app-section" id="intro">
      <h2>react-scrollchor</h2>
      <div style={{ marginBottom: '15px' }} />
      <p>A React component for scroll to #hash links with smooth animations. Scrollchor is a mix of Scroll and Anchor, a joke name for a useful component.</p>
      <h5>See it in action:</h5>
      <ul>
        <li>demo <a href="https://github.com/bySabi/react-scrollchor/blob/example/demo/scrollchor.webm?raw=true">video</a></li>
        <li>
          example <a href="https://bysabi.github.com/react-scrollchor/">page </a>
          and <a href="https://github.com/bySabi/react-scrollchor/tree/example">source code</a>
        </li>
      </ul>
      <h5><code>hash</code> is the <code>id</code> of a HTML tag on current page.</h5>
      <div style={{ marginBottom: '15px' }} />
      <img src="https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg" alt="Banner react" width="100%" />
    </div>
  );
}

function SectionInstall() {
  return (
    <div className="app-section" id="install">
      <h2>Installation</h2>
      <div style={{ marginBottom: '15px' }} />
      <h5>npm</h5>
      <code>npm install react-scrollchor --save</code>
      <div style={{ marginBottom: '15px' }} />
      <h5>Dependencies</h5>
      <p>User should provide their own React package</p>
      <p>fbjs is a collection of utility libraries created by React Team. It include useful modules like warning and invariant</p>
      <div style={{ marginBottom: '15px' }} />
      <img src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAkkAAAAJDcwNDZhM2VkLTkxY2QtNDBkMi1hZjY1LWM4YzQ1ZTY2YTdiMw.jpg" alt="Node+React" width="100%" />
    </div>
  );
}

function SectionUsage() {
  return (
    <div className="app-section" id="usage">
      <h2>Usage</h2>
      <div style={{ marginBottom: '15px' }} />
      <code>import Scrollchor from &apos;react-scrollchor&apos;;</code>
    </div >
  );
}

function SectionImage() {
  return (
    <div className="app-section" id="image-react">
      <h2>Image React</h2>
      <div style={{ marginBottom: '15px' }} />
      <img src="https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg" alt="Banner react" width="100%" />
      <div style={{ marginBottom: '15px' }} />
      <img src="https://www.valentinog.com/blog/wp-content/uploads/2017/12/redux-react-tutorial-beginner-2018.png" alt="Redux Banner" width="100%" />
      <div style={{ marginBottom: '15px' }} />
      <img src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAkkAAAAJDcwNDZhM2VkLTkxY2QtNDBkMi1hZjY1LWM4YzQ1ZTY2YTdiMw.jpg" alt="Node+React" width="100%" />
    </div >
  );
}

function SectionFooter() {
  return (
    <div className="app-section footer text-center" id="footer">
      <Scrollchor to="" animate={{ duration: timeScroll }}>
        Go to top page
      </Scrollchor>
    </div >
  );
}

export default class DemoReactScrollChor extends Component {

  constructor(props) {
    super(props);

    document.title = 'Demo React Scrollchor';
  }

  render() {
    return (
      <div className="DemoReactScrollchor">
        <NavBarHeader />
        <SectionIntro />
        <SectionInstall />
        <SectionUsage />
        <SectionImage />
        <SectionFooter />
      </div>
    );
  }
}
