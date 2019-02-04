let productName = 'John\'s hammer',
    price1 = 8,
    price2 = 3.44,
    price3 = '6.88';
//let var = ... is initialization


console.log(productName, price1+price2, price1/price2, price1%price2,
    price3+price1);
//Result: John's hammer 11.44 2.3255813953488 1.12 6.888

let answer1 = 3 + 4*5, answer2 = (3+4)*5;

console.log(answer1, answer2);

answer1 = 8;
console.log(answer1);

answer2 = answer2 * 10;
console.log(answer2);

//Game:Blackjack1
let card1='space', card2='ace';
console.log("You're dealt with: ");
console.log(" " + card1);
console.log(" " + card2);

let value1 = 'apple', value2 = 99.99, value3 = 11.39, value4 = '99';
console.log(value2+value2, value4+value4, value2+value3);
console.log(typeof(value1));
console.log(typeof(value2));
console.log(typeof(value3));
console.log(typeof(value4));

value1 = 4.1 + 4.3;
console.log(value1);
//The result: 8.39999999999999999, not 8.4

value2 = 0/0, value3 = 10/0; value4=-10/0;
console.log(value2, value3, value4);
console.log(typeof(value2));
console.log(typeof(value3));
console.log(typeof(value4));
//NaN, Infinity, -Infinity, are all of type "number".

value1=true;
console.log(value1, typeof(value1));

let saleTax; // initialize the var without assigned value
console.log(saleTax, typeof(saleTax)); 
//Result: undefined "undefined" --> undefined is a data type and its own value.

let saleTax1;
saleTax1 = null;
console.log(saleTax1, typeof(saleTax1)); 
//Result: null ""object" --> null is a type of "object".
//If you don't want to blank out the var, declare it undefined;
//otherwise, blank it out by declaring it as Null object.

let cities = []; //array
console.log(cities);
cities = ['New York', 'Los Angeles', 'Chicago'];
console.log(cities[1]);

//Array Operation
let valueList = [1, 2, 3];
console.log(valueList.length);
valueList.push(45, 6); // Add one or more values into the array
console.log(valueList.length);
console.log(valueList);

let delItem1 = valueList.pop(); // Remove the last item out of the array
console.log(delItem1, valueList);
let delItem2 = valueList.shift(); //Remove the first item out of the array
console.log(delItem2, valueList)
valueList.push(8, 7, 6, 9, 12);
console.log(valueList); //Result: [2, 3, 45, 8, 7, 6, 9, 12]
valueList.splice(2, 1); 
//In (), 1st num is the index starting to be removed.
//2nd num is how many numbers from that index will be removed.
console.log(valueList);
valueList.push(45);
valueList.splice(1, 3);
console.log(valueList);
//Result:  [2, 6, 9, 12, 45]
valueList.splice(1, 2, 56, 68, 88, 89, 96);
//Remove [1] and [2] in array, insert 56, ..., 96 to this gap, not to the end of array.
console.log(valueList); 
//Result:  [2, 56, 68, 88, 89, 96, 12, 45]


//Game:Blackjack2, using Array
let deck = [
    'Ace of Spades',
    'Two of Spades',
    'Three of Spades'
];
let playerCards = [deck[0], deck[2]]
console.log("Your are dealt with: ");
console.log(" " + playerCards[0]);
console.log(" " + playerCards[1]);


//if() statement with True/False conditions
let state='CA', taxRate = 9;
if (false) {
    taxRate = 7;
    console.log(taxRate);
}//not work
if (0) {
    taxRate = 5;
    console.log(taxRate);
}//not work
if (' ') {
    taxRate = 4;
    console.log(taxRate);
}//work, because the space in '' is not empty
if ('') {
    taxRate = 'empty string';
    console.log(taxRate);
}//not work, '', not ' ' with space in it, is an empty string
if (" ") {
    taxRate = 3;
    console.log(taxRate);
}//work
state = '';//OR state = ""
if (state) {
    taxRate = 19;
    console.log(taxRate);
}//empty string is falsy condition
if (null) {
    taxRate = 2;
    console.log(taxRate);
}//not work
if (state === 'CA') {
    taxRate = 5;
    console.log(taxRate);
}//work, three "=" together in the condition
state = 'NY';
if (state !== 'CA') {
    taxRate = 12;
    console.log(taxRate);
}//work, "!===" means 'not equal to' 
let state1;
if (state1) {
    taxRate = 6;
    console.log(taxRate)
}// undefined is falsy condition
let state2 = null;
if (state2) {
    taxRate = 1;
    console.log(taxRate)
};// null is falsy condition
let state3 = 0/0;
if (state3) {
    taxRate = 11;
    console.log(taxRate)
};// NaN, type of "number", falsy condition
if (NaN) {
    taxRate = 6;
    console.log(taxRate)
};//not work
state3 = 10/0;
if (state3) {
    taxRate=16;
    console.log(taxRate);
};//work, Infinity and -Infinity are true conditions.
state3 = 0;
if (state3) {
    taxRate=14;
    console.log(taxRate);
};//not work, number 0 is falsy condition

let score=1200;
if (score >= 1000) {
    score = score - 10;
};
console.log("Your score is "+ score);
console.log("Your score is ", score);//Both expressions work.
//We can print multiple things using the 2nd one, using Comma.

