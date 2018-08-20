import { observable, action } from 'mobx';
class ContactStore {
    @observable
    contacts = [];

    @observable
    selectedContact = {};

    constructor(rootStore, apiService) {
        this.rootStore = rootStore;
        this.apiService = apiService;
    }

    @action
    saveContact(contact) {
        return this.apiService.saveContact(contact)
            .then(contacts => this.contacts = contacts)
    }

    @action
    deleteContact(id) {
        return this.apiService.deleteContact(id)
            .then(contacts => this.contacts = contacts)
    }

    @action
    getContactById(id) {
        return this.apiService.getContactById(id).then(
            contact => {
                this.selectedContact = contact;
                return contact;
            }
        )
    }

    @action
    getEmptyContact() {
        return this.apiService.getEmptyContact()
    }

    @action
    getContacts() {
        this.apiService.getContacts().then(contacts => {
            this.contacts = contacts;
        });
    }
}
export default ContactStore;
