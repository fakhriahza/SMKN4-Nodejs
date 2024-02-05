//import seblak from "os";
import readline from "readline";

//console.log(seblak.cpus());

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

input.question('whats your name?', name => {
    console.log(`Hi ${name}!`);
    input.close();
});