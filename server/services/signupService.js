const fileService = require('./fileService')

exports.create = (credential) => {
    //retrieve info
    const {name, email, password} = {...credential}

    //retrieve users
    const users = fileService.getFileContents('../data/users.json');

    let notAuth = false;

    //go through the users and see if there is another user with the same email
    users.forEach(function(value, index){
        if (users[index].email === credential.email){
            notAuth = true;
        }
    })

    //if the email is unique, add the new user
    if (notAuth == false){
        fileService.writeFileContents('../data/users.json', {name, email, password})
    }

    const created = notAuth == false ? {user: name, email, password} : formatErrors(notAuth)
    return created

}

const formatErrors = function(notAuth){
    let emailWarning = ""
  
    if(notAuth){ emailWarning= `a user with this email already exists`}
  
    return {user:null, emailWarning}
  }
