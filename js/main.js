'use strict'

// ! Menu
document.querySelector(".burger__btn").addEventListener("click", menu);
function menu(){
	let burger = document.querySelector(".menu");
	burger.classList.toggle("menu__active");
	let version = document.querySelector(".browser-version");
	version.classList.toggle("browser-version__active");
}
document.querySelector(".theme-btn").addEventListener("click", themeSwitcer);
function themeSwitcer() {
	let themeBtn = document.querySelector(".theme-btn");
	themeBtn.classList.toggle("theme-btn__active");
	let theme = document.querySelector(".page");
	theme.classList.toggle("page__dark");
	theme.classList.toggle("page__light");
}

// !Tasks description
let tasks = document.querySelectorAll('.main .task .task__title-descr');
for (let i = 0; i < tasks.length; i++) {
	tasks[i].addEventListener("click", function() {
		this.classList.toggle('task__title-descr_active')
	});
}

// !Random array
const randomArr = (min, max, arrLength) => {
	let randomArray = [];
	let randomLength = Math.floor(Math.random() * arrLength) + 1;
	for(let i = 0; i < randomLength; i++){
		let randomInt = parseInt(min - 0.5 + Math.random() * (max - min + 1));
		randomArray.push(randomInt);
	}
	return randomArray
}

// ? FIRST JS HOMEWORK
// ! Task 1
function diffOfNums(){
	const arr = randomArr(-20,20,10);
	const input = document.querySelector('.difference-input');
	const output = document.querySelector('.difference-output');
	input.innerHTML = `[${arr.join(', ')}]`;
	output.innerHTML = Math.max.apply(null, arr) - Math.min.apply(null, arr);
}diffOfNums()
const getNewDifference = document.querySelector('.difference-button').addEventListener('click', getDifference);
function getDifference(){
	diffOfNums()
}

// ! Task 2

document.querySelector(".second-task__input-text").addEventListener('input', sortingWordsByLength);
document.querySelector(".second-task__input-num").addEventListener('input', sortingWordsByLength);
document.querySelector(".second-task__input-num").value = 1;
const textsArr = ['Without a doubt one of the most important poems of the 20th century. “It has never lost its glamour,” Paul Muldoon observed. “It has never failed to be equal to both the fracture of its own era and what, alas, turned out to be the even greater fracture of the ongoing 20th century and now, it seems, the 21st century.” See also: “The Love Song of J. Alfred Prufrock.”','Bishop’s much loved and much discussed ode to loss, which Claudia Roth Pierpont called “a triumph of control, understatement, wit. Even of self-mockery, in the poetically pushed rhyme word “vaster,” and the ladylike, pinkies-up “shan’t.” An exceedingly rare mention of her mother—as a woman who once owned a watch. A continent standing in for losses larger than itself.”', 'The most famous poem, and a terribly beautiful one, by our country’s first African-American Poet Laureate (though the position was then called Consultant in Poetry to the Library of Congress). See also: “Those Winter Sundays, which despite what I wrote above may be equally as famous.”', 'Dunbar’s most famous poem, and arguably his best, which biographer Paul Revell described as “a moving cry from the heart of suffering. The poem anticipates, and presents in terms of passionate personal regret, the psychological analysis of the fact of blackness in Frantz Fanon’s Peau Noire, Masques Blancs, with a penetrating insight into the reality of the black man’s plight in America.”'];
function sortingWordsByLength(){
	let string = document.querySelector(".second-task__input-text").value;
	let number = document.querySelector(".second-task__input-num").value;
	let newString = string.replace(/[^a-zа-яё\s]/gi, '').replace(/\s+/g, ' ').trim();
	const arr = newString.toLowerCase().split(' ');
	const resultArr = [];
	arr.map((el) => el.length == number ? resultArr.push(el) : el);
	
	document.querySelector(".second-task__output").innerHTML = `There is a ${resultArr.length} words: \n
	${resultArr.sort().join(', ')}`;
}
document.querySelector(".second-task__decrease").addEventListener('click', secondTaskDecriase);
function secondTaskDecriase(){
	let number = document.querySelector(".second-task__input-num").value;
	if(number > 1){
		document.querySelector(".second-task__input-num").value -= 1;
	}
	sortingWordsByLength()
}
document.querySelector(".second-task__increase").addEventListener('click', secondTaskIncriase);
function secondTaskIncriase(){
	let number = document.querySelector(".second-task__input-num").value;
	document.querySelector(".second-task__input-num").value = Number(number) + 1;
	sortingWordsByLength()
}
document.querySelector(".second-task__random-string").addEventListener('click', secondTaskRandomText);
let secondTaskCounter = 1;
function secondTaskRandomText(){
	switch(secondTaskCounter){
		case 1:
			document.querySelector(".second-task__input-text").value = textsArr[secondTaskCounter];
			secondTaskCounter += 1;
			break;
		case 2:
			document.querySelector(".second-task__input-text").value = textsArr[secondTaskCounter];
			secondTaskCounter += 1;
			break;
		case 3:
			document.querySelector(".second-task__input-text").value = textsArr[secondTaskCounter];
			secondTaskCounter = 1;
			break;
	}
	sortingWordsByLength()

}
// // ! Task 3
// const thirdExample = document.querySelector(".third-task__example");
// const thirdOutput = document.querySelector(".third-task__output");
// const thirdButton = document.querySelector(".third-task__refresh").addEventListener("click", findingMissingDigit);
// let thirdTaskRandomArr = [];
// function findingMissingDigit(){
// 	const taskArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// 	let randomInt = Math.floor(Math.random() * 10);
// 	taskArr.splice(randomInt, 1);
// 	thirdTaskRandomArr = taskArr.sort(() => Math.random() - 0.5);
// 	let thirdTaskExample = '[' + thirdTaskRandomArr.join(", ") + ']';
// 	thirdExample.innerHTML = thirdTaskExample;
// 	thirdTaskRandomArr.sort();
// 	for(let i = 0; i < 10; i++){
// 		if(i == thirdTaskRandomArr[0]){
// 			thirdTaskRandomArr.shift()
// 		}else{
// 			thirdOutput.innerHTML = i
// 		}
// 	}
// }
// findingMissingDigit();

