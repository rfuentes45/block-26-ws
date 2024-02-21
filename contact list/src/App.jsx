import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
//import selectedContact './components/selectedContact'



function App() {
  const [selectedContactId, setselectedContactId] = useState(null) // this is the code we did 

  return (
    <>
      < ContactList /> 
    </>
  )
}

export default App
