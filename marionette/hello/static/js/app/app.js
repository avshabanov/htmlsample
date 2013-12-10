(function () {
  "use strict";

  var App = new Marionette.Application();

  App.addRegions({
    mainContent: "#main-content"
  });

  App.MainContentView = Marionette.ItemView.extend({
    template: '#content-view-template'
  });

  App.on('initialize:after', function () {
    console.log("Marionette app started");

    var mainContentView = new App.MainContentView();
    App.mainContent.show(mainContentView);
  });

  App.start();
})();

