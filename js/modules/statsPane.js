var StatsPane = React.createClass({
  getInitialState: function() {
    return {stats: []};
  },

  //Here, componentDidMount is a method called automatically by React when a component is rendered. http://facebook.github.io/react/docs/tutorial.html
  componentDidMount: function() {
    setInterval(this.refreshStatsPane, this.props.ticker);
  },

  refreshStatsPane: function() {
    this.setState({stats: Player.stats});
  },

  render: function() {
    return (
      <StatsList stats={this.state.stats} />
    );
  }
});

var StatsList = React.createClass({
  render: function() {
    var statNodes = this.props.stats.map(function(stat, i) {
      return (
        <Stat stat={stat} key={i} />
      );
    });
    return (
      <div className="stats">
        {statNodes}
      </div>
    );
  }
});

var Stat = React.createClass({
  render: function() {
    return (
      <div className="stat" key={this.props.key}>
        <h4>{this.props.stat.name}</h4>
        {this.props.stat.value}
      </div>
    );
  }
});

React.render(
  <StatsPane stats={Player.stats} ticker={Settings.eventTickRate} />,
  document.getElementById('stats-pane')
);