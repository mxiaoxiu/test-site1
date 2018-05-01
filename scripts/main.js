// var myHeading = document.querySelector('h1');
// myHeading.innerHTML = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox1.jpeg') {
      myImage.setAttribute ('src','images/firefox2.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox1.jpeg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML =myName+ '旅游攻略' ;
}


if(!localStorage.getItem('name')) {//如果name不存在的话，则使用函数来创建

  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = storedName+'旅游攻略' ;
}

myButton.onclick = function() {
  setUserName();
}