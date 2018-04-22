
var uport_ = require('uport-connect');

const uport = new uport_.Connect('Blank Dude \'s new app', {
    clientId: '2ow8TV5ZyEEMLuevRcY5pvinwZEhGpvTmS1',
    rpcUrl: 'http://localhost:7545',
    signer: uport_.SimpleSigner('bf4656970a82573d3a0eb3c563e3cdf6bb0c4aeaf55eab69f4e4a5757fb91509')
});

// Request credentials to login
uport.requestCredentials({
    requested: ['name', 'phone', 'country'],
    notifications: true // We want this if we want to recieve credentials
})
    .then((credentials) => {
        // Do something
        res.send(credentials);
    });


// // Attest specific credentials
// uport.attestCredentials({
//     sub: THE_RECEIVING_UPORT_ADDRESS,
//     claim: {
//         CREDENTIAL_NAME: CREDENTIAL_VALUE
//     },
//     exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
// })
