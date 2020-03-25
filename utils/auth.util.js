const { tokenVerification, authorize } = require('../middleware/auth');
module.exports = {
    AdminOnly: [tokenVerification, authorize(['ADMIN'])],
    AllUsers: [tokenVerification, authorize(['ADMIN', 'USER'])]
};