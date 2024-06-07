import './App.css';
import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid'; // npm install uuidv4 used to generate unique id for each contact
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

    const LOCAL_STORAGE_KEY = "contacts";

    // useState allows us to dynamically update the value of a component

    const [contacts, setContacts] = useState([])

    // Create handler to add contacts
    const addContactHandler = (contact) => {

        setContacts([...contacts, {id: uuid(), ...contact}]);
    };

    // Create handler to remove contacts

    const deleteContactHandler = (id) => {

        // Create a new contact list without the id to be deleted

        const newContactList = contacts.filter(contact => {
            return contact.id !== id;
        });

        setContacts(newContactList);
    }

    // useEffect renders a component again whenever its value changes

    // Local storage saves the changes in the local storage

    useEffect(() => {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)); // json.dumps
    }, [contacts]);

    // Allows us to fetch data from the local storage when the page is reloaded

     useEffect(() => {
                const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); // json.loads
                if (retrievedContacts) setContacts(retrievedContacts);
    }, []);

  return (
    <div className="ui container">
        <Header></Header>
        <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={deleteContactHandler} />
    </div>
  );
}

export default App;
