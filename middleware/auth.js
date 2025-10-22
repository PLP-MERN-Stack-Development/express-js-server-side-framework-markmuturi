
const dotenv = require('dotenv');
dotenv.config();

function authenticate(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'No token provided '});
    }

    const providedToken = token.replace('Bearer ', '').trim();

    if (providedToken !== process.env.AUTH_TOKEN) {
        return res.status(403).json({ message: 'Invalid Token' });
    }

    next();
}

module.exports = authenticate;