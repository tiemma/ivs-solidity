const _ipfs = require('ipfs-api');

const ipfs = new _ipfs({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});

module.exports = ipfs;
