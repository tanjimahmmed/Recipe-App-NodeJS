const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
    const {username, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
};