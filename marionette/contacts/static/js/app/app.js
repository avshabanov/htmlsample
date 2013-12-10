(function () {
  "use strict";

  var App = new Marionette.Application();

  App.addRegions({
    mainContent: "#main-content"
  });


  App.on('initialize:after', function () {
    console.log("Marionette app started");

    var mainContentView = new App.Views.MainContentView();
    App.mainContent.show(mainContentView);
  });

  $(document).ready(function () {
    App.start();
  });

  window.App = App;
})();

