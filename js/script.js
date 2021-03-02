//validation
function dis(val) {
    document.getElementById("display").innerHTML += val;
    console.log(val);
}

//function for calculating the result
function solve() {
    let x = document.getElementById("display").innerHTML;
    if (x.substring(0, 1) == "/" || x.endsWith(".")) {
        alert("can't start with / or .");
        clr();
    } else {
        let y = eval(x);
        document.getElementById("display").innerHTML = y;
        console.log(y);
    }
}


//function for clearing the display
function clr() {
    document.getElementById("display").innerHTML = "0";
    console.log("clear");
}


//function to change sign
function sign() {
    let x = document.getElementById("display").innerHTML;
    if (x.substring(0, 1) != "-")
        document.getElementById("display").innerHTML = "-" + x;
    else {
        document.getElementById("display").innerHTML = x.substring(1, x.length);
    }
}


//function to calculating factorial
function factorialize() {
    num = parseFloat(document.getElementById("display").innerHTML);
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    document.getElementById("display").innerHTML = num;
    console.log(num);
}

//function to calculating square root

function sqrt() {
    x = Math.sqrt(parseFloat(document.getElementById("display").innerHTML));
    console.log(x);
    document.getElementById("display").innerHTML = x;
}