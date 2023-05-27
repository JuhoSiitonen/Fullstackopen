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

  const updatePersons = (personObject) => {
    const objID = persons.find(person => {
      if (person.name === personObject.name) {
        return person.id
      }
    })
    phoneBook
      .update(objID.id, personObject)
      .then(response => {
        setPersons(persons.map(person => person.id !== objID.id ? person : response))
      })
  }

  const addPersons = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.map(person => person.name).includes(personObject.name)) {
      if (!window.confirm(`${personObject.name} is already added to phonebook, 
      replace the old number with a new one?`)) {
        setNewName('')
        setNewNumber('')
        return
      }
      updatePersons(personObject)
      return 
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
  
  const handlePersonDeletion = (person) => {
    if (!window.confirm(`Delete ${person.name}?`)) {
      return 
    }
    phoneBook
      .deletion(person.id)
      .then(() => {
        phoneBook
          .getAll()
          .then(response => {
          setPersons(response)
      })
    })
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
      <PersonList persons={persons} newFilter={newFilter} buttonClick={handlePersonDeletion}/>
    </div>
  )
}

export default App
