import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx';
import swal from 'sweetalert2';
import './SignupPage.css'

@inject('store')
@observer
class SignupPage extends Component {
    UserStore = this.props.store.UserStore;

    @observable
    user = this.UserStore.getEmptyUser()

    handleKeyPress(userProperty, event) {
        const newUser = this.user
        newUser[userProperty] = event.target.value
        this.user = newUser
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.user.name) return;
        var isAdd = this.UserStore.saveUser(this.user)
        if (isAdd) {
            this.props.history.push('/')
        }
        else swal({ text: 'Username is already taken' })
    }



    render() {
        return (
            <div className="signup-page">
                <form className="edit-form" onSubmit={this.handleSubmit.bind(this)}>
                    <div>Please type your name to sign up</div>
                    <h4> Name:</h4>
                    <input
                        className="user-name"
                        type="name"
                        value={this.user.name}
                        onChange={event => this.handleKeyPress('name', event)}
                    />
                    <button className="btn">Sign Up</button>
                </form>


            </div>
        );
    }
}

export default SignupPage;
