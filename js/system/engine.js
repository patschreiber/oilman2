/**
 *
 * Event Scheduler that updates the json libraries used for game data
 */

+function() {
  var Engine = {
    moneyTicker: function() {
      setInterval(function() {Player[0].value++}, Settings.eventTickRate)
    },

    init: function() {
      this.moneyTicker();
    }
  }

  Engine.init();
}();