const userService = require('./fileService')

exports.getUsers = () => {
    var userArray = []
    users = userService.getFileContents('../data/users.json')
    users.forEach((user) => {
        let userObject = {username: user.username, email: user.email}
        userArray.push(userObject)
    })
    return userArray
 }

