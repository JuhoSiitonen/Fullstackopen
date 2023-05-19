const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
} 

const Part = (props) => {
  return (
    <>
    <p>{props.part} {props.exercise}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0]} exercise={props.exercise[0]} />
      <Part part={props.part[1]} exercise={props.exercise[1]} />
      <Part part={props.part[2]} exercise={props.exercise[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [part1, part2, part3]
  const exercises = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course} />
      <Content part={parts} exercise={exercises} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App
