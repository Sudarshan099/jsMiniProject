let titleElement = document.getElementById('title');
let content=titleElement.textContent;

let contentElements = document.getElementsByClassName('content');
console.log(contentElements);
// console.log(contentElements(0).textContent);
// console.log(contentElements(0).innerHTML);

let listItemElements = document.getElementsByTagName('li');
console.log(listItemElements);

console.log(content)
content="hello chatGPT"
console.log(content)

const paragraphElement = document.querySelector('.content');
paragraphElement.innerHTML = 'this is a <strong>modified</strong> paragraph';


//accessing attributes using DOM properties
var inputElement = document.getElementById("myInput");
console.log(inputElement.type);
console.log(inputElement.value);

//modifying attributes using DOM Properties
inputElement.value = "New Value"
console.log(inputElement.value);

//using getAttribute() and setAttribute() methods
var inputElement = document.getElementById("myInput");
console.log(inputElement.getAttribute("value"));

inputElement.setAttribute("value","NEw Sudarshan");
console.log(inputElement.getAttribute("value"));

//checking attribute
var element= document.getElementById("myInput");
if(element.hasAttribute("type")) {
    console.log("Exist")
} else {
    console.log("Doesn't Exit")

}


//create elements

const newElement = document.createElement('div');
newElement.textContent = 'Newly created element';

const bodyElement = document.body;
bodyElement.appendChild(newElement);