// // ! Task 4
// let fourthFirstInput;
// let fourthSecondInput;
// document.querySelector(".fourth-task__first-input").addEventListener("change", fourthInputOne);
// function fourthInputOne(){
// 	fourthFirstInput = document.querySelector(".fourth-task__first-input").value;
// }
// document.querySelector(".fourth-task__second-input").addEventListener("change", fourthInputTwo);
// function fourthInputTwo(){
// 	fourthSecondInput = document.querySelector(".fourth-task__second-input").value;
// }
// let fourthOutput = document.querySelector(".fourth-task__output");
// document.querySelector(".fourth-task__check").addEventListener("click", compareString);
// function compareString() {
// 	let result =  fourthFirstInput.endsWith(fourthSecondInput);
// 	if(result){
// 		fourthOutput.innerHTML = 'true'
// 	}else{
// 		fourthOutput.innerHTML = 'false'
		
// 	}

// }


// // ! Task 5
// const fifthExample = document.querySelector(".fifth-task__example");
// const fifthSolution = document.querySelector(".fifth-task__solution");
// document.querySelector(".fifth-task__refresh").addEventListener("click", averageBtwnClosest)
// function averageBtwnClosest(){
// 	const fifthTaskArr = [];
// 	const arr = randomArr(-20,20,10);
// 	let n = arr.length - 1;
// 	fifthExample.innerHTML = '[' + arr + ']';
// 	for(let i = 0; i < n; i++){
// 		fifthTaskArr.push((arr[0] + arr[1]) / 2)
// 		arr.shift();
// 	}
// 	fifthSolution.innerHTML = '[' + fifthTaskArr + ']';
// }
// averageBtwnClosest();

