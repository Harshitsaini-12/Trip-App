import React from 'react'
import Card from './Card';

function Tours({tours,removeTours}) {
  return (
    <div className='container'>
        <div>
            <h2 className='title'>Plan With Harshit</h2>
        </div>
        <div className='cards'>{
            tours.map((tour)=>{
                return (
                    //clonning the tour
                    <Card key={tour.id} {...tour} removeTours={removeTours}></Card>
                )
            })
            }
        </div>
    </div>
  )
}

export default Tours;
