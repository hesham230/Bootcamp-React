import React from 'react';

export class FormPersonalDetails extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
          <div>
              <form>
               <label>Age:</label> 
              <select label="age" onChange={handleChange('age')}>
              <option>0-18</option>
              <option>18-30</option>
              <option>30-50</option>
              <option>50-120</option>
            </select>
            </form>
            <br/>

            <form>
            <label>Free Text: </label>
            <textarea
              placeholder="Free Text"
              label="freeText"
              onChange={handleChange('freeText')}
              defaultValue={values.freeText}
            />
            </form>
            <br />

            <button onClick={this.back}>Back</button>

            <button onClick={this.continue}>Continue</button>
          </div>
        
    );
  }
}

export default FormPersonalDetails;
