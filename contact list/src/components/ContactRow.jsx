// we will create a contact row 

export default function ContactRow ({contact}) {
    
    // the return is giving us back a table of info from dot notation 
    // from contactslist
    return (
        <tr>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
        </tr>
    )
}