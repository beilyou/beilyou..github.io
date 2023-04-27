let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector("img");

myImage.onclick = function(){
    let mysrc = myImage.getAttribute('src');
    if(mysrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src','images/logo_new.jpg');
    }else{
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
  }
  

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }