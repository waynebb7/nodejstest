//Just a test environment for nodejs
//To test if node is installed on computer type 'node -v'
//If node is not installed then install nvm (node version manager) and then type 'nvm install node' 
//This installs the latest version of node

//To use node in console type 'node' and this will allow console.log("") to be used.
//To escape type CTRL-C twice.

//To run this index.js file type 'node index.js' or just 'node .'


//Access the external module
const myModule = require('./my-module');
const express = require('express');

console.log(myModule)

//commands in this oder were carried out
//npm init -y          this creates a package.json file in the root of the application
//npm install express  is a minimal web application framework (express is added to json dependencies)
//FYI do not touch the node_modules folder.





//try catch test
console.log("try catch finally demo")
console.log("----------------------")

try {
    console.log('try output is here')
} catch (error) {
    console.log('error thrown from catch block')
} finally {
    console.log('finally block...always outputted')
}

console.log("try throw catch finally demo")
console.log("----------------------------")

try {
    throw new (error)
    console.log('try output is here')
} catch (error) {
    console.log('error thrown from catch block')
} finally {
    console.log('finally block...always outputted')
}

//just testing what 'this' would log to the console output
// console.log(this)
// console.log(this.postMessage.name)
// console.log(this.Atomics.name)
// console.log(this.BigInt.DocumentType)
// console.log(this.CryptoKey.length)
// console.log(this.DocumentType.arguments)