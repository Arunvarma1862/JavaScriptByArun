import React from 'react'
import "./card.css"

const card = (props) => {
  return (
    <div>

        <div className="card" style={{overflow: "hidden"}}>
            <img src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=" alt=""  width={333}
            style={{border:"2px solid blue",}}/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
      
    </div>
  )
}

export default card
