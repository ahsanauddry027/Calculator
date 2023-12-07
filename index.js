const display = document.getElementById("display");


function inputs(inp){

    display.value += inp;
}

function cleardis(){
    display.value=""
}


function calculate(){
    display.value = eval(display.value)

}