import React, { Component } from 'react';
import { Fade, Zoom } from 'react-reveal';

export default class Images extends Component {

  constructor(props) {
    super(props);

    document.title = 'Images';
  }

  render() {
    const array = [];
    for (let i = 0; i < 50; i++) array.push(i);
    const text = 'One of the best ways to learn how to do anything new (including software APIs!) is to get your hands dirty as quickly as possible. These examples will show you how to perform tasks ranging from something as simple as applying DataTables to an HTML table, right the way through to doing server-side processing with pipelining and custom plug-in functions.';
    return (
      <div>
        {array.map(o =>
          (
            <div key={o}>
              <Fade duration={1200}><img src="https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg" alt="react" width="100%" /></Fade>
              <Zoom><img src="https://cdn-images-1.medium.com/max/1600/1*i3hzpSEiEEMTuWIYviYweQ.png" alt="react" width="100%" /></Zoom>
              <Fade duration={1200}><img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png" alt="react" width="100%" /></Fade>
              <Zoom><img src="https://readwrite.com/wp-content/uploads/React-components.png" alt="react" width="100%" /></Zoom>
              <Fade duration={1200}><img src="https://laracasts.com/images/series/squares/do-you-react.jpg" alt="react" width="100%" /></Fade>
              <Zoom><div><img src="https://udemy-images.udemy.com/course/480x270/1286908_1773_4.jpg" alt="react" width="100%" /></div></Zoom>
              <Fade duration={1200}><img src="https://scotch.io/wp-content/uploads/2014/10/learning-react-getting-started.png" alt="react" width="100%" /></Fade>
            </div>
          ))}
      </div>
    );
  }
}
