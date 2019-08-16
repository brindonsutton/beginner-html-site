let myImage = document.querySelector('img');
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/polar-bear-1.jpg') {
      myImage.setAttribute ('src','images/polar-bear-2.jpg');
  } else{
      myImage.setAttribute ('src','images/polar-bear-1.jpg');
  }
} //changes the bear image when it is clicked

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Polar bears are cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Polar bears are cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
