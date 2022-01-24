const jwt = require('jsonwebtoken');
const secretKey = "bebas";

const tokenGenerator = (user) => {
    const { id, email, avatar, username, role } = user;
    const token = jwt.sign({
        id, email, avatar, username, role
    }, secretKey);

    return token;
};

const tokenVerifier = (token) => {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
};

module.exports = {
    tokenGenerator,
    tokenVerifier
};