// // ! Task 6
// let sixthArr = [];
// let sixthData = document.querySelector(".six-task__input");
// let sixthStr = document.querySelector(".six-task__input").addEventListener("input", sortToMax);
// let sixthOutput = document.querySelector(".six-task__output");
// function sortToMax(){
// 	sixthData.value = sixthData.value.replace(/[^0-9]/g, '')
// 	sixthArr = [];
// 	let string = this.value;
// 	sixthArr = string.split("");
// 	sixthArr.sort((a, b) => b - a);
// 	sixthOutput.innerHTML = sixthArr.join(', ')
// }
// // ! Task 7
// const scores = { "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3, "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25, "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23 }
// let seventhData = document.querySelector(".seventh-task__input");
// document.querySelector(".seventh-task__input").addEventListener("input", matches);
// let seventhOutput = document.querySelector(".seventh-task__output");
// function matches(){
// 	let seventhTaskName = seventhData.value.toUpperCase();
// 	seventhTaskName.replace(/[^A-Z]/g);
// 	let splitName = seventhTaskName.split('');
// 	let scoreName = 0;
// 	splitName.forEach(letter => {
// 		scoreName += scores[letter];
// 	});
// 	if(scoreName <= 60){
// 		seventhOutput.innerHTML = `NOT TOO GOOD (${scoreName})`;
// 	}else if(scoreName <= 300){
// 		seventhOutput.innerHTML = `PRETTY GOOD (${scoreName})`;
// 	}else if(scoreName < 600){
// 		seventhOutput.innerHTML = `VERY GOOD (${scoreName})`;
// 	}else{
// 		seventhOutput.innerHTML = `THE BEST (${scoreName})`;
// 	}

// 	console.log(scoreName);
// }

// // ! Task 8
// // let eighthData = document.querySelector(".eight-task__input");
// // let vowelsOutput = document.querySelector(".eight-task__vowels");
// // let consonantsOutput = document.querySelector(".eight-task__consonants");
// // document.querySelector(".eight-task__input").addEventListener("input", countLeters);
// // let vowels = "0";
// // let consonants = "0";
// // function countLeters(){
// // 	let eighthString = eighthData.value;
// // 	const vowelsLenght = eighthString.match(/[aeiou]/gi)?.length;
// // 	let vowels = vowelsLenght ? vowelsLenght : 0;
// // 	const consonantsLenght = eighthString.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length;
// // 	let consonants = consonantsLenght ? consonantsLenght : 0
// // 	vowelsOutput.innerHTML = vowels;
// // 	consonantsOutput.innerHTML = consonants;
// // }


// // ! Task 9
// let ninethText = document.querySelector(".nineth-task__input-text");
// let ninethLetters = document.querySelector(".nineth-task__input-letters");
// let ninethButton = document.querySelector(".nineth-task__apply").addEventListener("click", removeLetters);

// let ninethOutput = document.querySelector(".nineth-task__output")
// function removeLetters(){
// 	let text = ninethText.value;
// 	let letters = ninethLetters.value;
// 	let arr = letters.split('')
// 	let createRegex = new RegExp(letters, "gi");
// 	// let matching = text.match(createRegex);
// 	for(let i = 0; i < letters.length; i++){
// 		createRegex = new RegExp(arr[0], "gi");
// 		text = text.replace(createRegex, "");
// 		arr.shift();
// 	}
// 	if(text == ninethText.value){
// 		ninethOutput.innerHTML = 'The string doesn\'t contain your value'
// 	}else{
// 		ninethOutput.innerHTML = text;
// 	}
	
// 	console.log(createRegex);
// 	console.log(matching);
// }

// // //  ! Task 10
// // let tenthFirstArr = document.querySelector(".tenth-task__input-one");
// // let tenthSecondArr = document.querySelector(".tenth-task__input-two");
// // let tenthOutput = document.querySelector(".tenth-task__output");
// // document.querySelector(".tenth-task__reset").addEventListener("click", unique)
// // function randomSmallArr(){
// // 	let randomInt;
// // 	let randomLength;
// // 	const maxRandomLength = 6;
// // 	const minRandomInt = 1;
// // 	const maxRandomInt = 10;
// // 	randomLength = Math.floor(4 + Math.random() * maxRandomLength);
// // 	for(let i = 0; i < randomLength; i++){
// // 		randomInt = parseInt(minRandomInt - 0.5 + Math.random() * (maxRandomInt - minRandomInt + 1));
// // 		// randomArray.push(randomInt);
// // 	}
// // }
// // let firstArr;
// // let secondArr;
// // let output;
// // function tenthArrays(){
// // 	randomSmallArr();
// // 	firstArr = randomArray;
// // 	tenthFirstArr.innerHTML = firstArr;
// // 	randomArray = [];
// // 	randomSmallArr();
// // 	secondArr = randomArray;
// // 	tenthSecondArr.innerHTML = secondArr;
// // 	output = firstArr.concat(secondArr);
// // 	output.sort(function(a, b) {
// // 		return a - b;
// // 	});
	
