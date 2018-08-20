import React, { Component } from 'react';
import './TransferFund.css'
import { observer, inject } from 'mobx-react'
const swal = require('sweetalert2')

@inject('store')
@observer
class TransferFund extends Component {
  UserStore = this.props.store.UserStore;
  ContactStore = this.props.store.ContactStore;

  giveCoins = () => {
    swal({
      title: 'How many coins?',
      input: 'text'
    }).then(res => {
      var coinsToTransfer = +res.value
      if (!coinsToTransfer || isNaN(coinsToTransfer) || coinsToTransfer <= 0) return
      const user = this.UserStore.loginUser
      if (user.coins < coinsToTransfer) {
        swal({
          title: 'Dont have enough coins',
          type: 'error'
        })
        return
      }
      user.coins -= coinsToTransfer
      var isUpdated = this.UserStore.addMove(this.props.contact, coinsToTransfer, user)
      if (!isUpdated) {
        swal({
          title: 'user Had problem trasfering',
          type: 'error'
        })
      }

      this.props.contact.coins = +this.props.contact.coins
      this.props.contact.coins += coinsToTransfer
      this.ContactStore.saveContact(this.props.contact)
        .catch(err => {
          swal({
            title: 'Had problem trasfering',
            type: 'error'
          })
        })
    })
  }

  render() {
    return this.props.contact ? (
      <div className="contact-TransferFund">
        <div className="flex align-center"><h3>Transfer coins to:</h3><span>{this.props.contact.name}</span></div>
        <div className="flex align-center"><h3>Coins:</h3><span>{this.props.contact.coins}</span></div>
        <button className="btn" onClick={e => this.giveCoins()}>Transfer</button>
      </div >) : null
  }
}

export default TransferFund;
