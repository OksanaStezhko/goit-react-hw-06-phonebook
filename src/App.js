import React, { Component } from 'react';

import Container from './components/Container';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form />
        <Filter />
        <h2>Contacts</h2>
        <ContactList />
      </Container>
    );
  }
}

export default App;