// // }
// // tenthArrays();
// // function unique() {
// // 	tenthArrays();
// // 	let result = [];
// // 	for (let str of output) {
// // 	if (!result.includes(str)) {
// // 		result.push(str);
// // 		}
// // 	}
// // 	tenthOutput.innerHTML = result;
// // }
// // unique();


// // ! Task 11
// function invert_key_value(obj) {
// 	let result = {};
// 	let keys = _keys(obj);
// 	for (let i = 0, length = keys.length; i < length; i++) {
// 		result[obj[keys[i]]] = keys[i];
// 	}
// 	return result;
// }
// function _keys(obj){
// 	if (!isObject(obj)) return [];
// 	if (Object.keys) return Object.keys(obj);
// 	let keys = [];
// 	for (let key in obj) if (_.has(obj, key)) keys.push(key);
// 	return keys;
// }
// function isObject(obj) 
// {
// 	let type = typeof obj;
// 	return type ==='function' || type ==='object' && !!obj;
// }
// const eleventhInput = document.querySelector(".eleventh-task__input-text");
// const eleventhInverting = document.querySelector(".eleventh-task__input-text").addEventListener("input", objectInverting)
// const eleventhOutput = document.querySelector(".eleventh-task__output");

// let testObj = {"red": "#FF0000", "green": "#00FF00", "white": "#FFFFFF"};


// console.log(testObj);

// function objectInverting(){
// 	let inverted = invert_key_value(testObj);
// 	console.log(inverted);
// 	let stringifyed = JSON.stringify(inverted);
// 	console.log(stringifyed);
// 	let split = stringifyed.split(",");
// 	let join = split.join(", \n");
// 	eleventhOutput.innerHTML = join;
// }
// objectInverting();


// // ! Task 12
// let srcObj = { skate: 200, painting: 200, shoes: 1 }
// let insuranceAmount = 400
// const calcInsurance = (src = {}, insuranceAmount) => {
// 	 console.log(Object.keys(src).length)
// 	 if (!Object.keys(src).length) throw new Error('You have nothing to compare')


// 	 let totalCount = 0;
// 	 for (const srcKey in src) {
// 		  totalCount += src[srcKey]
// 	 }

// 	 if (totalCount < insuranceAmount) throw new Error('The cost of all things cannot be less than the sum of the general insurance')


// 	 return totalCount - insuranceAmount
// }
// console.log('calcInsurance: ' + calcInsurance(srcObj, insuranceAmount))

// // ! Task 13
// let thirteenthInput = document.querySelector(".thirteenth-task__input");
// let thirteenthOutput = document.querySelector(".thirteenth-task__output");
// document.querySelector(".thirteenth-task__left").addEventListener("click", leftRotation);
// document.querySelector(".thirteenth-task__right").addEventListener("click", rightRotation);
// let str = thirteenthInput.value;

// function leftRotation(){
// 	let str = thirteenthInput.value;
// 	let length = str.length;
// 	let arr = str.split("")
// 	for(let i = 0; i < length - 1; i++){
// 		arr.push(arr[0]);
// 		arr.shift();
// 	}
// 	str = arr.join("");
// 	thirteenthOutput.innerHTML = str;
// }
// function rightRotation(){
// 	let str = thirteenthInput.value;
// 	let length = str.length;
// 	let arr = str.split("")
// 	for(let i = 0; i < length - 1; i++){
// 		arr.unshift(arr[arr.length - 1]);
// 		arr.pop();
// 	}
// 	str = arr.join("");
// 	thirteenthOutput.innerHTML = str;
// }

