const statuses = {
    internalServerError: {
        code: 500,
        message: 'Internal Server Error',
    },
    errorParsingJson: {
        code: 407,
        message: 'Error parsing JSON',
    },
    badRequest: {
        code: 400,
        message: 'Bad Request',
    },
    errorWritingFile: {
        code: 501,
        message: 'Error writing file',
    },
    resourceCreated: {
        code: 201,
        message: 'Resource created',
    }
};

module.exports = statuses;