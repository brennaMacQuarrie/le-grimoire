const User = require('./User');





exports.createUser = async({ name, password, email, entries }) => {
    try {
        const newUser = new User({
            name, password, email, entries
        });
        const user = await newUser.save();
        return user;
    } catch(ex) {
        throw ex;
    }
};


exports.findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({email});
        return user;
    } catch(ex) {
        throw ex;
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
    } catch(e) {
        throw e;
    }
}