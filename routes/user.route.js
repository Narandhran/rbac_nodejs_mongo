const { AdminOnly, AllUsers } = require('../utils/auth.util');
const userCtrl = require('../controller/user.controller');
module.exports = app => {
    /**
     * AdminOnly
     */
    app.get('/user/list_users', AdminOnly, userCtrl.getAllUsers);


    /**
     * All Users
     */
    app.post('/user/register', userCtrl.registration);
    app.post('/user/login', userCtrl.login);
    app.post('/user/update_profile', AllUsers, userCtrl.updateUserById);
    app.get('/user/get_my_data', AllUsers, userCtrl.getUserById);
};