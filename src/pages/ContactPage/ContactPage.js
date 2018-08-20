import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { observer, inject } from 'mobx-react'
import ContactList from '../../components/ContactList/ContactList'
import './ContactPage.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

@inject('store')
@observer
class ContactPage extends Component {
  ContactStore = this.props.store.ContactStore;
  componentDidMount() {
    this.ContactStore.getContacts()
  }

  render() {
    const { contacts } = this.ContactStore;
    return (
      <div className="contacts-page">
        <Link className="btn contacts-page-add" to={`/contact/edit`}>
          <FontAwesomeIcon icon="user-plus"/>
        </Link>
        <div className="contacts-container">
          <ContactList contacts={contacts} />
        </div>
      </div>
    );
  }
}

export default ContactPage;