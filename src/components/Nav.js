import piggy from '../porco.png';
import React from 'react';

const Nav = (props) => {


  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <div>
        <select onChange={props.handleTypeFilter} name="type" id="type">
          <option value='all'>All Pigs</option>
          <option value='name'>Filter By Name</option>
          <option value='weight'>Filter By Weight</option>
        </select>

        <select onChange={props.handleGreasedFilter} name="grased" id="grased">
          <option value='all'>All Pigs</option>
          <option value='greased'>Only Greased Pigs</option>
          <option value='not'>No Greased Pigs</option>
        </select>

      </div>
  </div>
  )
}

export default Nav

//
// Greased pigs
// {
//   props.isGreased ?
//   <input onChange={props.handleGreasedFilter} type="checkbox" checked='checked'></input>
//   :
//   <input onChange={props.handleGreasedFilter} type="checkbox" checked=''></input>
// }
