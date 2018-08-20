import uniqid from 'uniqid'

const Key = 'KEY_CONTACT'
const contacts = loadFromStorage() || [
  {
    "_id": "5a56640269f443a5d64b32ca",
    "picture": 'https://image.shutterstock.com/image-photo/black-circle-contact-us-telephone-260nw-280507787.jpg',
    "name": "Ochoa Hyde",
    "email": "ochoahyde@renovize.com",
    "phone": "+1 (968) 593-3824",
    "coins": "752"
  },
  {
    "_id": "5a5664025f6ae9aa24a99fde",
    "picture": 'img/contact-avatar.png',
    "name": "Hallie Mclean",
    "email": "halliemclean@renovize.com",
    "phone": "+1 (948) 464-2888",
    "coins": "7552"
  },
  {
    "_id": "5a56640252d6acddd183d319",
    "picture": 'https://image.shutterstock.com/image-photo/black-circle-contact-us-telephone-260nw-280507787.jpg',
    "name": "Parsons Norris",
    "email": "parsonsnorris@renovize.com",
    "phone": "+1 (958) 502-3495",
    "coins": "152"
  },
  {
    "_id": "5a566402ed1cf349f0b47b4d",
    "picture": 'img/contact-avatar.png',
    "name": "Rachel Lowe",
    "email": "rachellowe@renovize.com",
    "phone": "+1 (911) 475-2312",
    "coins": "782"
  },
  {
    "_id": "5a566402abce24c6bfe4699d",
    "picture": 'https://image.shutterstock.com/image-photo/black-circle-contact-us-telephone-260nw-280507787.jpg',
    "name": "Dominique Soto",
    "email": "dominiquesoto@renovize.com",
    "phone": "+1 (807) 551-3258",
    "coins": "552"
  },
  {
    "_id": "5a566402a6499c1d4da9220a",
    "picture": 'img/contact-avatar.png',
    "name": "Shana Pope",
    "email": "shanapope@renovize.com",
    "phone": "+1 (970) 527-3082",
    "coins": "2"
  },
  {
    "_id": "5a566402f90ae30e97f990db",
    "picture": 'img/contact-avatar.png',
    "name": "Faulkner Flores",
    "email": "faulknerflores@renovize.com",
    "phone": "+1 (952) 501-2678",
    "coins": "9"
  },
  {
    "_id": "5a5664027bae84ef280ffbdf",
    "picture": 'img/contact-avatar.png',
    "name": "Holder Bean",
    "email": "holderbean@renovize.com",
    "phone": "+1 (989) 503-2663",
    "coins": "7"
  },
  {
    "_id": "5a566402e3b846c5f6aec652",
    "picture": 'img/contact-avatar.png',
    "name": "Rosanne Shelton",
    "email": "rosanneshelton@renovize.com",
    "phone": "+1 (968) 454-3851",
    "coins": "792"
  },
  {
    "_id": "5a56640272c7dcdf59c3d411",
    "picture": 'img/contact-avatar.png',
    "name": "Pamela Nolan",
    "email": "pamelanolan@renovize.com",
    "phone": "+1 (986) 545-2166",
    "coins": "72"
  },
  {
    "_id": "5a5664029a8dd82a6178b15f",
    "picture": 'img/contact-avatar.png',
    "name": "Roy Cantu",
    "email": "roycantu@renovize.com",
    "phone": "+1 (929) 571-2295",
    "coins": "782"
  },
  {
    "_id": "5a5664028c096d08eeb13a8a",
    "picture": 'img/contact-avatar.png',
    "name": "Ollie Christian",
    "email": "olliechristian@renovize.com",
    "phone": "+1 (977) 419-3550",
    "coins": "792"
  },
  {
    "_id": "5a5664026c53582bb9ebe9d1",
    "picture": 'img/contact-avatar.png',
    "name": "Nguyen Walls",
    "email": "nguyenwalls@renovize.com",
    "phone": "+1 (963) 471-3181",
    "coins": "92"
  },
  {
    "_id": "5a56640298ab77236845b82b",
    "picture": 'img/contact-avatar.png',
    "name": "Glenna Santana",
    "email": "glennasantana@renovize.com",
    "phone": "+1 (860) 467-2376",
    "coins": "75"
  },
  {
    "_id": "5a56640208fba3e8ecb97305",
    "picture": 'img/contact-avatar.png',
    "name": "Malone Clark",
    "email": "maloneclark@renovize.com",
    "phone": "+1 (818) 565-2557",
    "coins": "782"
  },
  {
    "_id": "5a566402abb3146207bc4ec5",
    "picture": 'https://image.shutterstock.com/image-photo/black-circle-contact-us-telephone-260nw-280507787.jpg',
    "name": "Floyd Rutledge",
    "email": "floydrutledge@renovize.com",
    "phone": "+1 (807) 597-3629",
    "coins": "752"
  },
  {
    "_id": "5a56640298500fead8cb1ee5",
    "picture": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6t4Qj6NHhJi5cXefk_O1qNNF6s1Us9dVSl2JCFCikf77MQkd8',
    "name": "Grace James",
    "email": "gracejames@renovize.com",
    "phone": "+1 (959) 525-2529",
    "coins": "2"
  },
  {
    "_id": "5a56640243427b8f8445231e",
    "picture": 'img/contact-avatar.png',
    "name": "Tanner Gates",
    "email": "tannergates@renovize.com",
    "phone": "+1 (978) 591-2291",
    "coins": "52"
  },
  {
    "_id": "5a5664025c3abdad6f5e098c",
    "picture": 'img/contact-avatar.png',
    "name": "Lilly Conner",
    "email": "lillyconner@renovize.com",
    "phone": "+1 (842) 587-3812",
    "coins": "782"
  }
];

