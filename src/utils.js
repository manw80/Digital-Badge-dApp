const { ethers } = require("ethers");

function hex2string(hex) {
    return ethers.toUtf8String(hex);
}

function string2hex(payload) {
    return ethers.hexlify(ethers.toUtf8Bytes(payload));
}

module.exports = {
    hex2string,
    string2hex,
};
