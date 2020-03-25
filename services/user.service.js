const { User } = require('../models/user');
const { generatePassword, encrypt, validate } = require('./custom/crypto.service');
const { sign } = require('./custom/jwt.service');

/**
 * User Service
 */

module.exports = {

    register: async (request, cb) => {
        let userObj = request.body;
        // let plainPassword = generatePassword();
        userObj.password = encrypt(userObj.password);
        isAdmin = await User.find({}).lean();
        userObj.role = isAdmin.length > 0 ? 'USER' : 'ADMIN';
        User.create(userObj, (err, result) => {
            cb(err, result);
        });
    },

    login: async (request, cb) => {
        let userObj = request.body;
        let isUser = await User.findOne({ 'username': userObj.username, 'active': true }).lean();
        if (isUser) {
            if (validate(userObj.password, isUser.password)) {
                try {
                    let token = sign({
                        _id: isUser._id,
                        username: isUser.username,
                        role: isUser.role,
                        fname: isUser.fname
                    });
                    cb(null, token);
                } catch (e) { cb(e); };
            } else { cb(new Error('Incorrect Password')); }
        } else { cb(new Error('Incorrect Username')); }
    },
    getUserById: async (request, cb) => {
        User
            .findById(request.verifiedToken._id)
            .lean()
            .exec((err, result) => {
                cb(err, result);
            });
    }
    ,
    getAllUsers: async (request, cb) => {
        User
            .find({})
            .lean()
            .exec((err, result) => {
                cb(err, result);
            });
    },
    updateUserById: async (request, cb) => {
        let userObj = request.body;
        if (userObj.password) userObj.password = encrypt(userObj.password);
        User
            .findByIdAndUpdate(request.verifiedToken._id, userObj, { new: true })
            .exec((err, result) => {
                cb(err, result);
            });
    }
};