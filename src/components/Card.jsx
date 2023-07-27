import React, { useState } from "react";


function Card({id,image,info,price,name,removeTours}) {
  const [readMore, setReadMore] = useState(false);

  const description = readMore ? info :`${info.substring(0, 200)}....`;

  function readMoreHandler() {
    setReadMore(!readMore);
  }

  return (
    <div className="card">
      <img src={image} className="image"></img>
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
          {description}
          <span className="read-more" onClick={readMoreHandler}>
            {readMore ? `show less` : `show more`}
          </span>
        </div>
        <button className="btn-red" onClick={()=>removeTours(id)}>
          Not Interested!
        </button>
      </div>
    </div>
  );
}

export default Card;
