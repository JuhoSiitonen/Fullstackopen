import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = () => {
    console.log("toimii")
    setGood(good+1)
    console.log("toimii")
  }

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button onClick={handleClick} text="good" />
    </div>
  )
}

export default App