function sort(arr) {
  return arr.sort((a, b) => {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    }
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    }

    return 0;
  })
}

function getContacts(filterBy = {}) {
  return new Promise((resolve, reject) => {
    var contactsToReturn = contacts;
    const { term } = filterBy;
    if (term) {
      contactsToReturn = contacts.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(term) ||
          contact.phone.toLocaleLowerCase().includes(term) ||
          contact.email.toLocaleLowerCase().includes(term)
      })
    }
    resolve(sort(contactsToReturn))
  })
}

function getContactById(id) {
  return new Promise((resolve, reject) => {
    const contact = contacts.find(contact => contact._id === id)
    contact ? resolve(JSON.parse(JSON.stringify(contact))) : reject()
  })
}

function deleteContact(id) {
  return new Promise((resolve, reject) => {
    const index = contacts.findIndex(contact => contact._id === id)
    if (index !== -1) {
      contacts.splice(index, 1)
      saveToStorage(contacts)
      resolve(contacts)
    }
    else reject()
  })
}

function _updateContact(contact) {
  return new Promise((resolve, reject) => {
    const index = contacts.findIndex(c => contact._id === c._id)
    if (index !== -1) {
      contacts[index] = contact
      saveToStorage(contacts)
      resolve(contacts)
    }
    else reject()
  })
}

function _addContact(contact) {
  return new Promise((resolve, reject) => {
    contact._id = uniqid()
    contacts.push(contact)
    saveToStorage(contacts)
    if (contact._id) resolve(contacts)
    else reject()
  })
}

function saveContact(contact) {
  return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
  return {
    "picture": 'img/contact-avatar.png',
    "name": "",
    "email": "",
    "phone": "",
    "coins": "0"
  }
}

function saveToStorage(val) {
  localStorage.setItem(Key, JSON.stringify(val))
}

function loadFromStorage() {
  var isStored = localStorage.getItem(Key)
  return isStored ? JSON.parse(isStored) : null
}

export default {
  getContacts,
  getContactById,
  deleteContact,
  saveContact,
  getEmptyContact,
  saveToStorage,
  loadFromStorage
}