//DOM manipulation 


//SELECTORS

//get element by ID
// let title=document.getElementById('main-heading')
//  title.style.color='red';
//changing style of an element through dom manipulation
// console.log(title)

//get element by className

//MANIPULTING A LIST OF ITEMS YOU NEED TO LOOP THROUGH
// const listItem=document.querySelectorAll('.list-items')

// for(i=0;i<listItem.length;i++){
//     listItem[i].style.color='green'
// }
// console.log(listItem)
//querySelector
// const container=document.querySelector('container')
// //querySelectorAll
// //getElementByTagName

// const ul=document.querySelector('ul')
// const li=document.createElement('li')
// ul.appendChild(li)

//Modifying the text

// const firstListItem=document.querySelector('.list-items')
// console.log(firstListItem.innerText)
// console.log(firstListItem.textContent)
// // console.log(firstListItem.innerHTML)
// li.innerText='X-Men'

//MODIFYING ATTRIBUTES and classes

// li.setAttribute('id','main-heading')
// li.removeAttribute('id')

// const title=document.querySelector('#main-heading')
//console.log title to see the value of the id
//console.log(title.getAttribute('id'))

//adding classes attributes for styling

//li.classList.add('list-items')//remove

//REMOVE ELEMENTs
// li.remove()

//TRAVERSING THE DOM

// Parent node Traversal

let ul=document.querySelector('ul')
console.log(ul.parentNode)
console.log(ul.childNodes)
console.log(ul.firstchild)
console.log(ul.lastchild)
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)

//Sibling Node traversal

