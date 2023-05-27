import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonList from './components/PersonList'
import FormElement from './components/FormElement'
import phoneBook from './services/numbers'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    phoneBook
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const addPersons = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.map(person => person.name).includes(personObject.name)) {
      setNewName('')
      setNewNumber('')
      return alert(`${personObject.name} is already added to phonebook`)
    }

    phoneBook
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
      })
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <FormElement onSubmit={addPersons} 
      value={newName} onChange={handlePersonChange}
      value2={newNumber} onChange2={handleNumberChange}/>
      <h2>Numbers</h2>
      <PersonList persons={persons} newFilter={newFilter}/>
    </div>
  )
}

export default App