// // ! Task 14
// let inputX = document.querySelector(".fourteenth-task__x");
// let inputY = document.querySelector(".fourteenth-task__y");
// let inputZ = document.querySelector(".fourteenth-task__z");
// let inputW = document.querySelector(".fourteenth-task__w");
// let inputH = document.querySelector(".fourteenth-task__h");

// const fourteenthApply = document.querySelector(".fourteenth-task__apply").addEventListener("click", brickFit);
// const fourteenthOutput = document.querySelector(".fourteenth-task__output");
// fourteenthOutput.innerHTML = 'Fill all parameters'
// function brickFit(){
// 	let x = inputX.value;
// 	let y = inputY.value;
// 	let z = inputZ.value;
// 	let w = inputW.value;
// 	let h = inputH.value;
// 	let brick = [x, y, z];
// 	let hole = [w, h];
// 	brick.sort();
// 	brick.pop();
// 	if(brick[0] <= hole[0] && brick[1] <= hole[1]){
// 		fourteenthOutput.innerHTML = 'True'
// 	}else{
// 		fourteenthOutput.innerHTML = 'False'
// 	}
// }
// // * 420 string of first homework

// // ? SECOND JS HOMEWORK
// // ! Task 1
// let scrollPercentage = () => {
// 	let scrollProgress = document.querySelector(".progress");
// 	let progressValue = document.querySelector(".progress__value");
// 	let pos = document.documentElement.scrollTop;
// 	let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// 	let scrollValue = Math.round( pos * 100 / calcHeight);
// 	scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%, #181818 ${scrollValue}%)`;
// 	progressValue.textContent = `${scrollValue}%`;
// }
// window.onscroll = scrollPercentage;
// window.onload = scrollPercentage;

// // ! Task 2
// let redirectDataValidation = document.querySelector(".redirect__input").addEventListener("input", formValidation);
// function formValidation(){
// 	let data = redirectData.value;
// 	data.replace(/[^a-z]/g, '');
// 	redirectData.value = data.replace(/[^a-z]/gi, '');
// }


// let redirectData = document.querySelector(".redirect__input");
// document.querySelector(".redirect__btn").addEventListener("click", redirect);
// function redirect() {
// 	localStorage.infos = redirectData.value;
// 	localStorage["infos"] = redirectData.value;
// 	localStorage.setItem("infos", redirectData.value);
// 	let newWindow = window.open('redirect.html?&');
// }
// // // ! Task 3
// // // ? Theme switcher
// // // ! Task 4
// // document.ondragstart = noselect;
// // document.onselectstart = noselect;
// // document.oncontextmenu = noselect;
// // function noselect() {return false;} 

// // window.onkeydown = function(evt) {
// // 	if(evt.keyCode == 123) return false;
// // };
// // window.onkeypress = function(evt) {
// // 	if(evt.keyCode == 123) return false;
// // };
// // // ! Task 5
// // let inactivityTime = function () {
// // 	let t;
// // 	window.onload = resetTimer;
// // 	document.onmousemove = resetTimer;
// // 	document.onkeypress = resetTimer;

// // 	function logout() {
// // 		let result = confirm('Are you here?');
// // 		if(result){

// // 		}else{
// // 			window.close();
// // 		}
// // 	}

// // 	function resetTimer() {
// // 		 clearTimeout(t);
// // 		 t = setTimeout(logout, 300000);
// // 	}
// // };
// // inactivityTime();






// // ! Task 6
// navigator.sayswho= (function(){
// 	var ua= navigator.userAgent, tem, 
// 	M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
// 	if(/trident/i.test(M[1])){
// 		 tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
// 		 return 'IE '+(tem[1] || '');
// 	}
// 	if(M[1]=== 'Chrome'){
// 		 tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
// 		 if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
// 	}
// 	M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
// 	if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
// 	return M.join(' ');
// })();
// document.write('<p class="browser-version">' + 'You are using ' + navigator.sayswho + '!</p>');


// // ! Task 7
// const anchors = document.querySelectorAll('a.menu-list__link')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()
    
//     const blockID = anchor.getAttribute('href')
    
//     document.querySelector(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }


