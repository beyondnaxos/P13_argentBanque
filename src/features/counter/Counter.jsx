import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmmount } from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {

  const count = useSelector((state) => state.counter.value)
  const color = useSelector((state) => state.randomColor.value)
  const dispatch = useDispatch()

  const [incrementAmmount, setIncrementAmmount] = useState(0)
  const addValue = Number(incrementAmmount) || 0

  const resetAll = () => {
    setIncrementAmmount(0)
    dispatch(reset())
  }

  return (
    <div>
      <div className={styles.counterContainer} style={{backgroundColor: color }}>
        <div className={styles.counterValueContainer}>
            <button className={styles.counterBtn} aria-label="Decrement value" onClick={() => dispatch(decrement())}>-</button>
            <span className={styles.counterValue}>{count}</span>
            <button className={styles.counterBtn}  aria-label="Increment value" onClick={() => dispatch(increment())} >+</button>
        </div>
            <input className={styles.counterChangeInput} type="text" value={incrementAmmount} onChange={(e) => setIncrementAmmount(e.target.value)} />
        <div className={styles.hardBtnContainer}>
            <button className={styles.hardBtn} aria-label="reset button" onClick={() => 
              dispatch(resetAll)}>resetAll</button>
            <button className={styles.hardBtn} aria-label="add value" onClick={() => 
                dispatch(incrementByAmmount(addValue))}>Manualy add</button>
        </div>
      </div>
    </div>
  )
}
