import Button from './Button'

const PersonList = ({persons, newFilter, buttonClick }) => {
    if (newFilter !== '') {
      const checkFilter = (person) => {
        return person.name.toLowerCase().includes(newFilter.toLowerCase())
      }
      const results = persons.filter(checkFilter)
      return (
        <ul>
          {results.map(person =>
            <li key={person.name}>
              {person.name} {person.number} 
              <Button handleClick={buttonClick} 
              text={"delete"} id={person.id}/>
            </li>
            )}
      </ul>
      )
    }
    return (
      <ul>
      {persons.map(person =>
        <li key={person.name}>
          {person.name} {person.number}  
          <Button handleClick={buttonClick} 
          text={"delete"} id={person}/>
        </li>
        )}
      </ul>
    )
  }

export default PersonList