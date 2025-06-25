import React from 'react'

function List() {
    const fruits = ["a","b","c","d","e"];
    const listItems = fruits.map(f => <li>{f}</li>);  
  return (
    <ol>{listItems}</ol>
  );
}

export default List