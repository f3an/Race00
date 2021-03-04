//validation
function dis(val) {
    document.getElementById("display1").innerHTML += val;
    console.log(val);
    clipboard.push(val);
}

//function for calculating the result Start
function solve() {
    const x = document.getElementById("display1").innerHTML;
    if (x.substring(0, 1) == "/" ||
        x.endsWith(".") ||
        x.endsWith("-") ||
        x.endsWith("+") ||
        x.endsWith("*") ||
        x.substring(0, 1) == "+" ||
        x.endsWith(0, 1) == "/" ||
        x.substring(0, 1) == "*" ||
        x.substring(0, 1) == "**") {
        console.error("calculation cannot start or end with the calculation function or end with a dot");
        clr();
    } else {
        document.getElementById("display").innerHTML = x;
        let y = eval(x);
        document.getElementById("display1").innerHTML = y;
        console.log(y);
        clipboard.push("= " + y + "\n");
    }
}


//function for clearing the display
function clr() {
    document.getElementById("display").innerHTML = "";
    document.getElementById("display1").innerHTML = "0";
    console.log("clear");
}


//function to change sign
function sign() {
    const x = document.getElementById("display1").innerHTML;
    if (x == "") {
        console.error("Enter a number");
    } else if (x == 0) {
        console.error("Enter a number greater or less than 0");
        clr();
    } else if (x.substring(0, 1) != "-") {
        document.getElementById("display1").innerHTML = "-" + x;
        clipboard.push("= " + document.getElementById("display1").innerHTML + "\n");
    } else {
        document.getElementById("display1").innerHTML = x.substring(1, x.length);
        clipboard.push("= " + document.getElementById("display1").innerHTML + "\n");
    }
}


//function to calculating factorial
function factorialize() {
    const x = document.getElementById("display1").innerHTML;
    if (x == "") {
        console.error("You can't take a factorial from nothing");
    } else {
        num = parseFloat(document.getElementById("display1").innerHTML);
        document.getElementById("display").innerHTML = num + "!";
        if (num === 0 || num === 1)
            return 1;
        for (let i = num - 1; i >= 1; i--) {
            num *= i;
        }
        document.getElementById("display1").innerHTML = num.toFixed(2);
        clipboard.push("= " + document.getElementById("display1").innerHTML + "\n");
        console.log(num);
    }
}

//function to calculating square root

function sqrt() {
    document.getElementById("display").innerHTML = "&#8730;" + document.getElementById("display1").innerHTML;
    const x = Math.sqrt(parseFloat(document.getElementById("display1").innerHTML));
    if (isNaN(x)) {
        console.error("Enter the number");
    } else {
        console.log(x);
        document.getElementById("display1").innerHTML = x.toFixed(3);;
        clipboard.push("= " + document.getElementById("display1").innerHTML + "\n");
    }
}

//Calculating Functions end

// func display display massage tusk not done
function notdone() {
    console.log("At that moment funtinon is not done");
    alert("At that moment funtinon is not done");
}


//Memmory functions Start

let y;
//save a number in memory
function ms() {
    y = parseFloat(document.getElementById("display1").innerHTML);
    return y;
}

//clear memory
function cm() {
    return y = "";
}
//function M+
function madd() {
    const current = parseFloat(document.getElementById("display1").innerHTML);
    if (isNaN(y) || y == "") {
        console.error("Memory is empty");
    } else {
        document.getElementById("display").innerHTML = current + "+" + y;
        let x = y + current;
        document.getElementById("display1").innerHTML = x;
        clipboard.push(document.getElementById("display").innerHTML);
        clipboard.push("= " + document.getElementById("display1").innerHTML + "\n");
    }
}
//function M-
function msubtract() {
    const current = parseFloat(document.getElementById("display1").innerHTML);
    if (isNaN(y) || y == "") {
        console.error("Memory is empty");
    } else {
        document.getElementById("display").innerHTML = current + "-" + y;
        let x = current - y;
        document.getElementById("display1").innerHTML = x;
        clipboard.push(document.getElementById("display").innerHTML);
        clipboard.push("= " + document.getElementById("display1").innerHTML + "\n");
    }
}

//display memory 
let display = () => {
    ms();
    if (isNaN(y)) {
        console.error("Y is Not a Number");
    } else {
        console.log(y + " Saved in memory");
    }
}

let display2 = () => {
    cm();
    console.log(y + " Memory is cleared");
}

//memory functions end

//CLIPBOARD FUNCTIONS

const clipboard = [];

function copyinClipboard() {
    if (clipboard == 0) {
        console.error("log is empty");
    } else {
        array = clipboard.join(" ");
        const elem = document.createElement('textarea');
        elem.value = array;
        document.body.appendChild(elem);
        elem.select();
        document.execCommand('copy');
        document.body.removeChild(elem);
        console.log(array);
    }
}

