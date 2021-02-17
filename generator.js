let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function excuse() { 
let whorandom = Math.floor(Math.random() * who.length);
let actionrandom = Math.floor(Math.random() * action.length);
let whatrandom = Math.floor(Math.random() * what.length);
let whenrandom = Math.floor(Math.random() * when.length);

return who[whorandom] + " " + action[actionrandom] + " " + what[whatrandom] + " " + when[whenrandom];
 };

 window.onload = () => {
     document.querySelector("#excuse").innerHTML = excuse();
 }

	