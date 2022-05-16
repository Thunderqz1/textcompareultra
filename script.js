
let x = [];
let y = [];

// let finput = document.getElementById('finput').value;
// let sinput = document.getElementById('sinput').value;

let inject = document.getElementById('inject');

// let display = document.getElementById("display");

// containers for output
// let appendOne = document.getElementById("arone");
// let appendTwo = document.getElementById("artwo");

function readThis() {
    let display = document.getElementById("display");
    let appendOne = document.getElementById("arone");
    let appendTwo = document.getElementById("artwo");
    let finput = document.getElementById('finput').value;
    let sinput = document.getElementById('sinput').value;
    let stringOne = finput.toString();
    let stringTwo = sinput.toString();

    let splitOne = stringOne.split('');
    let splitTwo = stringTwo.split('');

    x.push(splitOne);
    y.push(splitTwo);
    let turnx = x.toString();
    let turny = y.toString();
 
// have to join elements here
    if(turnx === turny) {
        appendOne.innerHTML = `<h3>one</h3>`;
        appendTwo.innerHTML = `<h3>two</h3>`;
        display.innerHTML = "<h3>Correct!</h3>"


    }
        
    
}