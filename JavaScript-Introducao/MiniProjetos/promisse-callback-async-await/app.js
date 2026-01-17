const { rejects } = require('assert');
const { resolve } = require('dns');
const fs = require('fs');

console.log(1);

const readFile = file => new Promise((resolve, rejects) => {
    fs.readFile(file, (err, contents) => {
        if (err){
            rejects(err);
        } else {
            resolve(contents);
        }
    })
});

const init = async(fileToRead) => {
    const contents = await readFile(fileToRead)
    return String(contents)
}
init('JavaScript-Introducao/MiniProjetos/promisse-callback-async-await/msg2.txt').then(contents => console.log(contents))

console.log(2);
console.log(3);
// readFile('JavaScript-Introducao/MiniProjetos/promisse-callback-async-await/msg1.txt').then(contents => {
//     console.log(String(contents))

//     return readFile('JavaScript-Introducao/MiniProjetos/promisse-callback-async-await/msg2.txt')
// }).then( contents => {
//     console.log(String(contents))
// });