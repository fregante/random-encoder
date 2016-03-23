'use strict';
var a = 'a'.charCodeAt(0);
var length = 'z'.charCodeAt(0) - a;

function padLeft (string, len){
    while(string.length < len) {
    	string = 0 + string;
    }
    return string;
}
function decode (val) {
    return (val.charCodeAt(0) - a) % 2;
}
function encode (odd) {
    // generate a random letter in the available range
    // but make sure it's odd or even
    return String.fromCharCode(a + Math.floor(length * Math.random() / 2) * 2 + parseInt(odd, 10));
}
exports.generate = function (number, minLength) {
    return padLeft(number.toString(2), minLength || 0).split('').map(encode).join('');
};
exports.solve = function (code) {
    return parseInt(code.split('').map(decode).join(''), 2);
};