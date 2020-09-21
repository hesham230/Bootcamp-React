import React from 'react';

class List extends React.Component{
  render(){
    const{usernames} = this.props
  return(
    <div>
      {usernames.map(user => 
        <div key={user.id}><p>{user.name}</p><img src={user.image}></img><p>{user.email}</p><hr></hr></div>)}
    </div>
   )
  }
}

export default List;