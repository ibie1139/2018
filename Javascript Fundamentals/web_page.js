
//Task1: Click button "Task 1", then the text in paragraph and in the button are changed.

//How Javascript accesses the HTML file-- let paraText : HTMLElement
let paraText = document.getElementById('p_content');
let okButton = document.getElementById('ok_button'); 
//Access the element by declaring a var, this var is a HTMLElement.

okButton.addEventListener('click', function() {
    paraText.innerText = 'The end of year is coming. Hope you are happy in the last days.';
    //innerText is a property of this HTMLElement. Property is key of object, so HTMLElement is an object.
    okButton.innerText = 'Clicked';
});
//addEventListener is the method for this object "okButton". It listens the event "click" and execute the function.
//The function is an arg passed into the method "addEventListener", and only "function()" is needed.


//Task2: Expand the <ol> list of packages after clicking "Expand" button and delete all dots before the list items.
let hideList = document.getElementById('list_pack');
let expandBttn = document.getElementById('expand_button');
let navigation = document.getElementById('list_nav');

expandBttn.addEventListener('click', function() {
    hideList.style.display = 'block';
    //".style" is CSS style declaration, accessing CSS sheet
    navigation.style.listStyleType = 'none';
});
//To display or not display an element, access CSS sheet via "style" property from Javascript
//After "style", followed by "display" property in a regular CSS sheet


//Task3: Add a new paragraph in #div1
var newPara = document.createElement('p');
var newText = document.createTextNode("Best Buy News-- Great new deals every day. \
Get in on some of our lowest prices of the season before they're gone.");
newPara.appendChild(newText);

let parentBox1 = document.getElementById('div1');
let addButton = document.getElementById('add_new_content');
addButton.addEventListener('click', function() {
    parentBox1.appendChild(newPara);
});
//Elements and texts are both nodes --> child of a parent node


//Task4: Insert "Projects" before Pseudo Streets in the list and check the box
let optionAddBtn = document.getElementById('add_option');
let optionChoices = document.getElementById('option_list');
let checkBox = document.getElementById('check_box'); 

optionAddBtn.addEventListener('click', function() {
    checkBox.checked = true; //this is how to check a checkbox, by "checked" state
    var newItem = document.createElement('LI');
    var itemText = document.createTextNode('Projects');
    newItem.appendChild(itemText);
    optionChoices.insertBefore(newItem, optionChoices.childNodes[7]);
    //The child nodes(elements or text) in object optionChoices, are tags/elements and the text.
    //e.g. <li>happy</li> --2 child nodes, one element <li></li>, one text node
    //They are contained in 'optionChoices', and the first child is of index 0.
});
// <button> has Click event and triggers actions on other things.
// <input type='checkbox> is a way to input value, that's its identity and function.
// Though a button and a checkbox are both clicked by mouse, the event for checkbox is not 'click'.
//By identity, from uncheck to check is a state's change.


//Task5: Calculate and see the new thing about "+="
let calBttn = document.getElementById('calculate');

calBttn.addEventListener('click', function() {
    var totalSum = '';
    let parentBox2 = document.getElementById('div2');
    

    // let result = document.createTextNode('')
    for (let i=0; i <= 5; i++) {
        let resultLine = document.createElement('P');
        totalSum += "bingo " + "great_" + i;
        let result = document.createTextNode(totalSum);
        resultLine.appendChild(result);
        parentBox2.appendChild(resultLine);
    };
    calBttn.innerText = 'Done';
});
//This code -- totalSum += "\nbingo " + "great_" + i; -- no line break, because '\n' only works for string, not source code.
//code: let resultLine = document.createElement('P'); -- works when it's in the for loop, making the things 'line breaks'
//not work when it's outside of the for loop.
//Add '<br>' in the string content -- not work


//Task6: Redo Task5 in another way, using innerHTML and <br>
let calBttn1 = document.getElementById('calculate1');

calBttn1.addEventListener('click', function() {
    var totalSum = '';
    let parentBox3 = document.getElementById('div3');

    // let result = document.createTextNode('')
    for (let i=0; i <= 5; i++) {
        totalSum += "bingo " + "great_" + i + ' ';
        parentBox3.innerHTML = totalSum + '<br>';
    };
    calBttn1.innerText = 'Done';
});
//Result: bingo great_0 bingo great_1 bingo great_2 bingo great_3 bingo great_4 bingo great_5 


//Task 7: Redo Task5 and reformat Task6, then see the difference
let calBttn2 = document.getElementById('calculate2');

calBttn2.addEventListener('click', function() {
    var totalSum = '';
    let parentBox4 = document.getElementById('div4');

    // let result = document.createTextNode('')
    for (let i=0; i <= 5; i++) {
        totalSum += "bingo " + "great_" + i + ' ';
        parentBox4.innerHTML += totalSum + '<br>';//Set HTML content to something else
    };
    calBttn2.innerText = 'Done';
});
//This is what I want.
//Use innerHTML, we can add HTML elements in form of string.