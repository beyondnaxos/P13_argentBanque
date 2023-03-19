import React from 'react'
import { useSelector } from 'react-redux'
import {
  selectCurrentFirstname,
  selectCurrentLastname,
} from '../../features/user/userSlice'
import styles from './Header.module.css'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/user/userSlice'
import { useUpdateUserDataMutation } from '../../features/user/userApiSlice'

/** 
  @component
  @name Header
  @description A component that displays the user's firstname and lastname.
  @example <Header />
  @returns {JSX.Element} A JSX Header component.
*/

export const Header = () => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const dispatch = useDispatch()

  const userFirstname = useSelector(selectCurrentFirstname)
  const userLastname = useSelector(selectCurrentLastname)

  const [editMode, setEditMode] = React.useState(false)

  const [updateDatas] = useUpdateUserDataMutation()

  const sendCredentials = async () => {
    if (firstName === '' || lastName === '') {
      return alert('Please fill all the fields')
    }
    const updateUserDatas = await updateDatas({ firstName, lastName }).unwrap()
    dispatch(
      setCredentials({
        firstname: updateUserDatas.body.firstName,
        lastname: updateUserDatas.body.lastName,
      })
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
        {userFirstname} {" "}{userLastname}
      </h1>
      {editMode ? (
        <div className={styles.editContainer}>
          <div className={styles.inputs}>
            <input
              className={styles.input}
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required={true}
              />
            <input
              className={styles.input}
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required={true}             
            />
          </div>
          <div className={styles.toggledButtons}>
            <button className={styles.editButton} onClick={() => sendCredentials()}>
              Save
            </button>
            <button className={styles.editButton}  onClick={() => toggle()}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}
      {!editMode ? (
        <button className="edit-button" onClick={() => toggle()}>
          Edit Name
        </button>
      ) : null}
    </div>
  )
}
