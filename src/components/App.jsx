import { useState, useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import styles from "./App.module.css";

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    let storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])

  const handleAddContact = contact => {
    setContacts([...contacts, contact]);
  };

  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };

  const handleDeleteContact = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm addContact={handleAddContact} contacts={contacts} />
      <h2 className={styles.title}>Contacts</h2>
      <Filter changeFilter={handleChangeFilter} />
      <ContactList
        contacts={
          filter.length > 0
            ? contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
            : contacts
        }
        onDelete={handleDeleteContact}
      />
    </div>
  );
};
