const Chatbot = require('./bot');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "you ->"
});

console.log('student chatbot');
console.log("Ask me about school,subject,grade,teacher.");
console.log("Type your message");

rl.prompt();

rl.on('line',function(message){
    const reply = Chatbot.reply(message);
    console.log('bot->'+reply);
    rl.prompt();
}).on('close',function(){
    console.log('chating ended');
    process.exit(0);
});