const { register, login, getAllUsers, updateUserById, getUserById } = require('../services/user.service');
const { successHandler, errorHandler } = require('../utils/handler');

/**
 * User Controller
 */
module.exports = {
    /**
     * List all users
     */
    getAllUsers: (req, res) => {
        getAllUsers(req, (err, result) => {
            if (err) errorHandler(res, err);
            successHandler(res, 'Listed users successfull', result);
        });
    },
    /**
     * User Registration
     */
    registration: (req, res) => {
        register(req, (err, result) => {
            if (err) errorHandler(res, err);
            successHandler(res, 'Registered user successfully', result);
        });
    },
    /**
     * User login
     */
    login: (req, res) => {
        login(req, (err, result) => {
            if (err) errorHandler(res, err);
            successHandler(res, 'Loged In, Kindly store the token', result);
        });
    },
    /**
     * Update display picture
     */
    updateUserById: (req, res) => {
        updateUserById(req, (err, result) => {
            if (err) errorHandler(res, err);
            successHandler(res, 'Data updated successfully', result);
        });
    },
    /**
     * Get an user details
     */
    getUserById: (req, res) => {
        getUserById(req, (err, result) => {
            if (err) errorHandler(res, err);
            console.log(result.dp);
            successHandler(res, 'Retrived user data successfully', result);
        });
    }
};