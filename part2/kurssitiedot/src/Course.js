const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }
  
  const Header = (props) => {
    return (
      <>
      <h2>{props.course.name}</h2>
      </>
    )
  } 
  
  const Part = ({part, exercise}) => {
    return (
      <p>{part} {exercise}</p>
    )
  }
  
  const Content = ({course}) => {
    return (
      <div>
        {course.parts.map( part =>
          <Part key={part.id} part={part.name} exercise={part.exercises} />
          )}
      </div>
    )
  }
  
  const Total = ({course}) => {
    const getSum = (total, num) => total+ num.exercises
    const total = course.parts.reduce(getSum, 0)
    return (
      <div>
        <h3>Total number of exercises {total} </h3>
      </div>
    )
  }

  export default Course