import React from 'react'
import './FlipCard.css'
function FlipCard({ background, option,price}) {
  return (
    <div className='flip-card'>
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <img src={background} alt="logo" className='flip-card-front_top'/>
                <ul>
                    <li>{option.days}</li>
                    <li>{option.peoples}</li>
                    <li>{option.guides}</li>
                    <li>{option.acomdation}</li>
                </ul>
                
            </div>
            <div className="flip-card-back">
                <span className="flip-card-back_only">ONLY</span>
                <span className="flip-card-back_price">{price}</span>
                <button className='flip-card-back_btn'> <i className="fal fa-bags-shopping"></i> BOOK NOW</button>
            </div>
        </div>
    </div>
  )
}

export default FlipCard