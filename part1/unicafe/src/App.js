import { useState } from 'react'

const Statistics = (props) => {
  let good = props.good
  let neutral = props.neutral
  let bad = props.bad
  let all = good+neutral+bad
  let average = (good*1+neutral*0+bad*(-1))/all
  let pos = good/(good+neutral+bad) *100

  if (all === 0) {
    return(
      <div>
        No feedback given
      </div>
    )
  }
  
  return(
    <table>
      <tbody>
        <Statisticline text="Good" value={good} alt=""/>
        <Statisticline text="Neutral" value={neutral} alt=""/>
        <Statisticline text="Bad" value={bad} alt=""/>
        <Statisticline text="All" value={all} alt=""/>
        <Statisticline text="Average" value={average} alt=""/>
        <Statisticline text="Positive" value={pos} alt="%"/>
      </tbody>
    </table>
  )
}
const Statisticline = ({text, value, alt}) => (
  <tr>
    <td>{text}</td>
    <td>{value} {alt}</td>
  </tr>
)

const Text = ({text}) => (
  <h1>{text}</h1>
)

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

  const handleGoodClick = () => {
    setGood(good+1)
    let temp = good +1
    console.log(temp)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
    let temp = neutral +1
    console.log(temp)
  }
  const handleBadClick = () => {
    setBad(bad+1)
    let temp = bad +1
    console.log(temp)
  }

  return (
    <div>
      <Text text="Give Feedback!"/>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Text text="Statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/> 
    </div>
  )
}

export default App
