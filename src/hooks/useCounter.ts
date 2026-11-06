import { useState } from 'react'

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  function increment() {
    setCount((currentCount) => currentCount + 1)
  }

  return { count, increment }
}
