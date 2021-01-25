import React, { Component } from 'react';
import shortid from 'shortid';
import Section from './components/Section';
import Form from './components/Form';
import Contacts from './components/Contacts/Contacts.jsx';
import Filter from './components/Filter';
import listOfContact from './components/Contacts/contacts.json';

class App extends Component {
  state = {
    contacts: listOfContact,
    filter: '',
    name: '',
    number: '',
  };

  addContact = data => {
    // console.log(data);
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };
    this.setState({ name: data.name, number: data.number });
    // this.setState(prevState => ({
    //   contacts: [...prevState.contacts, contact]
    // }));

    this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase(),
    )
      ? alert(`${contact.name} is already added.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  getContacts = () => {
    // this.state.contacts;

    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.filter} onChange={this.changeFilter} />
          <Contacts
            contacts={this.getContacts()}
            onDeleteContact={this.onDeleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
