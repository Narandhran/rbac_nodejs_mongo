var wrapError = (status, message, error) => {
    return {
        status: status || 400,
        message: message || 'No message provided',
        error: error || 'Undefined error, Contact admin!!'
    };
};

var wrapSuccess = (status, message, data, contentFound) => {
    return {
        status: status || 200,
        message: message || 'No message provided',
        data: data || {},
        contentFound: contentFound
    };
};
module.exports = {

    successHandler: async (response, message, result) => {
        let successResponse = {};
        if (result == undefined || result.length < 1) {
            response.status(200);
            successResponse = wrapSuccess(204, message, result, false);
        }
        else {
            response.status(200);
            successResponse = wrapSuccess(200, message, result, true);
        }
        response.send(successResponse).end();
    },
    errorHandler: async (response, error) => {
        let errorResponse = {};
        switch (error.name) {
            case 'ValidationError':
                response.status(422);
                errorResponse = wrapError(422, error.message, 'Validation Error');
                break;
            case 'MongoError':
                response.status(422);
                errorResponse = wrapError(422, error.message, 'Unique key error');
                break;
            case 'TokenExpiredError':
                response.status(401);
                errorResponse = wrapError(401, 'Session Expired, Please login again', error.name);
                break;
            case 'JsonWebTokenError':
                response.status(401);
                errorResponse = wrapError(401, 'Token invalid.', error.name);
                break;
            default:
                response.status(400);
                errorResponse = wrapError(400, error.message, error.name);
                break;
        }
        response.send(errorResponse).end();
    }
};