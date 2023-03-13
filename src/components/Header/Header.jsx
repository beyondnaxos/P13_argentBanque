import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentFirstname, selectCurrentLastname } from '../../features/user/userSlice'
import styles from './Header.module.css'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/user/userSlice'
import { useUpdateUserDataMutation } from '../../features/user/userApiSlice'



export const Header = () => {

  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const dispatch = useDispatch()

  const userFirstname = useSelector(selectCurrentFirstname)
  const userLastname = useSelector(selectCurrentLastname)

  const [editMode, setEditMode] = React.useState(false)

  const [updateDatas] = useUpdateUserDataMutation()


  const sendCredentials = async () => {
    const updateUserDatas = await updateDatas({firstName, lastName}).unwrap()
    dispatch(
      setCredentials({ firstname: updateUserDatas.body.firstName, lastname: updateUserDatas.body.lastName })
    )
    toggle()
  }


  const toggle = () => {
    setEditMode(!editMode)
  }

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userFirstname} {userLastname}
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
          <div className={styles.toggledButtons}>
          <button className="edit-button" onClick={() => sendCredentials()}>Save</button>
          <button className="edit-button" onClick={() => toggle()}>Cancel</button>
          </div>
        </div>
      ) : null}
      <button className="edit-button" onClick={() => toggle()}>
        Edit Name
      </button>
    </div>
  )
}
