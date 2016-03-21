
'use strict';

var React = require('react');

var ExampleApplication = React.createClass({
  render: function() {
    var message =
      'React has been successfully initialized at ' + this.props.initializedAt + '.';

    return <p>{message}</p>;
  }
});

window.onload = function () {
  var initStr = new Date().toString();
  React.render(<ExampleApplication initializedAt={initStr} />, document.getElementById('main'));
}

