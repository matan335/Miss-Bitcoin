import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx';
import { BitcoinService } from '../../services/BitcoinService'
import swal from 'sweetalert2';
import UserService from '../../services/UserService'
import MovesList from '../../components/MovesList/MovesList'
import coinsImg from '../../assets/icons/coins.jpg'
import bitcoinImg from '../../assets/icons/bitcoin.png'
import './HomePage.css'

@inject('store')
@observer
class HomePage extends Component {
  UserStore = this.props.store.UserStore;

  @observable
  user = {}

  @observable
  bitcoinRate = 0

  async componentDidMount() {
    var user = this.UserStore.loginUser
    if (user) {
      this.user = user
      const bitcoinRate = await BitcoinService.getBitcoinRate(user.coins)
      this.bitcoinRate = bitcoinRate
    }
  }

  signUp() {
    this.user = {}
    this.props.history.push('/signup')
  }

  login() {
    swal({
      text: 'Please type your username',
      input: 'text'
    }).then(res => {
      var userName = res.value
      if (!userName) return
      var user = this.UserStore.login(userName)
      if (user) {
        this.user = user
      }
      else {
        swal({ text: 'user not found' })
          .then(() => this.props.history.push('/signup'))
      }
    })
  }

  logout() {
    this.UserStore.logout()
    this.user = {}
  }

  render() {
    const user = this.user
    var loginStatusBtn
    if (UserService.loadLogginUser()) {
      loginStatusBtn = <button className="btn" onClick={e => this.logout(this)}>Logout</button>
    }
    else loginStatusBtn = <button className="btn" onClick={e => this.login(this)}>Login</button>

    return user || user._id ? (
      <div className="home-page">
        <div className="user-details-container">
          {UserService.loadLogginUser() ? (<h1 className="user-name">Hello {user.name}!</h1>) : null}
          <button className="btn" onClick={e => this.signUp(this)}>Sign up</button>
          {loginStatusBtn}
          {UserService.loadLogginUser() ? (
            <div className="user-details">
              <div className="user-coins-count">
                <img className="user-detail-imgs" src={coinsImg} alt="coins" /> Coins: {this.user.coins}
              </div>
              <div className="user-coins-rate">
                <img className="user-detail-imgs" src={bitcoinImg} alt="bitcoin" /> Bitcoin Rate: {this.bitcoinRate}
              </div>
              <MovesList title="Your last 3 moves" movesList={this.UserStore.getMoveList} />
            </div>
          ) : null}
        </div>
      </div>
    ) : null
  }
}

export default HomePage;
