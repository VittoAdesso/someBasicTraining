import React, { useState } from 'react'
import './style.scss'

const BeerCounterTime = () => {

    const [firstBeer, setFirstBeer] = useState(5); 

  return (
    
    <div class="beer">
    <h1>Remain {firstBeer} BEERS to be drunk</h1>
    <button onClick={() => setFirstBeer(firstBeer - 1)} >
      DRINK 👁️
    </button>
        <h2>

            {
              firstBeer ? '' : '❌❌❌❌ YOU ARE DRUNK IN OFF ❌❌❌❌'
              }

        </h2>

  </div>
  ); 
}

export default BeerCounterTime; 