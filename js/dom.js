// console.log('Hello from js');
document.getElementById('dom-1').setAttribute('title','nahid')

const mainContainer = document.getElementById('main-container');
console.log(mainContainer)

const h1 = document.createElement('h1');
h1.innerText = 'name list';

const section = document.createElement('section');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');

li1.innerText = 'nahid';
li2.innerText = 'jerin';
li3.innerText = 'romana';
li4.innerText = 'tanvir';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
section.appendChild(h1);
 section.appendChild(ul);
 

 mainContainer.appendChild(section);

 const section1 = document.createElement('section');
 section1.innerHTML = `
 <h1>fruits list</h1>
 <ul>
    <li>banan</li>
    <li>apple</li>
    <li>coconut</li>
    <li>pineapple</li>
 </ul>
 `
mainContainer.appendChild(section1)