//if, else, else if
score = 900;
//wrong: let score=900; --var "score" has been declared, cannot declare again
if (score > 1100) {
    console.log("Great");
    score += 10;
}
//wrong: if/else if/else is a unit of syntax; if ";" is added to each of them, meaning breaking them and nothing work
// if (score > 1100) {
//     console.log("Great");
//     score += 10;
// }; 
else if (score === 1000){
    console.log("Not bad");
}//Add ";" here, wrong, if no else statement, it'll be fine.
else {
    console.log("Keep working");
};//this ";" is the only ";" available to be added, meaning the end of this whole conditional syntax
console.log("The score is", score);


//switch-case
state = 'MA';
switch(state) {
    case 'NY': 
        console.log('New York');
        break;
    case 'CA':
        console.log('California');
        break;
    case 'MA':
        console.log('Massachusatts');
        break;
    default:
        console.log('Unknown');
        break;
        //Don't forget "break" for each case. Forgetting it, that case won't stop and will fall through the rest cases.
}
//Case default is for all those not in cases above

//With a "break" forgotten:
state = 'ML';
switch(state) {
    case 'NY': 
        console.log('New York');
        break;
    case 'CA':
        console.log('California');
        break;
    case 'ML':
        console.log('I don\'t remember its full name');
    case 'MA':
        console.log('Massachusatts');
        break;
    default:
        console.log('Unknown');
        break;
}//Result: both messages of 'ML' and 'MA' are there, but no default message, because case 'MA' has break.

//for loop
for(let i=0; i <=3; i++) {
    console.log(i);
}//Remember ";" in the for()

//while loop
let value = 1;
while (value <= 6) {
    console.log(value);
    value++;
}

//Game: Blackjack3, using loops
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 
    'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];