function insertfromClipboard() {
    let el = document.createElement('textarea');
    document.body.appendChild(el);
    el.focus();
    document.execCommand('paste');
    let value = el.value;
    document.body.removeChild(el);
    clipboard.join(value);
    array = clipboard.join(" ");
    if (array == "") {
        console.error("Clipboard is empty");
    } else {
        console.log(array);
    }
}

function displayclipboardarr() {
    console.log(clipboard);
}
//END OF CLIPBOARD FUNCTIONS
//Rick button START
function rick() {
    alert("You are RickRolled!");
}
//END of Rick button
//converter functions
function lengthConverter(source, val) {
    val = parseFloat(val);
    const inputMM = document.getElementById("inputMM");
    const inputCM = document.getElementById("inputCM");
    const inputM = document.getElementById("inputM");
    const inputKM = document.getElementById("inputKM");
    if (source == "inputMM") {
        inputCM.value = (val / 10)
        inputM.value = (val / 1000)
        inputKM.value = (val / 1000000)
    }

    if (source == "inputCM") {
        inputMM.value = (val * 10)
        inputM.value = (val / 100)
        inputKM.value = (val / 100000)
    }

    if (source == "inputM") {
        inputMM.value = (val * 1000)
        inputCM.value = (val * 100)
        inputKM.value = (val / 1000)
    }

    if (source == "inputKM") {
        inputMM.value = (val * 1000000)
        inputCM.value = (val * 100000)
        inputM.value = (val / 1000)
    }
}

// weight converter
function weightConverter(source, val) {
    val = parseFloat(val);
    const inputGM = document.getElementById("inputGM");
    const inputKG = document.getElementById("inputKG");
    const inputP = document.getElementById("inputP");
    const inputT = document.getElementById("inputT");
    if (source == "inputGM") {
        inputKG.value = (val / 1000);
        inputP.value = (val / 454);
        inputT.value = (val / 1000000);
    }
    if (source == "inputKG") {
        inputGM.value = (val * 1000);
        inputP.value = (val * 2.205);
        inputT.value = (val / 1000);
    }
    if (source == "inputP") {
        inputGM.value = (val * 454);
        inputKG.value = (val / 2.205);
        inputT.value = (val / 2205);
    }
    if (source == "inputT") {
        inputGM.value = (val * 1000000);
        inputKG.value = (val * 1000);
        inputP.value = (val * 2205);
    }
}

// area converter
function areaConverter(source, val) {
    val = parseFloat(val);
    const inputsquareCM = document.getElementById("inputsquareCM");
    const inputSquareM = document.getElementById("inputSquareM");
    const inputSquareKM = document.getElementById("inputSquareKM");
    const inputHectares = document.getElementById("inputHectares");
    if (source == "inputsquareCM") {
        inputSquareM.value = (val / 10000);
        inputSquareKM.value = (val / 10000000000);
        inputHectares.value = (val / 100000000);
    }

    if (source == "inputSquareM") {
        inputsquareCM.value = (val * 1000);
        inputSquareKM.value = (val / 1000000);
        inputHectares.value = (val / 10000);
    }

    if (source == "inputSquareKM") {
        inputsquareCM.value = (val * 1000000000);
        inputSquareM.value = (val * 1000000);
        inputHectares.value = (val * 100);
    }

    if (source == "inputHectares") {
        inputsquareCM.value = (val * 100000000);
        inputSquareM.value = (val * 10000);
        inputSquareKM.value = (val / 100);
    }
}

const calculator = document.getElementById("calculator");
const converter = document.getElementById("converter");
const toggleBtn = document.getElementById("toggle");
const logo = document.getElementById("logo");

function clearinput() {
    inputMM.value = ""
    inputCM.value = ""
    inputM.value = ""
    inputKM.value = ""
    document.getElementById("display").innerHTML = "";
}

function toggle() {
    if (calculator.dataset.toggle == "ON") {
        calculator.style.display = "none";
        converter.style.display = "block"
        calculator.dataset.toggle = "OFF"
        converter.dataset.toggle = "ON"
        toggleBtn.textContent = "CALCULATOR MODE"
        logo.textContent = "Converter"
        clearinput();
        clr();
    } else if (calculator.dataset.toggle == "OFF") {
        calculator.style.display = "block";
        converter.style.display = "none"
        calculator.dataset.toggle = "ON"
        converter.dataset.toggle = "OFF"
        logo.textContent = "Calculator"
        toggleBtn.textContent = "CONVERSION MODE"
        clearinput();
    }
}