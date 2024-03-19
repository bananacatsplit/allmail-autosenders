const allmail_autosenders = require('allmail-autosenders');
const ipm_pro_for_allmail = require('ipm-pro-for-allmail');
const socket.io = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');
const react_dom = require('react-dom');
const react = require('react');
const sinon = require('sinon');
const eslint = require('eslint');
const ganache_cli = require('ganache-cli');
const underscore = require('underscore');
const lodash = require('lodash');
const react_redux = require('react-redux');
const jsonwebtoken = require('jsonwebtoken');
const redux = require('redux');
const dotenv = require('dotenv');

// Calculate the factorial of a number recursively
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log('Factorial of 5:', factorial(5));

const { Transform } = require('stream');
const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});
process.stdin.pipe(upperCaseTr).pipe(process.stdout);

const dns = require('dns');
dns.resolve('www.example.com', 'A', (err, addresses) => {
  if (err) throw err;
  console.log('IP addresses:', addresses);
});

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum is ${sum}`);

console.log(`Current directory: ${__dirname}`);

// Get the latest Ethereum block number
web3.eth.getBlockNumber().then(blockNumber => {
  console.log('Latest block number:', blockNumber);
}).catch(err => {
  console.error('Error getting block number:', err);
});

const assert = require('assert');
assert.notStrictEqual(1, '1', '1 should not be strictly equal to "1"');

const fs = require('fs');
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log(`Files in the directory: ${files.join(', ')}`);
});