import React, { useState } from 'react'

function Cards(props) {
  const [favorite, setFavorite] = useState(props.isFavorite)

  function handleClickFavorite() {
    setFavorite(!favorite);
  }
  return (
    <div className="cards">
      <h2 className="cardsTitle">{props.title}</h2>
      <div id="favorite" className={favorite ? "isFavorite" : "notFavorite"} onClick={handleClickFavorite} />
      <img className="cardsImg" src={props.img} />

    </div>

  )
}


export default Cards