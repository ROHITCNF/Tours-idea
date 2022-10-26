import React, { useState } from 'react';

function Tour(tour){
  const [readMore,setReadMore] = useState(false);
  //console.log(tour);
  const {id,image,info,price,name,removeTour} = tour;
  return (
     <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      {/* now i have to also add a button so that 
      user can click to read full info it will setReadMore the 
      readmore opposite*/}
      <p>{readMore ? info : `${info.substring(0,180)}...`}
      <button onClick={() =>setReadMore(!readMore) }>Read More</button>
      </p>
      <button className='delete-btn'
       onClick={()=> removeTour(id)}>
      Not Intrested
      </button>
      </footer>
     </article>
  );

};

export default Tour;
