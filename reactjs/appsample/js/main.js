'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HelloWidget from './view/HelloWidget';


class ExampleApplication extends Component<{}, {}/*Props*/, {}/*State*/> {

  render(): ReactElement {
    const message = 'React has been successfully initialized at ' + this.props.initializedAt + '.';
    const personName = 'Sample Application';

    return (
      <div>
        <HelloWidget name={personName} />
        <p>{message}</p>
      </div>
    );
  }
}

window.onload = function () {
  let initStr = new Date().toString();
  ReactDOM.render(<ExampleApplication initializedAt={initStr} />, document.getElementById('main'));
}

