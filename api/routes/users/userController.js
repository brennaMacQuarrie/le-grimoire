const User = require('./User');


exports.createUser = async({ name, password, email }) => {
    try {
        const newUser = new User({
            name, password, email
        });
        const user = await newUser.save();
        return user;
    } catch(err) {
        throw err;
    }
};


exports.findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({email});
        return user;
    } catch(err) {
        throw err;
    }
}

exports.findUserById = async (id) => {
    try {
        const user = await User.findById(id);
        return {
            id: user._id,
            name: user.name,
            email: user.email
        }
    } catch(err) {
        throw err;
    }
}