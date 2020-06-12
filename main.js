// JavaScript Document

//1.) Using ol as your starting element, target the first li element 
let startElement = document.querySelector('ol');
let firstChild = startElement.firstElementChild;
console.log(firstChild);

//2.) using main as your starting element, what is the last child? console.log to check it out 
let startElement2 = document.querySelector('main');
let lastChild = startElement2.lastElementChild;
console.log(lastChild);


//3.) using html as your starting element, what is the last Element child? Console.log to check it out. 
let startElement3 = document.querySelector('html');
let lastChild2 = startElement3.lastElementChild;
console.log(lastChild2);


//4.) using the second li element as your starting element, target the next li element and change the colour to purple. 
let startElement4 = document.querySelectorAll('li')[1];
let nextElement = startElement4.nextElementSibling;
nextElement.innerHTML = '<font color = "Purple">The Persian.</font>';