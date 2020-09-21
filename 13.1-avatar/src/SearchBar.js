import React from 'react'

class SearchBar extends React.Component {
  render(){
  return(
    <div>
      <input type="text" placeholder="Filter Avatars" onChange={this.props.filter}></input>
    </div>
  )
  } 
}

export default SearchBar;
