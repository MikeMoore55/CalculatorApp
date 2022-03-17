let myName;
myName = prompt('What is your Name');

let greetingMessage;
greetingMessage = document.querySelector('h1').textContent = "We welcome you, " + myName + ", to CALCULATE-X, the simplest online calculator.";

function displayCalculator(val){
    document.getElementById('result').value += val;

    return val;
};

function solve(){
    let x = document.getElementById('result').value;

    let y = eval(x);

    document.getElementById('result').value = y;

    return y;
};

function clearScreen(){
    document.getElementById('result').value = "";
}