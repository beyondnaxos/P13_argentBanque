import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param {*} props 
 * @returns  {JSX.Element} A JSX Feature component.
 * @component
 * @name Feature
 * @description A component that displays a feature item with an icon, title, and text.
 * @example <Feature />
 */

export const Feature = (props) => {
  return (
    <div className="feature-item">
      <img src={props.icon} alt={props.alt} className="feature-icon" />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

Feature.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
