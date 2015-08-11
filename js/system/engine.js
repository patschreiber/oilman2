/**
 *
 * Event Scheduler that updates the json libraries used for game data. Data is constructed on the front end with React
 */

+function() {
  var Engine = {
    calculateMoney: function() {
      return Player.stats[0].value = Player.stats[0].value + (Player.income * Player.incomeMultiplier);
    },

    moneyTicker: function() {
      setInterval(function() {
        Engine.calculateMoney();
      }, Settings.eventTickRate)
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