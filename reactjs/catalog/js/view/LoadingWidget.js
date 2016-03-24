'use strict';

import React, {Component} from 'react';

export default class LoadingWidget extends Component<{}, {}/*Props*/, {}/*State*/> {
  render(): ReactElement {
    return (
      <div className="well">
        <p>Loading...</p>
      </div>
    );
  }
}
