// DOM Manipulation

// GetElementById()
// const title = document.getElementById('main-heading');
// console.log(title);

// //GetElementByClassName()

// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem);

// //getElementByTagName()
// const container = document.getElementsByTagName('div');
// console.log(container);

// // querySelector()
// const myContainer = document.querySelector('div');
// console.log(myContainer);

// //querySelectorAll()

// const myContainer_ = document.querySelectorAll('div');
// console.log(myContainer_);
// const title = document.querySelector('#main-heading');

//title.style.color = 'red';

// console.log(title);

// const listItems = documnet.querySelectorAll('list-items');

// for(let i  = 0; i < listItems.length; i++){
    
//     listItems[i].style.fontSize = '5rem';

// }

// console.log(listItems);

const ul = document.querySelector('ul');
const li = document.createElement('li');

//adding elements

ul.append(li)

//modfying text

li.innerText = 'X-men';
const li1 = document.createElement('li');
ul.append(li1);
li1.innerText = 'MIB';


//modifying attributes and classes

// li.setAttribute('id','main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'))
li1.classList.add('list-items');
li.classList.add('list-items'),
console.log(li.classList.contains('list-items'));
