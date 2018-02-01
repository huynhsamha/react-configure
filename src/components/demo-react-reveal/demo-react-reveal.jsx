import React, { Component } from 'react';
import { Fade, Flip, Rotate, Zoom, Slide, Roll, Bounce, LightSpeed } from 'react-reveal';

const style = {
    width: '60%',
    margin: '40px auto',
    textAlign: 'justify'
}

export class DemoReactReveal extends Component {
    constructor(props) {
        super(props);

        document.title = 'React Reveal';

        let text = 'One of the best ways to learn how to do anything new (including software APIs!) is to get your hands dirty as quickly as possible. These examples will show you how to perform tasks ranging from something as simple as applying DataTables to an HTML table, right the way through to doing server-side processing with pipelining and custom plug-in functions.';

        this.repeat = [];
        for (let i = 0; i < 1000; i++) this.repeat.push(text);
    }

    render() {
        return (
            <div style={style}>
                {this.repeat.map(function (o, i) {
                    let step = 50;
                    if (i < step) {
                        return (
                            <Fade key={i}
                                left={i % 4 == 0}
                                right={i % 4 == 1}
                                top={i % 4 == 2}
                                bottom={i % 4 == 3}
                                duration={1200}>
                                <p>{o}</p>
                            </Fade>
                        );
                    }
                    else if (i < step*2) {
                        return (
                            <Rotate key={i}
                                left={i % 4 == 0}
                                right={i % 4 == 1}
                                top={i % 4 == 2}
                                bottom={i % 4 == 3}
                                duration={1200}>
                                <p>{o}</p>
                            </Rotate>
                        );
                    }
                    else if (i < step*3) {
                        return (
                            <Fade key={i}
                                left={i % 4 == 0}
                                right={i % 4 == 1}
                                top={i % 4 == 2}
                                bottom={i % 4 == 3}
                                duration={1200}>
                                <p>{o}</p>
                            </Fade>
                        );
                    }
                    else if (i < step*4) {
                        return (
                            <Zoom key={i}
                                left={i % 4 == 0}
                                right={i % 4 == 1}
                                top={i % 4 == 2}
                                bottom={i % 4 == 3}
                                duration={1200}>
                                <p>{o}</p>
                            </Zoom>
                        );
                    }
                    else if (i < step*5) {
                        return (
                            <Bounce key={i}
                                left={i % 4 == 0}
                                right={i % 4 == 1}
                                top={i % 4 == 2}
                                bottom={i % 4 == 3}
                                duration={1200}>
                                <p>{o}</p>
                            </Bounce>
                        );
                    }
                    else if (i < step*6) {
                        return (
                            <Slide key={i}
                                left={i % 4 == 0}
                                right={i % 4 == 1}
                                top={i % 4 == 2}
                                bottom={i % 4 == 3}
                                duration={1200}>
                                <p>{o}</p>
                            </Slide>
                        );
                    }
                    else if (i < step*7) {
                        return (
                            <Roll key={i}
                                left={i % 4 == 0}
                                right={i % 4 == 1}
                                top={i % 4 == 2}
                                bottom={i % 4 == 3}
                                duration={1200}>
                                <p>{o}</p>
                            </Roll>
                        );
                    }
                    else if (i < step*8){
                        return (
                            <Flip key={i}
                                left={i % 4 == 0}
                                right={i % 4 == 1}
                                top={i % 4 == 2}
                                bottom={i % 4 == 3}
                                duration={1200}>
                                <p>{o}</p>
                            </Flip>
                        );
                    }
                    else {
                        return (
                            <LightSpeed key={i}
                                left={i % 4 == 0}
                                right={i % 4 == 1}
                                top={i % 4 == 2}
                                bottom={i % 4 == 3}
                                duration={1200}>
                                <p>{o}</p>
                            </LightSpeed>
                        );
                    }
                })}
            </div>
        )
    }
}