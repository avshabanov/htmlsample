
'use strict';

import {Container} from 'flux/utils';
import React, {Component} from 'react';

class SimpleApp extends Component<{}, {}, State> {
  static getStores(): Array<Store> {
    return [];
  }

  static calculateState(prevState: ?State): State {
    return {
      greeting: 'Hello'
    };
  }

  render(): ?ReactElement {
    return (
      <div>
        <p>Hello from simple React/Flux + Babel app!</p>
      </div>
    );
  }
}

const TodoAppContainer = Container.create(SimpleApp);

export default SimpleApp;

