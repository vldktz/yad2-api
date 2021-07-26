const {verify} = require('../utils/jwt')

const verifyToken = async (token) => {
    const data = verify(token)
    const expires = Date.parse(data.expires);
    const now =  Date.now();
    if (expires < now)
        throw new Error('Invalid Time');
    return data;
}

const verifySelfUpdate = async (token,userId) => {
    const data = verify(token);
    if(data.id != userId)
        throw new Error("Can't update other users");
    return true;
}
module.exports = {verifyToken}
