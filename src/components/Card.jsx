/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

function Card({cardData}) {
  return <>
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="card h-100">
        <a href="#"><img className="card-img-top" src={cardData.image} alt="" width={400} height={200}/></a>
        <div className="card-body">
          <h4 className="card-title">
            <div >{cardData.title}</div>
          </h4>
          <p className="card-text">{cardData.description}</p>
        </div>
      </div>
    </div>
  </>
}

export default Card