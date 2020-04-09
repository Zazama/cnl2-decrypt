const crypto = require('crypto');

module.exports = new CNL2Decrypt;

function CNL2Decrypt() {
}

CNL2Decrypt.prototype.decrypt = function(eaw_crypted, raw_jk) {
    let decrypt = aes_decrypt(eaw_crypted, extract_jk(raw_jk));
    return get_urls(decrypt);
}

function get_urls(enc_crypt) {
    return enc_crypt.replace(/\0/g, '').replace(/\r/g, '').split("\n");
}

function extract_jk(jk) {
    let i1 = jk.indexOf("'") + 1;
    let i2 = jk.indexOf("'", i1);
    return Buffer.from(jk.substring(i1, i2), 'hex');
}

function aes_decrypt(enc, key) {
    let decipher = crypto.createDecipheriv('aes-128-cbc', key, key);
    decipher.setAutoPadding(false);
    let dec = decipher.update(enc, 'base64', 'utf8');
    let final = decipher.final('utf8');
    return dec + final;
}
