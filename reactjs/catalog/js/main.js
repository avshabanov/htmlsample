'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CatalogWidget from './view/CatalogWidget';

class CatalogApplication extends Component<{}, {}/*Props*/, {}/*State*/> {

  render(): ReactElement {
    return (
      <div>
        <h1>Catalog</h1>
        <CatalogWidget />
        <hr/>
        <p>This is an illustration how to use REST and React together.</p>
      </div>
    );
  }
}

window.onload = function () {
  let initStr = new Date().toString();
  ReactDOM.render(<CatalogApplication initializedAt={initStr} />, document.getElementById('main'));
}

