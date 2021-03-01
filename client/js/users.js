async function listUsers() {
    const request = await fetch('/api/v1/user')
    const data = await request.json()
    const userDiv = document.querySelector('.users')

    data.forEach(user => {
        const template = `<div><p>User: ${user.username}</p>
                            <p>Email: ${user.email}</p>
                            <br><hr><br></div>`

        const elem = document.createRange().createContextualFragment(template).querySelector('div')

        userDiv.appendChild(elem)
    })
}

listUsers()