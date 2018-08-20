import React from 'react';

import './MovesList.css';

const MovesList = (props) => {
  var isHomePage = window.location.pathname.substring(0, 8) === '/contact' ? false : true
  const MovesListsPreview = props.movesList.map(move => {
    return (
      <li key={move.at} className="moves-list-item">
        {isHomePage ? <h3 className="moves-list-item-to">To: {move.to}</h3> : null}
        <div className="moves-list-item-at flex">
          <div className="margin-right">
            At: 
          </div>

          <div>
            {`${new Date(move.at).toGMTString()}`}
          </div>
        </div>
        <div className="move-list-item-amount flex">
          <div className="margin-right">
            Amount: 
          </div>

          <div>
            {move.amount}
          </div>
        </div>
      </li>
    )
  });

  return (props.movesList.length > 0) ? (
    <div className="moves-list">
      <h2>{props.title}:</h2>
      <ul>
        {MovesListsPreview}
      </ul>
    </div>
  ) : null
}

export default MovesList;