deck=[];
for(let suitsIdx=0; suitsIdx<suits.length; suitsIdx++) {
    for (let valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {
        deck.push(values[valuesIdx] + ' of ' + suits[suitsIdx]);
    }
}
console.log("In one deck of cards, there are " + deck.length + " cards.");
for(let i=0; i < deck.length; i++) {
    console.log(deck[i]);
}
playerCards = [deck[0], deck[2], deck[43], deck[12], deck[28]];
console.log("Your are dealt with: ");
for (let i=0; i<playerCards.length; i++) {
    console.log(" " + playerCards[i]);
}

//Functions
function showmessage() {
    console.log('basic of function');
}
showmessage();

function passArg(message) {
    message = message + " let it go~";
    console.log(message);
}//pass one parameter
passArg("The past,");

function pass2Arg(message1, message2) {
    message1 = message1 + " Now is winter~";//You can modify the parameter passed in.
    console.log(message1+"Don't forget " + message2);
}//pass 2 parameters
pass2Arg("Apple", "Peach");//Pass 2 parameters, or 
pass2Arg("Home");//2nd parameter will turn out to display "undefined".

function calculation(value1, value2) {
    let totalSum = value1 + value2 + value1*value2;
    let totalSum2 = value1 / value2;
    return [totalSum, totalSum2];
}//return multiple values, using array
console.log(calculation(3.3, 4));

//Game: Blackjack4, using functions
// suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
// values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 
//     'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];
// function createCards() {
//     let deck = [];
//     for(let suitsIdx=0; suitsIdx<suits.length; suitsIdx++) {
//         for (let valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {
//             deck.push(values[valuesIdx] + ' of ' + suits[suitsIdx]);
//         }
//     }
//     return deck;
// }
// deck = [];
// deck = createCards();

// function getnextCard() {
//     return deck.shift();
// }//No need to pass parameters in. "deck" in the func is the real deck.
// //[array].shift() will return the first one in the array

// console.log("In one deck of cards, there are " + deck.length + " cards.");
// //Result: 50 cards, because card1 and card2 are taken from the 52 cards.
// playerCards = [getnextCard(), getnextCard(), getnextCard()];
// console.log(playerCards);


//Object basics: object is just a thing combining much information
let person = {
    name: 'Jack Lo', //name is a property
    age: 35,
    gender: 'Male'
};//curly bracket 
console.log(person.name);
console.log(person.age);
console.log(person.gender);//the syntax

//Another way to call the property in an object
let apen = {pen1: 'john', pen2: 'ben', pen3: 'susan'};
console.log(apen['pen1']);//why apen[pen1] not available?

//Pass objects to functions
let card={
    suit: 'Hearts',
    value: 'Two'
};
console.log(card.suit);
function changeCard(card) {
    card.suit='Clubs';
}
changeCard(card);
console.log(card.suit);

//Array of objects
deck = [
    {
        suit: "Spades",
        value: "Eight"
    },//with brackets, this is an object in the array
    {
        suit: "Square",
        value: "Five"
    },
    {
        suit: "Hearts",
        value: "Six"
    }
];//an array with 3 objects
console.log(deck[1].suit, deck[2].value, deck.length);

//Built-in Object in Javascript
//Common: Math, Date, String, Number
value3 = Math.random()*52;
console.log(value3);
value3 = Math.trunc(value3);
console.log(value3);
//Math is the object, random() is the function to generate a number between 0 and 1.
//If we want a number from 0-52, times 52.
//To truncate the number, use trunc() function.

value4 = new Date();//Date() is a Date object, which the value is today's date.
console.log(value4);
//Result: Wed Dec 12 2018 17:50:22 GMT-0500 (Eastern Standard Time)
value2 = value4.toDateString();//toDateString() is a function of the Date object "value4"
value1 = new Date().toDateString;//toDateString() is a function of the Date() object.
console.log(value2);
//Result: Wed Dec 12 2018 (a normal form of dates)

value1 = 'Let It Go.';
value1 = value1.toLowerCase();
console.log(value1);
value1 = value1.toUpperCase();
console.log(value1);//String object: pproperties, methods in this object can be used.

value3 = 0/0;
console.log(Number.isNaN(value3));//Result: true
value3 = 2/3;
console.log(Number.isNaN(value3));//Result: false
value3 = 10/0;
console.log(Number.isFinite(value3));//Result: false
//Number object


//Game: Blackjack5, using objects to store a card's info is the right way.
suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 
    'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];
function createCards() {
    let deck = [];//This time, this will be an array holding multiple objects.
    for(let suitsIdx=0; suitsIdx<suits.length; suitsIdx++) {
        for (let valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {
            let card = {
                suit: suits[suitsIdx],
                value: values[valuesIdx]
            }//every loop in this nexted for-loop, a new card object is declared
            deck.push(card);//push an object into the array "deck"
        }
    }
    return deck;
}
deck = [];
deck = createCards();

function getnextCard() {
    return deck.shift();
}//deck.shift() will return the first card object in the array "deck"

console.log("In one deck of cards, there are " + deck.length + " cards.");
playerCards = [getnextCard(), getnextCard(), getnextCard()];//Now, the 3 items in array "playerCards" are objects.
console.log(playerCards);//Result: [{…}, {…}, {…}]  

//Because objects won't be displayed, we need to get the strings(infor) from the card object.
function getCardString(card) {
    return card.value + " of " + card.suit;
}
console.log("Now you are dealt with:");
for (let i=0; i < playerCards.length; i++) {
    console.log(getCardString(playerCards[i]));
}


//Programming for Web Pages: Setting up a Web Page
//Go to web_page.js

//DOM: Document Object Model
//Document is the webpage, but the root document is Window. In Windowm, there's another document "window", which is the web page.
//The webpage #document is like a big object, and in this big object, it contains all the info, in "key:value" mode.
//All the HTML elements are an object, with keys and values.
//After changing something, JQuery will make browser reload everything again, having performing issues sometimes.
//React will create a virtual DOM and reload only the virtual DOM(a copy of real DOM). 
//After reloading, make changes only on that specific key's value in the real DOM.

//DOM is Document Object Model ie your whole document is the hierarchy of objects with Window being the parent of all. 
//It provides a structured representation of the document (a tree) and it defines a way that the structure can be accessed 
//from programs so that they can change the document structure, style and content.


//Constants
const phone = 100;
console.log(phone);

//let is block scoping, var is not block scoping.

//Rest Parameter
//A function's last parameter can be prefixed with ... which will cause all remaining (user supplied) arguments to be placed within 
//a "standard" javascript array. Only the last parameter can be a "rest parameter".
function sendCars(day, ...carIds) {
    carIds.forEach(id => console.log(id));
}
sendCars('Monday', 1, 2, 3, 4);//Result: 1, 2, 3, 4

function sendCars1(...carIds) {
    carIds.forEach(id => console.log(id));
}
sendCars1('Monday', 1, 2, 3, 4);//Result: Monday, 1, 2, 3, 4

// function sendCars2(...carIds, day) {
//     carIds.forEach(id => console.log(id));
// }
// sendCars2('Monday', 1, 2, 3, 4)//Result: SyntaxError -- Rest parameter must be last formal parameter. No comma can be behind the Rest Parameter

//Destructuring Arrays
let gloveIds = [100, 200, 300];

//Error: 2 variables but 3 items in the array "gloveIds"
// let [glove1, glove2] = gloveIds;
// console.log(glove1, glove2);

let [glove1, glove2, ...theRest] = gloveIds;//No need to declare "glove1, glove2" above. Here, declaration and initialization at the same time.
console.log(glove1, glove2, theRest);//Result: 100 200 [300] -- because Rest Parameter is an array.

gloveIds = [100, 552, 349, 990, 1023, 200, 300, 400, 500];
[, , , ...theRest] = gloveIds;
console.log(theRest);//Result: [990, 1023, 200, 300, 400, 500] -- how many commas, skip how many items in an array.

//Destructuring Objects
let gloves = {id:1, owner: 'Ben', year: '2009', color: 'black', material: 'wooden'};
let {id, owner, year, color, material} = gloves;//use curly brackets, declare and initialize at the same time
console.log(id, owner, year, color, material);

//let a, b; --only declare, making them undefined
//({a,b}=what) --assign values later, remember use () outside of {}, however, devlopers won't leave variables undefined.
//So, above, not recommend.

//Spread Syntax: Very similar to Rest Parameters 
//Syntax: myFunction(...iterableObj);
gloveIds = [100, 200, 300]
function spreadExample1(glove1, glove2, glove3) {
    console.log('The spread result is '+ glove1, glove2, glove3);
}
spreadExample1(...gloveIds);

gloveIds = [100, 552, 349, 990, 1023, 200, 300, 400, 500];
function spreadExample2(glove1, glove2, glove3, ...glove4) {
    console.log('The spread result is '+ glove1, glove2, glove3, glove4);   
}
spreadExample2(...gloveIds);
//In this exampple, spread the elements in array "gloveIds" to variables where Rest Parameter is one parameter. Like, spread items and regroup them.
//glove4 is an array, the first 3 variables are numbers.

gloveIds = 'abcdef';
spreadExample2(...gloveIds);//string is iterables.

console.log(typeof(spreadExample1), typeof(gloves), typeof({}));

//Common Type Conversions
//foo.toString(); Number.parseInt(); Number.parseFloat(); Here, Number is an object.
//parseInt and parseFloat will parse the first interger or float out. If 1st is not a number but strings, will parse nothing.
console.log(Number.parseInt('86'), typeof(Number.parseInt('86')));//86 "number"
console.log(Number.parseInt('86.88'), typeof(Number.parseInt('86.88')));//86 "number"
console.log(Number.parseFloat('86.93'), typeof(Number.parseFloat('86.93')));//86.93 "number"
console.log(Number.parseInt('86evs'), typeof(Number.parseInt('86evs')));//86 "number"
console.log(Number.parseFloat('8.98df'), typeof(Number.parseFloat('8.98df')));//8.98 "number"
console.log(Number.parseInt('fg86evs'), typeof(Number.parseInt('fg86evs')));//NaN "number"
console.log(Number.parseInt('36fg86evs'), typeof(Number.parseInt('36fg86evs')));//36 "number"

//Equality Operators
console.log(1 == 1);//true
console.log(1 == "1");//true: double = converts number to string
console.log(1 === "1");//false: triple = doesn't convert data type
console.log(1 != '1');//false: for !=, data type is not checked, so they're equal, but the statement says, they are not equal, which is false.
console.log(1 !== "1");//true

//Unary Oeprators: operate on one variable/value
glove1 = 30;
console.log(++glove1);//31
glove2 = 48;
console.log(glove2++);//48 -- plus 1 after printing out the original number
console.log(glove2);//49
glove1 = '30'; 
console.log(+glove1,typeof(+glove1));//30 number -- "+" converts a string to a number
console.log(-glove2);//-49 -- change the sign of a number, neg to pos, or pos to neg
console.log(-glove1);//-30 -- a string's sign can be changed too
let glove3 = 59;
console.log(--glove3);//58
console.log(glove3--);//58 -- minus 1 after printgin out the original value
console.log(glove3);//57

//Logical (Boolean) Operators: the result is a boolean value
if (5 === 3 && 3 ===7) {
    console.log(true);
}// && means "and"
else {console.log(false);}//false

if (5 === 5 && 3 ===7) {
    console.log(true);
}
else {console.log(false);}//false

if (5 === 5 && 3 === 3) {
    console.log(true);
}
else {console.log(false);}//true


if (5 === 5 || 3 ===7) {
    console.log(true);
}// || means "or"
else {console.log(false);}//true


if (48 === 48 || 5 === 8 && 3 ===7) {
    console.log(true);
}
else {console.log(false);}//true: && has precedence, will consider 5===5 && 3===7 as a group

if ((48 === 48 || 5 === 8) && 3 ===7) {
    console.log(true);
}
else {console.log(false);}//false

//Logical Operators not in conditonal statement
glove1=null;//if the value is null or undefined, boolean value is false/0.
glove2 = {default: 'mine'};
console.log(glove1 || glove2);//{default: 'mine'}
console.log(glove1 && glove2);//null
console.log(glove2 && glove1);//null
glove3 = {user: 'someone'};
console.log(glove2 || glove3);//{default: 'mine'}
console.log(glove3 || glove2);//{user: 'someone'} -- for ||, take the first value
console.log(glove2 && glove3);//{user: 'someone'}
console.log(glove3 && glove2);//{default: 'mine'} -- so for &&, take the latter's value

console.log(!glove1);//true -- not null is true
glove1 = 3;
console.log(!glove1);//false

//Relational Operator: <, >, <=, >=
glove1='Zoo', glove2='alphabet';
if(glove1<glove2) {
    console.log('Original: less than, true');
}
else {console.log('Original: less than, false');}//Result: true
//Strings use ASCII code. And all uppercase letters are smaller than lowercase ones. 

console.log(glove1.toUpperCase());//Result: ZOO
console.log(glove1.toLowerCase());//Result: zoo -- these are functions converting lowercase and uppercase, functions!
if(glove1.toUpperCase() < glove2.toUpperCase()) {
    console.log('Change to uppercase: less than, true');
}
else {console.log('Change to uppercase: less than, false');}//false: Z > A in ASCII code

//Conditional Operator
console.log(('Zoo' > 'ALphabet')? 'yes' : 'no');//Result: yes
//syntax: (condition for checking) ? 'true value' : 'false value';

//Assignment Operators: +=, -=, *=, /=, %=, >>=
glove1 = 1984;
glove1 /= 2;
console.log(glove1);//Result: 992
glove1 = 1984; 
glove1 %= 3;
console.log(glove1);//Result: 1
glove1 = 1984; 
glove1 %= 5;
console.log(glove1);//Result: 4 -- %/ is for remainder

glove1 = 1984; 
glove1 <<=1;//shift bit to left
console.log(glove1);

glove1 = 1984; 
glove1 >>=2;//shift bit to right
console.log(glove1);//496 = 1984/4

//Operator Precedence: which operator executes first -- MDN operator precedence table

//Functions: Phase 2 -- scope
function startCar(carID) {
    let message = carID;
    let startFn = function turnKey() {
        let message = 'Override';
        console.log(message);
    }//can declare a variable as a function
    startFn();
    console.log(message);
}//A function will look up in its parent function for the variable.
startCar(234);//Result: Override 234

//IIFE: Immediately Invoked Function Expression
//Run as soon as it is defined
//Syntax: (function () {statements}) ();
let result = (function () {
    let name = 'Barry';
    return name;
}) ();
console.log(result);

(function () {
    console.log("This is IFEE pattern.\nRemember to put () out of the function.");
}) ();
//Note: All the variables used inside the IFEE are not visible outside its scope.

//Closure
//Def: A closure is the combination of a func and the lexical environment within which that function was declared. 
//In this way, you can associate the data outside of the function.
glove1 = (function() {
    let carid = 123;
    let getid = function() {
        return carid;//this function will look up in the parent function for carid's value.
    }//assign a function to getid
    return {getid: getid}
}) ();
console.log(glove1);//Result: {getid: f} 
console.log(glove1.getid);//result: f() {return: carid;}
console.log(glove1.getid());//Finally this code calls the function/method getid(), and access the value of carid.

//The This keyword
//MDN -- A function's this keyword has some differences between strict mode and non-strict mode.
//In most cases, the value of this is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called. 

glove2 = {
    prop: 42,
    func: function() {
        console.log(this);//Result: {prop: 42, func: f} -- bound in this object, "this"
        // return prop; -- this one, cannot access value for "prop" 
        return this.prop;
    }
}
console.log(glove2.func());//Result: 42
//No need to use "this" if this is a closure.

//Global Context:
//In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.

// In web browsers, the window object is also the global object:
console.log(this === window); // true

let a = 37;
console.log(window.a); // 37

let b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"

//Function Context:
//Inside a function, the value of this depends on how the function is called.
function f1() {
    return this;
  }
  
// In a browser:
console.log(f1() === window); // true 
//Since the code is not in strict mode, and because the value of this is not set by the call, this will default to the global object, which is window in a browser. 

//"this" is an object

//To pass the value of this from one context to another, use call(), or apply():
// An object can be passed as the first argument to call or apply and this will be bound to it.
glove3 = {glove2: 'Custom'};
  
// This property is set on the global 
// glove2 = 'Global';
function whatsThis() {
    return this.glove2;  // The value of this is dependent on how the function is called
}

// console.log(whatsThis());          // 'Global'
console.log(whatsThis.call(glove3));  // 'Custom'
console.log(whatsThis.apply(glove3)); // 'Custom'
//Where a function uses the this keyword in its body, its value can be bound to a particular object in the call using the call() or apply() methods

//Call and Apply for function call
//"this" object is in the context object for a function

glove1 = {
    gloveId: 345,
    getGloveId: function() {
        return this.gloveId;
    }
}
let glove4 = {gloveId: 894};

console.log(glove1);//Result: {gloveId: 345, getGloveId: f} -- display the "glove1" object
console.log(glove1.gloveId);//345
console.log(glove1.getGloveId);//f() {return this.gloveId;} -- display the function definition
console.log(glove1.getGloveId());//345 -- execute the getGloveId function

console.log(glove1.getGloveId.call(glove4));//894 -- Change the value from 345 to 894. This is the way to use "this" in a different object's context. "glove4" in call() is to say use this context, including data in it.

glove2 = {
    gloveId: 778,
    gloveOwner: 'Jason',
    getGloveId: function(prefix1, prefix2) {
        return prefix1 + prefix2 + this.gloveId;
    },
    getGloveOwner: function() {
        return this.gloveOwner;
    }
}
glove3 = {gloveId: 672, gloveOwner: 'Zoe'};

console.log(glove2.getGloveId.apply(glove3, ['id ','is ']));//id is 672
//apply() is similar to call(), except that apply() accepts passing an array of arguments to the function. 
//Syntax: apply(contextDesired, [array of arguments])
console.log(glove2.getGloveOwner.apply(glove3));//Zoe

console.log(glove2.getGloveId.call(glove3, 'id ','is '));//id is 672 -- call() no need to use array to contain arguments of the function

//bind()
//Calling f.bind(someObject) creates a new function with the same body and scope as f, but where this occurs in the original function, in the new function it is permanently bound to the first argument of bind, regardless of how the function is being used.

glove1 = {
    gloveId: 345,
    getGloveId: function() {
        return this.gloveId;
    }
}
glove4 = {gloveId: 894};

let glove5 = glove1.getGloveId.bind(glove4);
//Above, function "getGloveId" is copied and glove4 is assigned to "this" as a new context by bind(), and glove5 is a new function of the same body and scope as the funciton property in object "glove1".
console.log(glove5());//894

//call() and apply() only call an existing function and change the value(context) of "this" in the function property, but bind() CREATES a new function by copying it and assign a new context.
glove3 = glove5();
console.log(glove3);//894

//Arrow Function
//The functions does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

glove5 = () => 123;//Behind the arrow, it's the return value.
console.log(glove5());//123

glove5 = prefix => prefix + 123;//only passing 1 parameter, no need to use ()
console.log(glove5('ID: '));//ID: 123

glove5 = (prefix, suffix) => prefix + 123 + suffix;//Passing 2 or more, need ()
console.log(glove5('ID: ', '...'));///ID: 123...

glove5 = (prefix, suffix) => {prefix + 123 + suffix};
console.log(glove5('ID: ', '...'));//undefined -- with {}, must have 'return' keyword

glove5 = (prefix, suffix) => {return prefix + 123 + suffix};
console.log(glove5('ID: ', '...'));///ID: 123...
//In the curly bracket, can do more things than just returning values

glove5 = _ => 123 + _;//underscore signifies a variable, which is popular in today's coding
console.log(glove5(3));//126

//Default Parameters
//Assign the default value if the user doesn't pass a value for that argument

glove1 = (gloveId, city='NY') => console.log(`Tracking ${gloveId} in ${city}.`);//Interpolation

console.log(glove1(452));//Tracking 452 in NY. -- because no value is assigned to city, "NY" is appplied.
console.log(glove1(458, 'Boston'));//Tracking 452 in Boston.

//Interpolation: Template Strings
//Template literals are string literals allowing embedded expressions.
//Use back-tick(``) character instead of '' or "".

console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"

console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

//Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). The expressions in the placeholders and the text between them get passed to a function. 
glove2 = 5;
glove3 = 10;
console.log(`Fifteen is ${glove2 + glove3} and
 not ${2 * glove2 + glove3}.`);
// "Fifteen is 15 and
//  not 20."

//Contructor Functions
//Instantiate new object. Use "this" keyword to access the context of the object. Properties and methods should be stored in "this"

function Glove(gloveId, gloveOwner, year) {
    this.gloveId = gloveId,
    this.gloveOwner = gloveOwner,
    this.year = year,
    this.showInfo = function() {
        console.log('The glove with id ' + this.gloveId + 'is owned by ' + this.gloveOwner + ' from ' + year);//don't forget "this"
    }
}//use Capital letter in function name as convention of constructor

glove1 = new Glove(3, 'Robert', 1998);//"new" keyword will build a brand new Glove object.

//Glove(); -- this normal function call doesn't apply to constructor function
console.log(glove1.gloveId, glove1.gloveOwner, glove1.year);
glove1.showInfo();//call the object's method

//You can assign values later, not passing them when instantiating a new object.
glove2 = new Glove();
glove2.gloveId = 5;
glove2.gloveOwner = 'Liz';
glove2.year = 2003;
glove2.showInfo();

//You can add a property to the specific object
glove2.price = '$89';
console.log(glove2);

//Creating a user-defined object requires two steps: 1)Define the object type by writing a function. 2)Create an instance of the object with new.

//To define an object type, create a function for the object type that specifies its name and properties.

//Proptotypes
//Example above, function is included in the constructor. If 10000 Glove objects are created, 10000 showInfo() functions are taken memory space, which is a waste.

//Modification

function Earbud(earbudId, earbudOwner, year) {
    this.earbudId = earbudId,
    this.earbudOwner = earbudOwner,
    this.year = year
}

//Prototype comes in:
Earbud.prototype.showInfo = function() {
    console.log('The glove with id ' + this.earbudId + ' is owned by ' + this.earbudOwner + ' from ' + year);};//don't forget "this" for reference to the object

let earbud1 = new Earbud(45, 'Harrison', 1999);//a new Glove object is created.
earbud1.showInfo();

//With prototype, we can add methods directly to earbud and use them on any object.

//Expanding Objects Using Prototypes
String.prototype.hello = function() {
    console.log(this.toString() + ' Hello');
};//Add a new method to built-in JS String object
'style'.hello();
//style Hello

//JSON -- JavaSript Object Notation
//JSON (in Javascript) is a string!
//In the context of data storage, serialization (or serialisation) is the process of translating data structures or object state into a format that can be stored (for example, in a file or memory buffer) or transmitted (for example, across a network connection link) and reconstructed later (possibly in a different computer environment).
let earbud2 = {
    id: 123,
    style: 'wireless'
};
console.log(JSON.stringify(earbud2));
//{"id":123,"style":"wireless"}
//The property names are in double-quotes "".
//If we want to send this object to some endpoints of Web, we would want to convert it into JSON.


//stringify()
let earbud3 = [
    {earbudId: 123},
    {earbudId: 345},
    {earbudId: 456}
]
console.log(JSON.stringify(earbud3));
//[{"earbudId":123},{"earbudId":345},{"earbudId":456}]


//parse(): return value = the Object corresponding to the given JSON text.
let jsonInEarbud4 = `[
    {"earbudId":123},
    {"earbudId":345},
    {"earbudId":456}
]`
let earbud4 = JSON.parse(jsonInEarbud4);
console.log(earbud4);
console.log(earbud4 === earbud3);//false

let jsonInEarbud5 = '[{"earbudId":123},{"earbudId":345},{"earbudId":456}]'
let earbud5 = JSON.parse(jsonInEarbud5);
console.log(earbud5);
console.log(earbud5 == earbud3);//false

//Array Iteration
earbud3[0].owner = 'John';
console.log(earbud3[0]); //{earbudId: 123, owner: "John"}

let name = ['James','Tony','Micky'];
[earbud3[0].owner, earbud3[1].owner, earbud3[2].owner] = name;//Destructuring Array
console.log(earbud3);
//0: {earbudId: 123, owner: "James"} 1: {earbudId: 345, owner: "Tony"} 2: {earbudId: 456, owner: "Micky"} length: 3__proto__: Array(0)

//forEach is a method of array object.
earbud3.forEach(item => console.log(item));//__proto__: object
earbud3.forEach((item, index) => console.log(item, index));
//earbud3.forEach(item => console.log(item, index)); -- not work

earbud3.push({earbudId:893, owner:'Penny'}, {earbudId:783, owner: 'Sussy'}, {earbudId:682, owner:'Olivia'}, {earbudId:158, owner:'Penny'}, {earbudId:374, owner:'Tony'}, {earbudId:421, owner:'James'});//push() can add more than 1 items into array
console.log(earbud3.length);//9

//filter is method of array object
let earbud = earbud3.filter(item => item.owner === 'Tony');//item is an object in the array
console.log(earbud);
//0: {earbudId: 345, owner: "Tony"}
//1: {earbudId: 374, owner: "Tony"}
//length: 2 -- result is an array

earbud = earbud3.filter(bud => bud.earbudId > 500);
console.log(earbud);

//every method
//Return value: true if the callback function returns a truthy value for every array element; otherwise, false.
result = earbud3.every(earbud => earbud.earbudId >0);
console.log(result);//true -- this is a way to test the whole array

//find()
//returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
earbud = earbud3.find(bud => bud.earbudId >= 400);
console.log(earbud);//{earbudId: 456, owner: "Micky"}

result = earbud3.find(bud => bud.earbudId > 500);
console.log(result.owner);//Penny
console.log(result);//{earbudId: 893, owner: "Penny"}

//Class Basics
//Keyword "new" can instantiate a new instance of an object and a new object of a class.
class Horse {
    //Class Constructor:
    constructor(id, age) {
        this.id = id;//this keyword is needed.
        this.age = age;
    }
    //Method:
    identify() {
        return `This horse, of id: ${this.id}, is at age of ${this.age}.`;//use back-tick
    }//function in a class no need to use "function" keyword, because it's class method.
}
let horse1 = new Horse(234, 5);
console.log(horse1);//Horse {} -- __proto__: Object
console.log(horse1.age);
horse1.id = 356;
console.log(horse1.identify());

//Inheritance: avoid duplicating code
//This is a super class, or a base class. Other child classes will extend this one.
class Vehicle {
    constructor() {
        this.type = 'car';
    }
    start() {
        return `Starting: ${this.type}`;
    }
}//first letter of the class name is UPPERCASE

class Vehicle1 {
    //A new. class declaration not inheriting from Vehicle
}//nothing

let vehicle1 = new Vehicle1();// This is not the object of class Vehicle.
console.log(vehicle1);//Vehicle1 {} -- nothing

class Car extends Vehicle {
    //You put nothing here, but it inherits everything from Super class "Vehicle".
}
let car = new Car();
console.log(car.type);//car

class Car1 extends Vehicle {
    constructor() {
        //if you want to define a constructor in this Derived class "Car1", 
        //but do it in a normal way, just like the super class, get an error.
        //ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor.
        //Solution is:
        super();
        //this is a special method, calling the super class's constructor
    }
}//"extends" means inheriting from super class Vehicle.
let car1 = new Car1();
console.log(car1.type);//car -- after calling super() in Car1

//Call the functions in Super Class
class Car2 extends Vehicle {
    start1() {
        return "This, start1(), is a function of the Derived Class";
    }
    start2() {
        return "Now, start2() is a function adding \nthe start() from super class-- "
        + super.start();//calling super.func from Super Class
    }
}
let car2 = new Car2();
console.log(car2.start1());
console.log(car2.start2());

class EarbudClass {
    //Here, constructor is like the default value
    constructor() {
       this.id= 0;//though this is a constuctor and a constructor is a function, it's of Class, not of Object, thus use ";", not using "," between the properties
       this.type = 'unknown';
    }
    insertInfo(id, type) {
        this.id = id;
        this.type = type;
        return `Earbud id: ${this.id}; type: ${this.type}`;
    }
}
//Note: "class ClassName {}" is the syntax for class declaration. It doesn't accept parameters after the class name via "()".
//Thus, class EarbudClass(a, b) {...} is SyntaxError.

earbud1 = new EarbudClass();//This only instantiates the class EarbudClass 
console.log(earbud1.id, earbud1.type);//0 "unknown" -- default value

earbud1.insertInfo(22, "wireless");
console.log(earbud1.id, earbud1.type);//22 "wireless" -- values changed by the func "insertInfo"

class EarbudClass1 extends EarbudClass {
    constructor(brand) {
        super();
        this.brand = brand;      
    }
    insertInfo1(id, type) {
        //pass arguments to derived class's method, but not to the super class's method
        return super.insertInfo();
    }
    insertInfo2(id, type) {
        //Pass arguments to both methods in derived class and in super class
        return super.insertInfo(id, type);
    }//remember to use "super."
}
earbud2 = new EarbudClass1('Heyday');//instiantiate the child class of class EarbudClass1

console.log(earbud2.id, earbud2.type, earbud2.brand);//0 "unknown" "Heyday"
console.log(earbud2.insertInfo1(98, 'Bluetooth-wireless'));//Earbud id: undefined; type: undefined
console.log(earbud2.insertInfo2(98, "Bluetooth-wireless"));//Earbud id: 98; type: Bluetooth-wireless
console.log(earbud1.brand);
//Result: undefined -- because no "brand" property is defined from the super class EarbudClass.

//Modules: organize the code
//export the module -- see file in folder "tutorial/module_computer.js"
import { Computer, Computer1, computer1 } from './module_computer.js';
console.log(computer1.id, computer1.type, computer1.brand);//0 "unknown" "Unknown"
console.log(computer1.insertInfo(86, "Laptop", "Microsoft"));
//Result: Computer id: 86; type: Laptop; brand:Microsoft

//Programming the BOM and DOM
//The Window Object--Browser Object Model: It has some properties(DOM, Location Object, console), methods and events(not common in BOM)

console.log(innerWidth);
console.log(innerHeight);//These are properties of the browser screen, returning the width and height of the screen.

//Timers
//The window object allows execution of code at specified time intervals. These time intervals are called timing events.
let timeOutId = setTimeout(function() {alert('bobobo')}, 5000);
//In order to clear it, assign it to a variable first.
//No need to call this function, it's called by itself, even it's part of the assignment.
clearTimeout(timeOutId);

//setInterval(func, timer) and clearInterval(setIntervalId) is in 'trial.html'
let myTimer1=setInterval(countTime1, 1000);
function countTime1() {
    let testDate = new Date();
    alert(testDate.toLocaleTimeString("zh-Hans-CN"));
}
clearInterval(myTimer1);

//So, we can put the function name in setInterval() and setTimeout(), and define the function later, or just put the entire function in the parentheses.

//Location Object
//The location object contains information about the current URL. The location object is part of the window object and is accessed through the window.location property.
console.log(location.href);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.pathname);
console.log(location.protocol);//The protocol is a standard that specifies how data are transmitted between computers.
console.log(location.search);
//Above are the properties of location object.

//assign(), reload() are methods of location object model.

//Modify DOM Elements
let element1 = document.getElementsByTagName('p');
let element2 = document.getElementsByClassName('controller');
let element3 = document.getElementById('demo-CHN');
console.log(element1, element2);//each element is an array
element2[0].setAttribute('label', 'stop-button');
console.log(element2[0]);
element3.classList.add('clock');
console.log(element3);
element2[1].style.color='blue';
element1[0].textContent='Time is ';
// These modifying methods can be applied only to one element, not an array of elements

//Promises and Error Handling
//When error occurs, JS code stop executing.
//Example below: console.log() won't work
// let ser = new Serverst;
// console.log('continue')

try {
    let ser = new Serverst;
}
catch(error) {
    console.log('Error: ', error);
}//print the error thrown from the browser
finally {
    console.log('No matter an error is caught or not, keep running the script.')
}//finally block will run no matter an error is thrown by try block or not.

try {
    earbud4 = 3;
}
catch(error) {
    console.log('Error: ', error);
}//In this one, catch messgae doesn't print.
finally {
    console.log('No matter an error is caught or not, keep running the script.');
}

//Developer defined error
try {
    throw new Error('earbud4 is equal to 3');//use keyword: throw
}//Error is a built-in JS object
catch(error) {
    console.log('Error: ', error);
}//Remember the syntax is: catch(error) {}
finally {
    console.log('No matter an error is caught or not, keep running the script.');
}
//throw: throw an exception which can be JS string, number, boolean or object.

//Callback function: A callback is a function that's to be executed after another function has finished executing. Any function that's passed as an argument is called a callback function.

//Create a Promise
//You can think Promise as a holder for values that you'll retrieve once the async operation completes.
let promise = new Promise(
    (resolve, reject) => setTimeout(reject,1000,'someValue')//resolve and reject are functions
)
//Promise is a built-in JS object.
console.log(promise);
//Result:
//__proto__: Promise[[PromiseStatus]]: "resolved"[[PromiseValue]]: "someValue"

let promise1 = new Promise(
    (resolve, reject) => setTimeout(reject, 1000, 'someValue')
)
console.log(promise1)

//Settling a Promise
promise.then(
    value => console.log('fulfilled ' + value),
    error => console.log('Rejected ' + error)
)//The log result will change based on the setTimeout function has a "reject" or "resolve" param passed in.

//then() is a function, the functions passed in the () are parameters, so use "," between these function parameters.

//Data Access Using HTTP
//Data Access Using XHR, Jquery
//XHR: XML HTTP Request. XML and JSON are 2 text file formats.
//JQuery: import $ from 'jquery' --> let promise = $.get()
//Example: 
// import $ from 'jquery'

// let promise3 = $.get('https://astrologyapi.com/')
// promise3.then(
//     value => console.log('success: ', value),
//     error => console.log('Error: ', error)
// )