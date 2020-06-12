// JavaScript Document

//1.) Add a new paragraph to the page
let main = document.querySelector('main');
let newPara = document.createElement('p');
main.appendChild(newPara);
//let text = document.createTextNode('Hello World');
//newPara.appendChild(text);
//console.log(newPara);
newPara.textContent='Hello World!!!!!';


//2.) Remove the class attribute on the header element 
let Class = document.querySelector('.coolcat');
console.log(Class);
let parent = document.querySelector('body');
parent.removeChild(Class);

//3.) Change the src attribute in the image element to 'cat2.jpg'
let image = document.querySelector('img');
console.log(image);
image.setAttribute('src','assets/cat2.jpg');

// Changing image on click!!

image.addEventListener('click', changeImage);

function changeImage()

{let mySrc=image.getAttribute('src');

 if(mySrc==='assets/cat1.jpg') {
   image.setAttribute ('src' , 'assets/cat2.jpg');
  }
  else {
    image.setAttribute ('src' , 'assets/cat1.jpg');
   }
 }
//4.) Remove the footer element 
let footer = document.querySelector('footer');
let parent2 = document.querySelector('body')
parent2.removeChild(footer);

//5.) Add an h3 into the header 
let head = document.querySelector('head');
let header = document.createElement('header')
head.appendChild(header);
let newheading = document.createElement('h3');
console.log(newheading);
header.appendChild(newheading);

