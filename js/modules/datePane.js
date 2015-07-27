var DatePane = React.createClass({
  render: function() {
    return (
      <ul className="date-pane">
        <Month />
        <Year />
      </ul>
    );
  }
});

var Month = React.createClass({
  render: function() {
    return (
      <li className="month">
        Jan
      </li>
    );
  }
});

var Year = React.createClass({
  render: function() {
    return (
      <li className="year">
        1886
      </li>
    );
  }
});

React.render(
  <DatePane />,
  document.getElementById('date-pane-container')
);