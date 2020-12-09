const jwt = require('jsonwebtoken');

const KEY = "i solemnly declare that i am up to no good";

exports.createToken = (user) => {
    const token = jwt.sign(user, KEY);
    return token;
}

exports.verifyToken = async (token) => {
    let user;
    jwt.verify(token, KEY, (err, decoded) => {
        console.log(err);
        if (err) {
            throw err;
        }

        user = decoded;
    });

    return user;
}