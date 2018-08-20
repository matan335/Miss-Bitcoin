const userKey = 'KEY_USER'
const logginUserKey = 'KEY_LOGGINUSER'

var users = loadFromStorage(userKey) || [
    {
        _id: _makeid(),
        name: 'Matan',
        coins: 100,
        moves: []
    },
]

function addMove(contact, amount, user) {
    user.moves.push({
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount: amount,
    })
    return updateUser(user)
}
function getMoveList() {
    var user = loadLogginUser()
    if (!user) {
        alert('userNot found')
        return null
    }
    return user.moves
}

function loadLogginUser() {
    var isFound = loadFromStorage(logginUserKey)
    return isFound ? isFound : null
}

function login(userName) {
    var userFound = users.find(user => user.name === userName)
    if (!userFound) return null
    else {
        saveToStorage(userFound, logginUserKey)
        return userFound
    }
}

function logout() {
    saveToStorage('', logginUserKey)
}

function saveUser(userToSave) {
    var isFound = users.find(user => user.name.toLowerCase() === userToSave.name.toLowerCase());
    if (isFound) return null
    users.push(userToSave)
    saveToStorage(users, userKey)
    saveToStorage(userToSave, logginUserKey)
    return true;
}

function updateUser(userToUpdate) {
    var idx = users.findIndex(user => user._id === userToUpdate._id);
    if (idx < 0) return null
    users[idx] = userToUpdate
    saveToStorage(users, userKey)
    saveToStorage(userToUpdate, logginUserKey)
    return true;
}

function getEmptyUser() {
    return {
        _id: _makeid(),
        name: '',
        coins: 100,
        moves: []
    }
}

function _makeid(length = 10) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

function saveToStorage(val, Key) {
    localStorage.setItem(Key, JSON.stringify(val))
}

function loadFromStorage(Key) {
    var isStored = localStorage.getItem(Key)
    return isStored ? JSON.parse(isStored) : null
}

export default {
    loadLogginUser,
    login,
    getEmptyUser,
    saveUser,
    logout,
    updateUser,
    addMove,
    getMoveList
}