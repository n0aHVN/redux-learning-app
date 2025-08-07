import { useState } from "react"

// Use pre-typed versions of the React-Redux
// `useDispatch` and `useSelector` hooks
import { useAppDispatch, useAppSelector } from "@/hooks/hooks"
import type { JSX } from "react"
import styles from "./Counter.module.css"
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from "./counterSlice"

export const Counter = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount) // Redux selector to get the current count
  const status = useAppSelector(selectStatus) // Redux selector to get the current status
  const [incrementAmount, setIncrementAmount] = useState("2") // Local state for increment amount

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement()) // Redux action to decrement the count
          }}
        >
          -
        </button>
        <span aria-label="Count" className={styles.value}>
          {count}
        </span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            dispatch(increment()) // Redux action to increment the count
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={e => {
            setIncrementAmount(e.target.value) // Update local state with input value
          }}
        />
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementByAmount(incrementValue)) // Redux action to increment by a specific amount
          }}
        >
          Add Amount
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          disabled={status !== "idle"}
          onClick={() => {
            dispatch(incrementAsync(incrementValue)) // Redux action to increment asynchronously
          }}
        >
          Add Async
        </button>
        <button
          className={styles.oddButton}
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue)) // Redux action to increment if the current count is odd
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}
