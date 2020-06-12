// JavaScript Document

//1.)  find two different ways to target the first section element on the page. Use console.log to check. Put a comment with the word faster by the method that targets the element more quickly and efficently. 
let fir_sec = document.querySelector('section');
console.log(fir_sec);
let fir_sec_2 = document.querySelectorAll('section')[0];
console.log(fir_sec_2);
let h2 = document.querySelector('h2');
let parentNode = h2.parentNode;
console.log(parentNode);

//2.)  Target the footer element. Use console.log to check 
 let footer = document.querySelector('footer');
 console.log(footer);

//3.)  Target all elements with the class or orange and change the text in these elements orange 
let Class = document.querySelectorAll('.orange');
console.log(Class);
Class.textContent = 'orange';
let p1 = document.querySelector('p');
p1.textContent = 'orange';
let p3 = document.querySelectorAll('p')[2];
p3.textContent = 'orange';

//4.) Target all section elements and console log 
let section = document.querySelectorAll('section');
console.log(section);

//5.) Find two ways to target the second section element 
let section2 = document.querySelectorAll('section')[1];
console.log(section2);
let para = document.querySelectorAll('p')[2];
let previousSibling = para.previousElementSibling;
console.log(para,previousSibling);
let para2 = document.querySelector('p');
let nextSibling = para2.nextElementSibling;
console.log(para2,nextSibling);