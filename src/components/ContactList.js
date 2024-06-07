import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getContactId }) => {

    const deleteContactHandler = (id) => {
        getContactId(id);
    }

    const renderContacts = contacts.map(contact => {
             return (
                 <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
             );
        });

        return (
            <div className="ui celled list">{renderContacts}</div>
        )

    }

export default ContactList;