import React, { Component } from 'react';
import TransferFund from '../../components/TransferFund/TransferFund'
import MovesList from '../../components/MovesList/MovesList'
import { Link } from 'react-router-dom';
import './ContactDetails.css'
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

@inject('store')
@observer
class ContactDetails extends Component {
  ContactStore = this.props.store.ContactStore;
  UserStore = this.props.store.UserStore;

  @observable
  contact = {}

  @observable
  user = {}


  componentDidMount() {
    this.user = this.UserStore.loadLogginUser()
    const id = this.props.match.params.id;
    this.ContactStore.getContactById(id)
      .then(contact => {
        this.contact = contact
      })
      .catch(() => this.contact = null)
  }

  render() {
    var valImg = this.contact.picture;
    if (valImg) {
      if (valImg.substr(0, 4) !== 'http') valImg = '../../' + valImg;
    }
    return this.contact && this.props.store.UserStore.loginUser ? (
      <div className="contact-details">
        <div className="btn-display-action">
          <Link className="btn" to="/contact">
            <FontAwesomeIcon icon="arrow-circle-left"/>
          </Link>
          <Link className="btn" to={`/contact/edit/${this.contact._id}`}>
            <FontAwesomeIcon icon="user-edit"/>
          </Link>
        </div>
        <div className="contact-details-body">
          <img src={`${valImg}`} alt="Person-img"/>
          <div className="contact-details-row">Name: {this.contact.name}</div>
          <div className="contact-details-row">Phone: {this.contact.phone}</div>
          <div className="contact-details-row">Email: {this.contact.email}</div>
        </div>
        <TransferFund className="transfer-fund"contact={this.contact} />
        <MovesList title="Your Moves" movesList={this.props.store.UserStore.getMoveListByContact} />
      </div>
    ) : <div>User not found</div>
  }

}

export default ContactDetails;
