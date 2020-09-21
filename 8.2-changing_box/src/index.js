import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.colors = ["green", "blue", "pink", "purple"];
    this.state = {
      colorIndex: 0,
      isCircle: false,
      renderChild: true,
    };
  }
  updateColor() {
    const newIndex = this.state.colorIndex + 1;
    this.setState({ colorIndex: newIndex });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.colorIndex >= 6 && !prevState.isCircle) {
      this.setState({ isCircle: true });
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.updateColor.bind(this), 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let style = this.colors[this.state.colorIndex % this.colors.length];
    style += this.state.isCircle ? " circle" : "";
    return (
      <div>
        {" "}
        <Box style={style}></Box>{" "}
      </div>
    );
  }
}

function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
  setTimeout(function () {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }, 5000);
}

render();

ReactDOM.render(<App />, document.querySelector('#root'));

