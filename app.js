// TODO
var GroceryList = (props) => (
  <ul>
    {props.list.map(listItem =>
      <GroceryListItem listItem={listItem} />
    )}
  </ul>
);

// Static prop-taking version; stateless component
// var GroceryListItem = (props) => (
//   <li>{props.item[0]}</li>
// );

class GroceryListItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hover: false
    }
  }

  onListItemHover () {
    this.setState({
      hover: !this.state.hover
    });
  }

  /*
  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
  */
  render () {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style}
        onMouseEnter={this.onListItemHover.bind(this)}
        onMouseLeave={this.onListItemHover.bind(this)}>{this.props.listItem}</li>
    );
  }
}

var App = () => (
  <div>
  <h2>Grocery List</h2>
  <GroceryList list={["Candy", "Gelbanana", "Cup Noodle"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
