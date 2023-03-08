import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeColor, selectColor } from './RandomColorSlice'
import styles from './RandomColor.module.css'

function RandomColor() {
  const color = useSelector((state) => state.randomColor.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className={styles.colorContainer}>
        <span className={styles.colorValue}>
          Actual Color is  <span className={styles.spanBg} style={{ color: color  }}>{color}</span>
        </span>
        <div className={styles.modifierContainer}>
          <input
            className={styles.inputColor}
            type="text"
            value={color}
            onChange={(e) => dispatch(changeColor(e.target.value))}
            />
          <input
            className={styles.inputColorSelector}
            type="color"
            value={color}
            onChange={(e) => dispatch(changeColor(e.target.value))}
            />
          <button
            className={styles.sendBtn}
            style={{ color: color  }}
            aria-label="change color"
            onClick={() => dispatch(selectColor())}
          >
            Change Color
          </button>
        </div>
      </div>
    </div>
  )
}

export default RandomColor
