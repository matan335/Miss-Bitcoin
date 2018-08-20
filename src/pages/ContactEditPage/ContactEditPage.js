import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react'
import './ContactEditPage.css'

@inject('store')
@observer
class ContactEditPage extends Component {
    ContactStore = this.props.store.ContactStore;
    constructor(props) {
        super(props);
        this.contactIMG = React.createRef();
        this.contactInput = React.createRef()
    }
    @observable
    contact = this.ContactStore.getEmptyContact()

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            this.ContactStore.getContactById(id)
                .then(contact => {
                    this.contact = contact
                })
                .catch(() => this.contact = null)
        }
    }

    handleKeyPress(contactProperty, event) {
        this.contact[contactProperty] = event.target.value
    }

    handleSubmit(event) {
        event.preventDefault();
        this.ContactStore.saveContact(this.contact)
            .then(() => this.props.history.push(`/contact/${this.contact._id}`))
    }

    deleteContact() {
        this.ContactStore.deleteContact(this.contact._id)
            .then(() => this.props.history.push('/contact'))
    }


    render() {
        var valImg = this.contact.picture;
        if (valImg) {
          if (valImg.substr(0, 4) !== 'http') valImg = '../../' + valImg;
        }
        return this.contact ? (
            <div className="ContactEditPage">

                <div className="edit-actions">
                    <Link className="btn" to={`/contact/${this.contact._id}`}>Back</Link>
                    <button className="btn" onClick={this.deleteContact.bind(this)}>Delete</button>
                </div>

                <form className="edit-form" onSubmit={this.handleSubmit.bind(this)}>
                    <button className="btn">save</button>

                    <div className="edit-options">
                        <div className="edit-options-item user-username">
                            <h4>Name:</h4>
                            <input
                                className="contact-name"
                                type="text"
                                value={this.contact.name}
                                onChange={event => this.handleKeyPress('name', event)}
                            />
                        </div>

                        <div className="edit-options-item user-email">
                            <h4>Email:</h4>
                            <input
                                className="contact-email"
                                type="email"
                                value={this.contact.email}
                                onChange={event => this.handleKeyPress('email', event)}
                            />
                        </div>

                        <div className="edit-options-item user-phone">
                            <h4>Phone:</h4>
                            <input
                                className="contact-phone"
                                type="tel"
                                value={this.contact.phone}
                                onChange={event => this.handleKeyPress('phone', event)}
                            />
                        </div>

                        <div className="edit-options-item user-picture">
                            <h4>Picture:</h4>
                            <img src={`${valImg}`} alt="Person-img" width="96" height="96" ref={this.contactIMG} />
                            <input
                                className="contact-picture"
                                type="text"
                                value={this.contact.picture}
                                onChange={event => this.handleKeyPress('picture', event)}
                                ref={this.contactInput}
                            />
                        </div>
                    </div>
                </form>
            </div>
        ) : <div>Contact not found</div>
    }
}

export default ContactEditPage;
