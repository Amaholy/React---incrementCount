import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import ResetButton from './components/ResetButton'

const buttonTexts = ['firstbtn', 'secondbtn', 'thirdbtn']

function App() {
  const [count, setCount] = useState(0)
  const changeCount = () => {
    setCount(count + 1)
  }
  const resetCount = () => {
    setCount(0)
  }
  return (
    <div className="App">
      <Counter count={count} />
      {buttonTexts.map((buttonText, index) => {
        return <Button onClick={changeCount} text={buttonText} key={index} />
      })}
      {count > 0 && (
        <div>
          <ResetButton onClick={resetCount} />
        </div>
      )}
    </div>
  )
}

export default App
