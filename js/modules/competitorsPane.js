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
        <Competitor data={competitor} key={i} />
      );
    });

    return (
      <div className="competitors">
      {competitors}
      </div>
    );
  }
});

var Competitor = React.createClass({
  render: function() {
    return (
      <div className="competitor">
        <h4>{this.props.data.name}</h4>
        <div className="net-worth">
          Net Worth: ${this.props.data.netWorth}
        </div>
        <div className="market-share">
          Market Share: {this.props.data.marketShare}%
        </div>
        <div className="line-break"></div>
        <Action />
      </div>
    );
  }
});

var Action = React.createClass({
  render: function() {
    return (
      <a className="purchase btn btn-lg" href="#">Buyout</a>
    );
  }
});

React.render(
  <CompetitorsPane competitors={Competitors} ticker={Settings.eventTickRate} />,
  document.getElementById('competitor-pane')
);