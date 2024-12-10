import { useState } from 'react'
import Counter from './components/Counter'
import CounterButton from './components/Button'
import './App.css'
import ResetButton from './components/ResetButton'

const buttons = [
  { name: 'Click Me', id: Date.now() },
  { name: 'Press Me', id: 123 },
  { name: 'Hit me', id: 122 },
  { name: 'Hit me', id: 321 },
]

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <Counter counter={count} />
      <div className="btn-container">
        {buttons.map((button) => {
          return (
            <CounterButton
              key={button.id}
              addFunc={increment}
              button={button.name}
            />
          )
        })}
      </div>
      <ResetButton count={count} setCount={setCount} />
    </>
  )
}

export default App
