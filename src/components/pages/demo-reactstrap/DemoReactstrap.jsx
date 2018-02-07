import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default class DemoReactstrap extends Component {
  constructor(props) {
    super(props);

    document.title = 'Demo Reactstrap';

    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle collapse image</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card style={{ backgroundColor: 'transparent', border: 'none' }}>
            <CardBody>
              <img
                src="https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                alt="Banner React"
                width="800"
              />
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}
