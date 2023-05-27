const PersonList = ({persons, newFilter}) => {
    if (newFilter !== '') {
      console.log("toimii")
      const checkFilter = (person) => {
        return person.name.toLowerCase().includes(newFilter.toLowerCase())
      }
      const results = persons.filter(checkFilter)
      return (
        <ul>
          {results.map(person =>
            <li key={person.name}>
              {person.name} {person.number}
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
        </li>
        )}
      </ul>
    )
  }

export default PersonList