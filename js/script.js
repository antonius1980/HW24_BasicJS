'use strict';

//Start Declaring Variables
const CURRENT_YEAR = "2025";
let fullName;
let firstName;
let lastName;
let birthYear;

let squareSide;
let circleRadius;

/*
Wrong names
let 1var;
let second-var;
let #var;
let *var;
let &-%#test-var;
*/

/* 
Стилі написання змінних
camelCase
snake_case
UpperCamelCase
Some_Other
UPPERCASE
UPPER_CASE
_something
....
*/

/* Start Interaction */
firstName = prompt('What is your first name?');
lastName = prompt('What is your last name?');
fullName = firstName + " " + lastName;
alert('Hello ' + fullName);
birthYear = prompt('What is your birth year?', 1900);
let age = CURRENT_YEAR - birthYear;
alert('So you are ' + age + ' years old, ' + fullName);

squareSide = prompt('What is your hypotetic square side?', 1);
let squareArea = squareSide * squareSide;
let isYouWantAnswer = confirm('Are you want to know square area?');
if (isYouWantAnswer) {
	alert('Your square area is ' + squareArea);
}
else alert('Anyway, I will answer. Your square area is ' + squareArea);
alert('Hooray!');
