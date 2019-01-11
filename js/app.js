console.log('TEST');






/*----- app's state (variables) -----*/ 






/*----- cached element references -----*/ 
const output = document.getElementById('output');
const plus = document.getElementById('plus');
const input = document.getElementById('number');
const minus = document.getElementById('minus');

/*------------ constants --------------*/
const num1 = parseInt(output);
const num2 = parseInt(input);

console.log(output.parseInt);


/*----- event listeners -----*/ 
plus.addEventListener('click', function() {
    output.innerHTML = (parseInt(output.innerHTML)) + (parseInt(input.value));
    console.log((parseInt(output.innerHTML)) + (parseInt(input.value)));
    render();
});



minus.addEventListener('click', function() {
    output.innerHTML = (parseInt(output.innerHTML)) - (parseInt(input.value));
    console.log((parseInt(output.innerHTML)) + (parseInt(input.value)));
    render();
});


init();


/*----- functions -----*/
function init() {
    output.textContent = '1';
    input.value = '1';
}



function render() {
    // if (parseInt(output.innerHTML.charAt(0)) == '-') {
    //     output.style.color = 'red';
    }
    console.log('render');
}





















// we need 2 buttons, one that adds and one that subtracts
// we need an input box where we can input one number into
// and an output where we can hold another number
// when one button is clicked, the numbers must do the corresponding action, add or subtract 
