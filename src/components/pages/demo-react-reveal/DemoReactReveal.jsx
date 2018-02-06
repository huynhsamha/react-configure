import React, { Component } from 'react';
import { Fade, Flip, Rotate, Zoom, Slide, Roll, Bounce, LightSpeed } from 'react-reveal';

const style = {
  width: '60%',
  margin: '40px auto',
  textAlign: 'justify'
};

export default class DemoReactReveal extends Component {
  constructor(props) {
    super(props);

    document.title = 'React Reveal';

    const text = 'One of the best ways to learn how to do anything new (including software APIs!) is to get your hands dirty as quickly as possible. These examples will show you how to perform tasks ranging from something as simple as applying DataTables to an HTML table, right the way through to doing server-side processing with pipelining and custom plug-in functions.';

    this.repeat = [];
    for (let i = 0; i < 1000; i++) this.repeat.push({ id: i, text });
  }

  render() {
    return (
      <div style={style}>
        {this.repeat.map((o, i) => {
          const step = 50;
          if (i < step) {
            return (
              <Fade
                key={o.id}
                left={i % 4 === 0}
                right={i % 4 === 1}
                top={i % 4 === 2}
                bottom={i % 4 === 3}
                duration={1200}
              >
                <p>{o.text}</p>
              </Fade>
            );
          } else if (i < step * 2) {
            return (
              <Rotate
                key={o.id}
                left={i % 4 === 0}
                right={i % 4 === 1}
                top={i % 4 === 2}
                bottom={i % 4 === 3}
                duration={1200}
              >
                <p>{o.text}</p>
              </Rotate>
            );
          } else if (i < step * 3) {
            return (
              <Fade
                key={o.id}
                left={i % 4 === 0}
                right={i % 4 === 1}
                top={i % 4 === 2}
                bottom={i % 4 === 3}
                duration={1200}
              >
                <p>{o.text}</p>
              </Fade>
            );
          } else if (i < step * 4) {
            return (
              <Zoom
                key={o.id}
                left={i % 4 === 0}
                right={i % 4 === 1}
                top={i % 4 === 2}
                bottom={i % 4 === 3}
                duration={1200}
              >
                <p>{o.text}</p>
              </Zoom>
            );
          } else if (i < step * 5) {
            return (
              <Bounce
                key={o.id}
                left={i % 4 === 0}
                right={i % 4 === 1}
                top={i % 4 === 2}
                bottom={i % 4 === 3}
                duration={1200}
              >
                <p>{o.text}</p>
              </Bounce>
            );
          } else if (i < step * 6) {
            return (
              <Slide
                key={o.id}
                left={i % 4 === 0}
                right={i % 4 === 1}
                top={i % 4 === 2}
                bottom={i % 4 === 3}
                duration={1200}
              >
                <p>{o.text}</p>
              </Slide>
            );
          } else if (i < step * 7) {
            return (
              <Roll
                key={o.id}
                left={i % 4 === 0}
                right={i % 4 === 1}
                top={i % 4 === 2}
                bottom={i % 4 === 3}
                duration={1200}
              >
                <p>{o.text}</p>
              </Roll>
            );
          } else if (i < step * 8) {
            return (
              <Flip
                key={o.id}
                left={i % 4 === 0}
                right={i % 4 === 1}
                top={i % 4 === 2}
                bottom={i % 4 === 3}
                duration={1200}
              >
                <p>{o.text}</p>
              </Flip>
            );
          } else {
            return (
              <LightSpeed
                key={o.id}
                left={i % 4 === 0}
                right={i % 4 === 1}
                top={i % 4 === 2}
                bottom={i % 4 === 3}
                duration={1200}
              >
                <p>{o.text}</p>
              </LightSpeed>
            );
          }
        })}
      </div>
    );
  }
}
