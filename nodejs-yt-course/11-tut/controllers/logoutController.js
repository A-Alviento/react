const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const fsPromises = require('fs').promises;
const path = require('path');

const handleLogout = async (req, res) => {
    // on client, also delete the accessToken
    const cookies = req.cookies;
    // is there a cookie?
    if (!cookies?.jwt) return res.sendStatus(204); // no content
    
    const refreshToken = cookies.jwt;
    // is refreshToken in db?
    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
    if (!foundUser)  {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); // delete cookie sent even if no user found
        return res.sendStatus(403)
    } 
    // delete refreshToken in db
    const otherUsers = usersDB.users.filter(person => person.refreshToken !== refreshToken);
    const currentUser = {...foundUser, refreshToken: ''}; // clear refreshToken
    usersDB.setUsers([...otherUsers], currentUser);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'users.json'),
        JSON.stringify(usersDB.users)
    );

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.sendStatus(204); //all is well and no content to send back
}

module.exports = { handleLogout }