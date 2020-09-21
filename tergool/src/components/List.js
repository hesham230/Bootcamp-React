import React from 'react';

const List = (props) => {
  const category = props.categories.map((cat)=> {
    return (
      <div key={category.id}> 
        {cat.data} 
      </div>
    )
  })

  return(
    <div>{category}</div>
  )
}

export default List;