let myImage = document.querySelector('img');
myImage.onclick = function() {let mySrc = myImage.getAttribute('src');if(mySrc === 'images/p5r.png') {myImage.setAttribute('src','images/applejuice.png');} else {myImage.setAttribute('src','images/p5r.png');}}
let myButton = document.querySelector('button'); 
let myHeading = document.querySelector('h1');
function setUserName() {let myName = prompt('Please enter your name.'); if(!myName) {setUserName();} else {localStorage.setItem('name', myName); myHeading.textContent = 'Maruki is cool, ' + myName;}}
if(!localStorage.getItem('name')) {setUserName();} else {let storedName = localStorage.getItem('name'); myHeading.textContent = 'Maruki is cool, ' + storedName;}
//! = logical NOT// 
myButton.onclick = function() {setUserName();}