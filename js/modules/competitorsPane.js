var CompetitorsPane = React.createClass({
  getInitialState: function() {
    return {competitors: []};
  },

  componentDidMount: function() {
    setInterval(this.refreshCompetitorsPane, this.props.ticker);
  },

  refreshCompetitorsPane: function() {
    this.setState({competitors: Competitors});
  },

  render: function() {
    return (
      <CompetitorList competitors={this.state.competitors} />
    );
  }
});

var CompetitorList = React.createClass({
  render: function() {
    var competitors = this.props.competitors.map(function(competitor, i) {
      return (
        <Competitor key={i} />
      );
    });

    return (
      <div>
      {competitors}
      </div>
    );
  }
});

var Competitor = React.createClass({
  render: function() {
    return (
      <div className="competitor">

      </div>
    );
  }
});

React.render(
  <CompetitorsPane competitors={Competitors} ticker={Settings.eventTickRate} />,
  document.getElementById('competitor-pane')
);