"use strict";
var inpNum1 = document.getElementById('num1');
var inpNum2 = document.getElementById('num2');
var addbtn = document.querySelector('button');
const numResult = [];
const textResult = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resObj) {
    console.log(resObj.val);
}
addbtn.addEventListener("click", () => {
    const num1 = inpNum1.value;
    const num2 = inpNum2.value;
    const result = add(+num1, +num2);
    numResult.push(result);
    const stringResult = add(num1, num2);
    textResult.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResult, textResult);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked!');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
