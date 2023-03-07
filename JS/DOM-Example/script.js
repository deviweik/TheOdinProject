
const container = document.querySelector('#container');

const title = document.querySelector('h1');
title.style.textAlign = 'center';

const nodeList = document.querySelectorAll('*');
//console.log(nodeList);
// Check console in devTools, can view all HTML components this way

const red = document.createElement('p');
red.classList.add('red');
red.textContent = "Hey I'm red!";
red.style.color = 'red';
red.style.textAlign = 'center';
container.appendChild(red);

const blue = document.createElement('h3');
blue.classList.add('blue');
blue.textContent = "Hey I'm blue!";
blue.style.color = 'blue';
blue.style.textAlign = 'center';
container.appendChild(blue);

const pinkContainer = document.createElement('div');
pinkContainer.classList.add('pink-container');
pinkContainer.style.border = '2px solid black';
pinkContainer.style.backgroundColor = 'pink';
pinkContainer.style.margin = '5px';
pinkContainer.style.padding = '5px 40px';
container.appendChild(pinkContainer);


const header = document.createElement('h1');
header.classList.add('header');
header.textContent = "I'm in a div";
pinkContainer.appendChild(header);

const meToo = document.createElement('p');
meToo.classList.add('me-too');
meToo.textContent = "Me too";
pinkContainer.appendChild(meToo);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
