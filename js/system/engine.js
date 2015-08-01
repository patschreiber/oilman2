/**
 *
 * Event Scheduler that updates the json libraries used for game data. Data is constructed on the front end with React
 */

+function() {
  var Engine = {
    moneyTicker: function() {
      setInterval(function() {Player.stats[0].value++}, Settings.eventTickRate)
    },

    calendarTicker: function() {
      setInterval(function() {
        Settings.gameCurrentDate = new Date(Settings.gameCurrentDate.getFullYear(), Settings.gameCurrentDate.getMonth() + 1, Settings.gameCurrentDate.getDate());
      }, Settings.dateTickRate);
    },

    init: function() {
      this.moneyTicker();
      this.calendarTicker();
    }
  }

  Engine.init();
}();