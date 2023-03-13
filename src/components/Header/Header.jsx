import React from 'react'
import { useSelector } from 'react-redux'

export const Header = () => {
  const [firstName, setFirstName] = React.useState('Tony')
  const [lastName, setLastName] = React.useState('Poule')

  const [editMode, setEditMode] = React.useState(false)

  const toggle = () => {
    setEditMode(!editMode)
  }

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      {editMode ? (
        <div className="header-name">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button className="edit-button">Save</button>
        </div>
      ) : null}
      <button className="edit-button" onClick={() => toggle()}>
        Edit Name
      </button>
    </div>
  )
}
