const { verify } = require('../services/custom/jwt.service');
const { errorHandler } = require('../utils/handler');
module.exports = {
    tokenVerification: (req, res, next) => {

        if (!req.headers.authorization)
            errorHandler(res, new Error('No token found'));
        try {
            req.verifiedToken = verify(req.headers.authorization);
            next();
        } catch (err) {
            errorHandler(res, err);
        }
    },

    authorize: (roles = []) => {
        if (typeof roles === 'string')
            roles = [roles];
        return [
            (req, res, next) => {
                let token = req.verifiedToken;
                if (!roles.some(r => token.role.indexOf(r) >= 0))
                    errorHandler(res, new Error('Unauthorized, Access denied.'));
                next();
            }
        ];
    }
};