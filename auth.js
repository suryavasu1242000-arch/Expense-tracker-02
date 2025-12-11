// User Authentication System

function createUser(username, password, email) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    if(users.find(u => u.username === username)) {
        return false;
    }
    
    users.push({
        username: username,
        password: password,
        email: email,
        createdAt: new Date().toISOString()
    });
    
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}

function authenticateUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);
    return user !== undefined;
}

function userExists(username) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(u => u.username === username);
}

function getUser(username) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(u => u.username === username);
}
