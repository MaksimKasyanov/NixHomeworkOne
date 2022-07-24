'use strict'
// ! Task 1

let randomArray = [];
const differenceInput = document.querySelector(".task__inpput");
const differenceOutput = document.querySelector(".task__output");

function randomArr(){
	let randomInt;
	let randomLength;
	const maxRandomLength = 9;
	const minRandomInt = -100;
	const maxRandomInt = 100;
	randomLength = Math.floor(Math.random() * maxRandomLength);
	for(let i = 0; i < randomLength; i++){
		randomInt = parseInt(minRandomInt - 0.5 + Math.random() * (maxRandomInt - minRandomInt + 1));
		randomArray.push(randomInt);
	}
}
randomArr();
function diffBtwnNums(){
	if(randomArray.length <= 1){
		const outputStr = randomArray.join(", ");
		differenceInput.innerHTML = '[' + outputStr + ']';
		differenceOutput.innerHTML = 0; 
	}else{
		const outputStr = randomArray.join(", ");
		differenceInput.innerHTML = '[' + outputStr + ']';
		differenceOutput.innerHTML = Math.max(...randomArray) - Math.min(...randomArray); 

	}
}
diffBtwnNums();

document.querySelector(".task__btn-1").addEventListener("click", taskOneReset);
function taskOneReset(){
	randomArray = [];
	randomArr();
	diffBtwnNums();
}

// ! Task 2
document.querySelector(".second-task__input-text");
document.querySelector(".second-task__input-num");
document.querySelector(".second-task__apply").addEventListener("click", cleaningStr)
function cleaningStr(){
	let secondTaskOutput = document.querySelector(".second-task__output");
	let num;
	let text;
	let stringToArray = [];
	let arrOfSortedWords = [];
	let wordsLength;
	stringToArray = [];
	arrOfSortedWords = [];
	text = document.querySelector(".second-task__input-text").value;
	num = Number(document.querySelector(".second-task__input-num").value);
	text = text.toLowerCase();
	text = text.replace(/\r?\n/g, "");
	text = text.replace(/[^^a-zA-ZА-Яа-я\s]/gi, ' ');
	text = text.replace(/ +/g, ' ').trim();
	stringToArray = text.split(' ')
	console.log(stringToArray);
	for(let i = 0; i = stringToArray.length; i++){
		if(stringToArray[0].length === num){
			arrOfSortedWords.push(stringToArray[0])
			stringToArray.shift();
		}else{
			stringToArray.shift();
		}
	}
	arrOfSortedWords.shift();
	wordsLength = Number(arrOfSortedWords.length);
	console.log(arrOfSortedWords);
	console.log(wordsLength);
	secondTaskOutput.innerHTML = 'Found ' + wordsLength + ' words ' + ' \u2013 ' + arrOfSortedWords.join(", ");
}

// ! Task 3
const thirdExample = document.querySelector(".third-task__example");
const thirdOutput = document.querySelector(".third-task__output");
const thirdButton = document.querySelector(".third-task__refresh").addEventListener("click", findingMissingDigit);
let thirdTaskRandomArr = [];
function findingMissingDigit(){
	const taskArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	let randomInt = Math.floor(Math.random() * 10);
	taskArr.splice(randomInt, 1);
	thirdTaskRandomArr = taskArr.sort(() => Math.random() - 0.5);
	let thirdTaskExample = '[' + thirdTaskRandomArr.join(", ") + ']';
	thirdExample.innerHTML = thirdTaskExample;
	thirdTaskRandomArr.sort();
	for(let i = 0; i < 10; i++){
		if(i == thirdTaskRandomArr[0]){
			thirdTaskRandomArr.shift()
		}else{
			thirdOutput.innerHTML = i
		}
	}
}
findingMissingDigit();

// ! Task 4
let fourthFirstInput;
let fourthSecondInput;
document.querySelector(".fourth-task__first-input").addEventListener("change", fourthInputOne);
function fourthInputOne(){
	fourthFirstInput = document.querySelector(".fourth-task__first-input").value;
}

document.querySelector(".fourth-task__second-input").addEventListener("change", fourthInputTwo);
function fourthInputTwo(){
	fourthSecondInput = document.querySelector(".fourth-task__second-input").value;
}

let fourthOutput = document.querySelector(".fourth-task__output");
document.querySelector(".fourth-task__check").addEventListener("click", compareString);
function compareString() {
	let result =  fourthFirstInput.endsWith(fourthSecondInput);
	if(result){
		fourthOutput.innerHTML = 'true'
	}else{
		fourthOutput.innerHTML = 'false'
		
	}

}


// ! Task 5
const fifthExample = document.querySelector(".fifth-task__example");
const fifthSolution = document.querySelector(".fifth-task__solution");
document.querySelector(".fifth-task__refresh").addEventListener("click", averageBtwnClosest)
function averageBtwnClosest(){
	const fifthTaskArr = [];
	randomArr();
	let n = randomArray.length - 1;
	fifthExample.innerHTML = '[' + randomArray + ']';
	for(let i = 0; i < n; i++){
		fifthTaskArr.push((randomArray[0] + randomArray[1]) / 2)
		randomArray.shift();
	}
	fifthSolution.innerHTML = '[' + fifthTaskArr + ']';
}
averageBtwnClosest();

// ! Task 6
let sixthArr = [];
let sixthData = document.querySelector(".six-task__input");
let sixthStr = document.querySelector(".six-task__input").addEventListener("input", sortToMax);
let sixthOutput = document.querySelector(".six-task__output");
function sortToMax(){
	sixthData.value = sixthData.value.replace(/[^0-9]/g, '')
	sixthArr = [];
	let string = this.value;
	sixthArr = string.split("")
	sixthArr.sort((a, b) => b - a);
	sixthOutput.innerHTML = sixthArr.join(', ')
}
// ! Task 7
const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,"T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}

