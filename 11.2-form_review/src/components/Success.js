import React from 'react';

class Success extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
          <div>
            <h4/>
            <h1>Thank You For Your Submission</h1>
          </div> 
    );
  }
}

export default Success;
