'use strict'

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


// ! Task 1
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
randomArr();
diffBtwnNums();
document.querySelector(".first-task__btn").addEventListener("click", taskOneReset);
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
	sixthArr = string.split("");
	sixthArr.sort((a, b) => b - a);
	sixthOutput.innerHTML = sixthArr.join(', ')
}
// ! Task 7
const scores = { "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3, "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25, "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23 }
let seventhData = document.querySelector(".seventh-task__input");
document.querySelector(".seventh-task__input").addEventListener("input", matches);
let seventhOutput = document.querySelector(".seventh-task__output");
function matches(){
	let seventhTaskName = seventhData.value.toUpperCase();
	seventhTaskName.replace(/[^A-Z]/g);
	let splitName = seventhTaskName.split('');
	let scoreName = 0;
	splitName.forEach(letter => {
		scoreName += scores[letter];
	});
	if(scoreName <= 60){
		seventhOutput.innerHTML = `NOT TOO GOOD (${scoreName})`;
	}else if(scoreName <= 300){
		seventhOutput.innerHTML = `PRETTY GOOD (${scoreName})`;
	}else if(scoreName < 600){
		seventhOutput.innerHTML = `VERY GOOD (${scoreName})`;
	}else{
		seventhOutput.innerHTML = `THE BEST (${scoreName})`;
	}

	console.log(scoreName);
}

// ! Task 8
let eighthData = document.querySelector(".eight-task__input");
let vowelsOutput = document.querySelector(".eight-task__vowels");
let consonantsOutput = document.querySelector(".eight-task__consonants");
document.querySelector(".eight-task__input").addEventListener("input", countLeters);
let vowels = "0";
let consonants = "0";
function countLeters(){
	let eighthString = eighthData.value;
	const vowelsLenght = eighthString.match(/[aeiou]/gi)?.length;
	let vowels = vowelsLenght ? vowelsLenght : 0;
	const consonantsLenght = eighthString.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length;
	let consonants = consonantsLenght ? consonantsLenght : 0
	vowelsOutput.innerHTML = vowels;
	consonantsOutput.innerHTML = consonants;
}

// ! Task 9
let ninethText = document.querySelector(".nineth-task__input-text");
let ninethLetters = document.querySelector(".nineth-task__input-letters");
let ninethButton = document.querySelector(".nineth-task__apply").addEventListener("click", removeLetters);

let ninethOutput = document.querySelector(".nineth-task__output")
function removeLetters(){
	let text = ninethText.value;
	let letters = ninethLetters.value;
	let arr = letters.split('')
	let createRegex = new RegExp(letters, "gi");
	// let matching = text.match(createRegex);
	for(let i = 0; i < letters.length; i++){
		createRegex = new RegExp(arr[0], "gi");
		text = text.replace(createRegex, "");
		arr.shift();
	}
	if(text == ninethText.value){
		ninethOutput.innerHTML = 'The string doesn\'t contain your value'
	}else{
		ninethOutput.innerHTML = text;
	}
	
	console.log(createRegex);
	console.log(matching);
}




//  ! Task 10
let tenthFirstArr = document.querySelector(".tenth-task__input-one");
let tenthSecondArr = document.querySelector(".tenth-task__input-two");
let tenthOutput = document.querySelector(".tenth-task__output");
document.querySelector(".tenth-task__reset").addEventListener("click", unique)
function randomSmallArr(){
	let randomInt;
	let randomLength;
	const maxRandomLength = 6;
	const minRandomInt = 1;
	const maxRandomInt = 10;
	randomLength = Math.floor(4 + Math.random() * maxRandomLength);
	for(let i = 0; i < randomLength; i++){
		randomInt = parseInt(minRandomInt - 0.5 + Math.random() * (maxRandomInt - minRandomInt + 1));
		randomArray.push(randomInt);
	}
}
let firstArr;
let secondArr;
let output;
function tenthArrays(){
	randomSmallArr();
	firstArr = randomArray;
	tenthFirstArr.innerHTML = firstArr;
	randomArray = [];
	randomSmallArr();
	secondArr = randomArray;
	tenthSecondArr.innerHTML = secondArr;
	output = firstArr.concat(secondArr);
	output.sort(function(a, b) {
		return a - b;
	});
	
}
tenthArrays();
function unique() {
	tenthArrays();
	let result = [];
	for (let str of output) {
	if (!result.includes(str)) {
		result.push(str);
		}
	}
	tenthOutput.innerHTML = result;
}
unique();


// ! Task 11
function invert_key_value(obj) {
	let result = {};
	let keys = _keys(obj);
	for (let i = 0, length = keys.length; i < length; i++) {
		result[obj[keys[i]]] = keys[i];
	}
	return result;
}
function _keys(obj){
	if (!isObject(obj)) return [];
	if (Object.keys) return Object.keys(obj);
	let keys = [];
	for (let key in obj) if (_.has(obj, key)) keys.push(key);
	return keys;
}
function isObject(obj) 
{
	let type = typeof obj;
	return type ==='function' || type ==='object' && !!obj;
}
const eleventhInput = document.querySelector(".eleventh-task__input-text");
const eleventhInverting = document.querySelector(".eleventh-task__input-text").addEventListener("input", objectInverting)
const eleventhOutput = document.querySelector(".eleventh-task__output");

let testObj = {"red": "#FF0000", "green": "#00FF00", "white": "#FFFFFF"};


console.log(testObj);

function objectInverting(){
	let inverted = invert_key_value(testObj);
	console.log(inverted);
	let stringifyed = JSON.stringify(inverted);
	console.log(stringifyed);
	let split = stringifyed.split(",");
	let join = split.join(", \n");
	eleventhOutput.innerHTML = join;
}
objectInverting();


// ! Task 12
let srcObj = { skate: 200, painting: 200, shoes: 1 }
let insuranceAmount = 400
const calcInsurance = (src = {}, insuranceAmount) => {
	 console.log(Object.keys(src).length)
	 if (!Object.keys(src).length) throw new Error('You have nothing to compare')


	 let totalCount = 0;
	 for (const srcKey in src) {
		  totalCount += src[srcKey]
	 }

	 if (totalCount < insuranceAmount) throw new Error('The cost of all things cannot be less than the sum of the general insurance')


	 return totalCount - insuranceAmount
}
console.log('calcInsurance: ' + calcInsurance(srcObj, insuranceAmount))

// ! Task 13
let thirteenthInput = document.querySelector(".thirteenth-task__input");
let thirteenthOutput = document.querySelector(".thirteenth-task__output");
document.querySelector(".thirteenth-task__left").addEventListener("click", leftRotation);
document.querySelector(".thirteenth-task__right").addEventListener("click", rightRotation);
let str = thirteenthInput.value;

function leftRotation(){
	let str = thirteenthInput.value;
	let length = str.length;
	let arr = str.split("")
	for(let i = 0; i < length - 1; i++){
		arr.push(arr[0]);
		arr.shift();
	}
	str = arr.join("");
	thirteenthOutput.innerHTML = str;
}
function rightRotation(){
	let str = thirteenthInput.value;
	let length = str.length;
	let arr = str.split("")
	for(let i = 0; i < length - 1; i++){
		arr.unshift(arr[arr.length - 1]);
		arr.pop();
	}
	str = arr.join("");
	thirteenthOutput.innerHTML = str;
}

// ! Task 14
let inputX = document.querySelector(".fourteenth-task__x");
let inputY = document.querySelector(".fourteenth-task__y");
let inputZ = document.querySelector(".fourteenth-task__z");
let inputW = document.querySelector(".fourteenth-task__w");
let inputH = document.querySelector(".fourteenth-task__h");

const fourteenthApply = document.querySelector(".fourteenth-task__apply").addEventListener("click", brickFit);
const fourteenthOutput = document.querySelector(".fourteenth-task__output");
fourteenthOutput.innerHTML = 'Fill all parameters'
function brickFit(){
	let x = inputX.value;
	let y = inputY.value;
	let z = inputZ.value;
	let w = inputW.value;
	let h = inputH.value;
	let brick = [x, y, z];
	let hole = [w, h];
	brick.sort();
	brick.pop();
	if(brick[0] <= hole[0] && brick[1] <= hole[1]){
		fourteenthOutput.innerHTML = 'True'
	}else{
		fourteenthOutput.innerHTML = 'False'
	}
}