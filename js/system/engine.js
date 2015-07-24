+function() {
  var Engine = {
    newGame: true,

    listeners: {
      eventListener: function() {

      }
    },

    init: function() {
      $('#player-money').text(Player.money);
      $('#player-market-share').text(Player.marketShare)
    }
  }

  Engine.init();
}();