// // ! Additional task 1
// document.querySelector(".div__item").addEventListener("click", moveBlock);
// const div = document.querySelector(".div__item");
// document.querySelector(".div__button").addEventListener("click", flagDown);
// let pathLength = document.documentElement.clientWidth - div.offsetWidth - 70;
// let path = "0";
// let i = 1;
// let flag = true;
// function flagDown(){
// 	flag = !flag;
// 	moveBlock();
// }
// function moveBlock(){
	
// 	if(flag === true){
// 	setTimeout(function move() {
// 		path = path.replace(/[a-z]/g, '')
// 		path = Number(path) + 1;
// 		path += 'px'
// 		div.style.left = path;
// 		if (i < pathLength) {
// 			i++;
// 			moveBlock();
// 		}else{
// 			i = 0;
// 			path = '0px'
// 			moveBlock();
// 		}
// 	}, 5);
// 	}
// }

// // ! Additional task 2
// let isLoaded = document.querySelector(".is-loaded");
// window.onload = function(){
// 	isLoaded.classList.add("is-loaded__active");
// }
// document.querySelector(".loaded__toggle").addEventListener("click", loadedToggle);
// function loadedToggle(){
// 	isLoaded.classList.toggle("is-loaded__active");
// }

// // ! Additional task 3
// let dayToDiv = document.querySelector(".day-of-week");
// let date = new Date();
// let dayWeek = [7, 1, 2, 3, 4, 5, 6][date.getDay()];
// dayToDiv.innerHTML = `Today is a ${dayWeek} day of week`


// // ! Additional task 4
// let listInput = document.querySelector(".task-two__input");
// document.querySelector(".task-two__apply").addEventListener("click", listTreatment);
// let listOutput = document.querySelector(".task-two__output");
// let ul = document.querySelector('.task-two__output');
// let li = document.createElement('li');
// function listTreatment(){
// 	ul.innerHTML = "";
// 	let listData = listInput.value;
// 	let data;
// 	data = listData.replace(/[^\s/a-z]/gi, '');
// 	let dataArr = data.split(" ");
// 	let liFirst = document.createElement('li');
// 	let liSecond = document.createElement('li');
// 	let liThird = document.createElement('li');
// 	let liCount = document.createElement('li');
// 	const letterA = listData.match(/[a]/gi).length;
// 	if(dataArr.length === 1){
// 		liFirst.classList.add("task-two__output-item");
// 		liFirst.innerHTML = dataArr[0].toUpperCase();
// 		ul.append(liFirst);

// 		liCount.classList.add("task-two__output-item");
// 		liCount.innerHTML = 'There are ' + letterA + ' letters "a"';
// 		ul.append(liCount);
// 	}
// 	if(dataArr.length === 2){
// 		liFirst.classList.add("task-two__output-item");
// 		liFirst.innerHTML = dataArr[0].toUpperCase();
// 		ul.append(liFirst);
// 		liSecond.classList.add("task-two__output-item");
// 		liSecond.innerHTML = dataArr[1];
// 		ul.append(liSecond);
// 		liCount.classList.add("task-two__output-item");
// 		liCount.innerHTML = 'There are ' + letterA + ' letters "a"';
// 		ul.append(liCount);
// 	}
// 	if(dataArr.length === 3){
// 		liFirst.classList.add("task-two__output-item");
// 		liFirst.innerHTML = dataArr[0].toUpperCase();
// 		ul.append(liFirst);
// 		liSecond.classList.add("task-two__output-item");
// 		liSecond.innerHTML = dataArr[1];
// 		ul.append(liSecond);
// 		liThird.classList.add("task-two__output-item");
// 		liThird.innerHTML = dataArr[2];
// 		ul.append(liThird);
// 		liCount.classList.add("task-two__output-item");
// 		liCount.innerHTML = 'There are ' + letterA + ' letters "a"';
// 		ul.append(liCount);
// 	}
// 	if(dataArr.length >= 4){
// 		liFirst.classList.add("task-two__output-item");
// 		liFirst.innerHTML = 'Please write 3 words';
// 		ul.append(liFirst);
// 	}
// }
// // * 636 string of first homework
