var myImage = document.querySelector('img');

myImage.onclick = function() {
    
    var mySrc = myImage.getAttribute('src');
    if( mySrc === 'images/piggy-bank.png') {
        myImage.setAttribute('src','images/piggy-bank2.jpg');
    } else {
        myImage.setAttribute ('src', 'images/piggy-bank.png');
    }
    
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Piggy Banking is cool, ' + myName;
    
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Piggy Banking is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}