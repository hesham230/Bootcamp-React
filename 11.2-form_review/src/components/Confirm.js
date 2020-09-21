import React from 'react';


export class Confirm extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, age, freeText }
    } = this.props;
    return (
          <div>
            <div/>
                First Name: {firstName} 
                <br/>      
                Last Name: {lastName}       
                <br/>      
                Email: {email}       
                <br/>           
                Age: {age}          
                <br/>      
                Free Text: {freeText}       
                <br/>      
            <br />

            <button onClick={this.back}>Back</button>
            <button onClick={this.continue}>Send Survey</button>
          </div>


    );
  }
}

export default Confirm;
