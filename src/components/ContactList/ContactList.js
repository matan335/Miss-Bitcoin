import React from 'react';
import ContactPreview from '../ContactPreview/ContactPreview'

import {Link} from 'react-router-dom';

import './ContactList.css';

const ContactList = (props) => {
  const contactsPreview = props.contacts.map(contact => {
    return (
      <li key={contact._id} className="contacts-list-item">
        <Link className="width100" to={`/contact/${contact._id}`}><ContactPreview contact={contact} /></Link>
      </li>
    )
  });

  return (
    <div className="contacts-list">
      <ul>
        {contactsPreview}
      </ul>
    </div>
  );
}

export default ContactList;
