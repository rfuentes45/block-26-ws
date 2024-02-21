// we will create a contact list 

import React from "react";
import {useState} from 'react'
import ContactRow from "./ContactRow"; // this is what we did
import { useEffect } from "react"; // this is what we did 

// hook = a code that is automatically ran when the computer/user does something 

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];
  
function ContactList (){

    const [contacts, setContacts] = useState(dummyContacts)
    console.log('Contacts:', contacts)

    useEffect(() => {
        async function  fetchContacts (){
            try { // the json syntax helped because of screenshot i took
                const response = await fetch ('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
                const json =  await response.json()
                console.log(json)
                setContacts(json) 
            } catch(e){
                console.error(e)
            }
        }
        fetchContacts()
    }, []) // [] means run once and then stop 
    return ( // the code below is what made the table appear
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
               contacts.map ((contact) => {
               return < ContactRow key= {contact.id} contact={contact} />
            })
            }
             
          </tbody>
        </table>
    ); 
}

export default ContactList