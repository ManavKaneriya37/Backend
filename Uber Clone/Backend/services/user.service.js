const userModel = require('../models/user.model');

module.exports.createUser = async ({
    firstname, lastname, email, password
}) => {
    if(!firstname || !lastname || !email || !password) {
        throw new Error('All fields are required');
    }

    const alreadyExistUser = await userModel.findOne({ email });
    if(alreadyExistUser) {
        throw new Error('User already exist');
    }

    const user = userModel.create({
        fullname:{
            firstname, lastname
        },
        email,
        password
    })

    return user;
}