'use strict';

import React, {Component} from 'react';

type Props = {
  name: string
};

type State = {
  greeting: ?string
};

export default class HelloWidget extends Component<{}, Props, State> {

  state = {
    greeting: "Loading..."
  }

  componentDidMount(): void {
    console.log("About to set timeout...");
    setTimeout(this._onTimeout, 1500);
  }
  
  render(): ReactElement {
    return (<p><strong>HelloWidget:</strong>&nbsp;<span>{this.state.greeting}</span></p>);
  }

  _onTimeout = () => {
    console.log("Timeout triggered!");
    this.setState({greeting: "Hello, " + this.props.name});
  }
}

