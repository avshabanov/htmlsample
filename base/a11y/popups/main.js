
/* a11y module */
var a11y = (function () {
  /** Returns true if a11y reader is active, works for Chromium/Chrome Vox extension only */
  function isReaderActive() {
    return "cvox" in window &&
      (("ChromeVox" in window.cvox && window.cvox.ChromeVox.isActive) ||
       ("Api" in window.cvox && "isChromeVoxActive" in window.cvox.Api &&
          window.cvox.Api.isChromeVoxActive()));
  }

  /** Focuses reader on the given jquery element */
  function focusReader($e) {
    if (!isReaderActive()) {
      return;
    }

    if ("cvox" in window && "Focuser" in window.cvox) {
      // workaround for certain Android devices
      for (var index in $e) {
        window.cvox.Focuser.setFocus($e[index], true);
      }
    } else {
      $e.focus();
    }
  }

  /* exports */
  return {
    isReaderActive: isReaderActive,
    focusReader: focusReader
  }
})();

/* main entry point */
(function ($) {
  function Popup() {
    var self = this;
    $("#btn-dismiss-popup").click(function () {
      self.hide();
    });

    this.$curtain = $("#popup-curtain");
    this.$box = $("#popup-box");
    this.$hidden = $("#main");
  }

  Popup.prototype = {
    show: function () {
      this.$curtain.removeClass("hide");
      this.$box.removeClass("hide");
      this.$hidden.attr("aria-hidden", true);
      a11y.focusReader(this.$box);
    },

    hide: function () {
      this.$curtain.addClass("hide");
      this.$box.addClass("hide");
      this.$hidden.attr("aria-hidden", null);
    }
  };

  var popup = new Popup();
 
  $(document).ready(function () {
    console.log("Ready");
    //popup.show();
  });
 
  $("#btn-popup").click(function () {
    popup.show();
  });

  $("#btn-popup-delay").click(function () {
    setTimeout(function () {
      popup.show();
    }, 2000);
  });

})(jQuery);

