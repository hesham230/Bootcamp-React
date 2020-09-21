import React from 'react';

class SearchBar extends React.Component{
  state = { term: '' }

  onFormSubmit = (event) => {
    event.preventDefault();
    
    this.props.onSubmit(this.state.term);
  }

  render(){
    return(
    <div>
      <form onSubmit={this.onFormSubmit}>
        <label>Get Joke By Category</label>
        <br/>
        <input type="text" 
               value={this.state.term} 
               onChange={(e)=> this.setState({ term : e.target.value })}></input>
      </form>
    </div>
    )
  }
}

export default SearchBar;