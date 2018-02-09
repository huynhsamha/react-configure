import React, { Component } from 'react';
import { Fade, Zoom } from 'react-reveal';

export default class Images extends Component {

  constructor(props) {
    super(props);

    document.title = 'Text';

    const text = 'One of the best ways to learn how to do anything new (including software APIs!) is to get your hands dirty as quickly as possible. These examples will show you how to perform tasks ranging from something as simple as applying DataTables to an HTML table, right the way through to doing server-side processing with pipelining and custom plug-in functions.';

    this.repeat = [];
    for (let i = 0; i < 1000; i++) this.repeat.push({ id: i, text });
  }

  render() {
    const text = 'One of the best ways to learn how to do anything new (including software APIs!) is to get your hands dirty as quickly as possible. These examples will show you how to perform tasks ranging from something as simple as applying DataTables to an HTML table, right the way through to doing server-side processing with pipelining and custom plug-in functions.';
    return (
      <div>
        {this.repeat.map(o =>
          (o.id % 2 ?
            <Fade bottom key={o.id}><p>{o.text}</p></Fade> :
            <Zoom><p>{o.text}</p></Zoom>))
        }
      </div>
    );
  }
}
