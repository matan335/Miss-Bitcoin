import { observable, action, computed } from 'mobx';
class UserStore {

  @observable
  users = [];

  @observable
  loginUser = {};

  constructor(rootStore, apiService) {
    this.rootStore = rootStore;
    this.apiService = apiService;
    this.loadLogginUser()
  }

  loadLogginUser() {
    this.loginUser = this.apiService.loadLogginUser()
  }

  @action
  addMove(contact, coinsToTransfer, user) {
    return this.apiService.addMove(contact, coinsToTransfer, user)
  }

  @action
  getEmptyUser() {
    return this.apiService.getEmptyUser()
  }

  @action
  saveUser(user) {
    this.loginUser = user
    return  this.apiService.saveUser(user)
  }

  @action
  logout() {
    this.loginUser = {}
    return this.apiService.logout()
  }

  @action
  login(userName) {
    var loginRes = this.apiService.login(userName)
    this.loginUser = loginRes
    return loginRes
  }


  @computed
  get getMoveListByContact() {
    const selectedContact = this.rootStore.ContactStore.selectedContact;
    return this.loginUser.moves.filter(move => move.toId === selectedContact._id).reverse();
  }

  @computed
  get getMoveList() {
    return this.loginUser.moves.slice(this.loginUser.moves.length - 3, this.loginUser.moves.length).reverse()
  }

}

export default UserStore;
