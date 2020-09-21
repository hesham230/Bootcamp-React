import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRemoveBox: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ shouldRemoveBox: true });
    }, 4000);
  }

  render() {
    return (
      <div>
        {this.state.shouldRemoveBox ? null : (
          <div>
            <Box />
            <Box size={150} />
            <Box size={50} />
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));