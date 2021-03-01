const fileService = require('./fileService')

exports.authenticate = (credential) => {
    //retrieve info
    const {username, email, password} = {...credential}

    //retrieve users
    const users = fileService.getFileContents('../data/users.json');

    //authorize new user
    const authUser =  users.reduce((authObj, user)=>{
        if(user.email === email){
          authObj.validEmail = false;
        }
    
        if(authObj.validEmail===true){
            authObj.user = user;
        }
             
        return authObj
    
       }, {validEmail:false, user:null})


    const auth0 = authUser.user ? {user:authUser.user}: formatErrors(authUser)
    return auth0

}

const formatErrors = function(user){
    let emailWarning = ""
  
    if(user.validEmail === false){
        emailWarning= `a user with this email already exists`
    }
  
    return {user:null, emailWarning}
  }
