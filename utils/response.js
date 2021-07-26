'use strict'

const returnResponse = (statusCode, data, message,httpStatusCode) => ({
    statusCode,
    data,
    message,
    httpStatusCode
});

const errorHandler = (err,res) => {
    const {HTTP_STATUS_CODES} =require('./consts');
    if (err.httpStatusCode)
        return res.status(err.httpStatusCode).send({statusCode : err.statusCode , data : err.data , message: err.message});
    console.error({stack : err.stack},err.message || 'Server Error')
    return res.status(HTTP_STATUS_CODES.SERVERERROR).send({statusCode : 500 , data : {} , message: err.message || 'Server Error'});
}

const responseHandler = (returnResponseData,res) => {
    const {HTTP_STATUS_CODES} =require('./consts');
    if (returnResponseData?.data)
        return res.status(HTTP_STATUS_CODES.OK).send(returnResponseData);
    if (typeof returnResponseData === 'object') {
        return res.status(HTTP_STATUS_CODES.OK).send(returnResponse(0,returnResponseData,'OK'));
    }

    return res.status(HTTP_STATUS_CODES.OK).send(returnResponse(0,{},'OK'));
}

module.exports = {returnResponse,errorHandler,responseHandler}
