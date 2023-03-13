import React from 'react'

export const Feature = (props) => {
  return (
    <div className="feature-item">
      <img src={props.icon} alt={props.alt} className="feature-icon" />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}
