var DatePane = React.createClass({
  getInitialState: function() {
    return {month: Settings.gameInitialDate.getMonth() + 1, year: Settings.gameInitialDate.getFullYear()};
  },

  componentDidMount: function() {
    setInterval(this.updateDate, this.props.ticker);
  },

  updateDate: function() {
    this.setState({month: Settings.gameCurrentDate.getMonth() + 1, year: Settings.gameCurrentDate.getFullYear()});
  },

  render: function() {
    return (
      <ul className="date-pane">
        <li>Date</li>
        <Month month={this.state.month} />
        <Year year={this.state.year} />
      </ul>
    );
  }
});

var Month = React.createClass({
  render: function() {
    return (
      <li className="month">
        {this.props.month}
      </li>
    );
  }
});

var Year = React.createClass({
  render: function() {
    return (
      <li className="year">
        {this.props.year}
      </li>
    );
  }
});

React.render(
  <DatePane gameCurrentDate={Settings.gameCurrentDate} ticker={Settings.dateTickRate} />,
  document.getElementById('date-pane-container')
);