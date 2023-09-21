import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'fish',
     id:1,
    number:123456789},
    {name: 'fish2',
    id:2,
   number:123456789},
   {name: 'cat',
   id:3,
  number:123456789},
  ])
 
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newFilter, setNewFilter] = useState("")
   
  const addPerson=(event) =>{    
    event.preventDefault()    
    const noteObject = {
      name: newName,
      id:persons.length + 1,
      number: newNumber,
    }
  const existingPerson = persons.map(person=>person.name)
    if (existingPerson.includes(newName)) {
      const msg=`${newName} already exists`
      window.confirm(msg)
    }else{
    setPersons(persons.concat(noteObject))   
    setNewName('')
    setNewNumber('')
}
  }

  const personsToShow = newFilter ?
  persons.filter(persons=>persons.name.includes(newFilter)): persons

  const handleNameAdd = (event) =>{
    setNewName(event.target.value)
  } 
  const handleNumberAdd = (event) =>{
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) =>{
    setNewFilter(event.target.value)
  }
 

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter show with 
        <input value={newFilter} onChange={handleFilterChange}></input> <br/>
      </div>

      <h2>add a new</h2>
      <form onSubmit={addPerson}  >

      <div>
        name: <input value={newName} onChange={handleNameAdd} /> <br />
        number: <input value={newNumber} onChange={handleNumberAdd} /> <br />
        <button type="submit"> add </button>
     
      </div>
      </form>

      <h2>Numbers</h2>
      <div> all guys
        {persons.map(person=>
          <Person key={person.id} person={person} /> 
          )}
        </div>
        <div> filtered guys
        {personsToShow.map(person=>
          <Person key={person.id} person={person} /> 
          )}        
       
      </div>
    
    </div>
  )
}
 

export default App