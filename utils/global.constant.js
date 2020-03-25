module.exports = {
    /**
     * Using RSA Algorithm
     * With expiration 1day
     */
    jwt: {
        issuer: 'Naren',
        audience: 'narandhran@gmail.com',
        salt: 10,
        expiration: '1d',
        algorithm: 'RS256'
    }
};