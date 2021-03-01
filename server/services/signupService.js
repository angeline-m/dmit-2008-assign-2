const fileService = require('./fileService')
const { v4: uuidv4 } = require('uuid');

exports.create = (credential) => {
    //retrieve info
    const {username, email, password} = {...credential}

    let id = uuidv4()

    //retrieve users
    const users = fileService.getFileContents('../data/users.json');

    //validation variables
    let notAuth = false;
    let errors = {name:false, email:false, password:true, emailDuplicate:false}

    //check if form inputs are empty (we also did client-side validation for the form to ensure this doesn't happen)
    if (username.trim() == "") {
        notAuth = true
        errors.name = true
    }

    if (email.trim() == "") {
        notAuth = true
        errors.email = true
    }

    if (password.trim() == "") {
        notAuth = true
        errors.password = true
    }

    //go through the users and see if there is another user with the same email
    users.forEach(function(value, index){
        if (users[index].email === credential.email){
            notAuth = true
            errors.emailDuplicate = true
        }
    })

    //if the email is unique, add the new user
    if (notAuth == false){
        fileService.writeFileContents('../data/users.json', {username, email, password, id})
    }

    const created = notAuth == false ? {username, email, password} : formatErrors(errors)
    return created

}

const formatErrors = function(errors){
    //make a warning object
    let warning = {name:"", email:"", password:""}

    //send warning if fields are empty
    if(errors.name){
        warning.name = `name is required`
    }
    if(errors.email){
        warning.email = `email is required`
    }
    if(errors.password){
        warning.password = `password is required`
    }
    //send warning if a user has the same email
    if(errors.emailDuplicate){
        email = `a user with this email already exists`
    }
  
    return {user:null, warning}
  }
  
