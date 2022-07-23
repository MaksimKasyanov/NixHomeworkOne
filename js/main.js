'use strict'
// ! Task 1
let randomInt;
let randomLength;
let randomArray = [];
const differenceInput = document.querySelector(".task__inpput");
const differenceOutput = document.querySelector(".task__output");
function getRndInt() {
	const minRandomInt = -100;
	const maxRandomInt = 100;
	randomInt = parseInt(minRandomInt - 0.5 + Math.random() * (maxRandomInt - minRandomInt + 1));
}
function randomArr(){
	const maxRandomLength = 9;
	randomLength = Math.floor(Math.random() * maxRandomLength);
	for(let i = 0; i < randomLength; i++){
		getRndInt();
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
	randomInt;
	randomLength;
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
	secondTaskOutput.innerHTML = 'Found ' + wordsLength + ' \u2013 ' + arrOfSortedWords.join(", ");
}

// ! Task 3
let thirdExample = document.querySelector(".third-task__example");
let thirdOutput = document.querySelector(".third-task__output");
let thirdButton = document.querySelector(".third-task__refresh").addEventListener("click", findingMissingDigit);
let thirdTaskRandomArr = [];
// const comparingArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
function findingMissingDigit(){
	const taskArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	let randomInt = Math.floor(Math.random() * 10);
	taskArr.splice(randomInt, 1);
	thirdTaskRandomArr = taskArr.sort(() => Math.random() - 0.5);
	
	let thirdTaskExample = '[' + thirdTaskRandomArr.join(", ") + ']';
	thirdExample.innerHTML = thirdTaskExample;
	thirdTaskRandomArr.sort();
	for(let i = 0; i < 10; i++){
		// console.log(typeof thirdTaskRandomArr[0])
		if(i == thirdTaskRandomArr[0]){
			console.log(thirdTaskRandomArr[0])
			thirdTaskRandomArr.shift()
		}else{
			thirdOutput.innerHTML = i
		}
	}

	console.log(thirdTaskRandomArr);
}
findingMissingDigit();
