'use strict';

import React, {Component} from 'react';

class ExampleApplication extends Component<{}, {}/*Props*/, {}/*State*/> {
  // state = {}
  
  render(): ReactElement {
    const message = 'React has been successfully initialized at ' + this.props.initializedAt + '.';
    return (<p>{message}</p>);
  }
}


window.onload = function () {
  let initStr = new Date().toString();
  React.render(<ExampleApplication initializedAt={initStr} />, document.getElementById('main'));
}

