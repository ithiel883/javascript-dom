import '../assets/css/style.css';

const app = document.getElementById('app');

app.innerHTML = `
<h1>Javascript DOM</h1>
<ul id="list">
<li>Earth</li>
<li>Fire</li>
<li>Water</li>
<li>Air</li>
</ul>
`;
const list = document.querySelector('#list')
const selectedIndex = 2;
//querySelectorAll
const queryChildren = list.querySelectorAll('li')
console.log(queryChildren[selectedIndex])

console.log(list.children[selectedIndex])

console. log(list.childNodes[selectedIndex])

//first and last
console.log(list.firstChild, list.firstElementChild)

// const listItems = document.querySelectorAll('#list li')
// console.log(listItems)

// for(let i = 0; i < listItems.length; i++){
//     console.log(listItems[i])
// }
// for(const item of listItems){
//     console.log(item)
// }

// [...listItems].forEach(item  => console.log(item))

// Array.from(listItems).forEach(item => console.log(item))
// const data = ['Earth', 'Fire', 'Water']

// const fragment = document.createDocumentFragment()

// data.forEach(item => {
//     const li = document.createElement('li')
//     li.className = 'list-item';
//     li.innerText = item;
//     fragment.append(li)
// })

// const ulFromQuerySelector = document.querySelector('ul')
// console.log(ulFromQuerySelector)

// ulFromQuerySelector.append(fragment)

// const listItemsFromQSA = ulFromQuerySelector.querySelectorAll('.list-item')
// console.log(listItemsFromQSA)


// const newListItem = document.createElement('li')
// newListItem.className = 'list-item';
// newListItem.innerText = 'Air';
// ulFromQuerySelector.append(newListItem)
// //getElementById: HTMLElement
// const ulFromId = document.getElementById('list')
// console.log(ulFromId)
// ulFromId.append(fragment)

// //getElementByClassName: HTMLCollection
// const listItems4fromClass = ulFromId.getElementsByClassName('list-item')
// console.log(listItems4fromClass)

// //getEllementByTagName
// const list4romTag = ulFromId.getElementsByTagName('li')
// console.log(list4romTag)

// //demonstrate live collection
// const newListItem = document.createElement('li')
// newListItem.className = 'list-item'
// newListItem.innerText = 'Air'
// ulFromId.append(newListItem)
// //removing nodes
// const div = document.createElement('div')
// div.innerText = "I am a message!"

// app.append(div)

// // setTimeout(() => div.remove(), 2500)
// setTimeout(() => div.remove(), 2500)


//cloning elements
// const div = document.createElement('div')
// const span = document.createElement('span')
// span.innerText = "Can you clone me"
// div.append(span)
// app.append(div)

// const clone = div.cloneNode()
// console.log(clone)

// //clone all elements and subtrees
// const newClone = div.cloneNode(true)
// console.log(newClone)

// app.append(newClone)
//Replacing Node

// const div = app.querySelector('div')
// const newDiv = document.createElement('div')
// newDiv.innerText = 'I have been replaced!'
 

// setTimeout(() => {
//     div.replaceWith(newDiv)
// }, 3000)


// const ul =  app.querySelector('ul');
// const li = document.createElement('li')
// li.innerText = 'X'
// ul.insertAdjacentElement('beforebegin', li)


// const div = document.createElement('div')
// const span = document.createElement("span")
// const p = document.createElement('p')
// const i = document.createElement('i')

// app.append(div)

// div.append(p)
// div.prepend(span)
// p.before(i)


// console.log(div)
// const data = ['Earth', '  fire', 'Water', 'Air']

// const fragment =  document.createDocumentFragment()

// data.forEach(name => {
//     const li =  document.createElement('li')
//     li.innerText = name
//     fragment.append(li)
// })

// app.append(fragment)













// function createInputDOM({label, type = 'text'}) {
//     const labelEl = document.createElement('label')
//     const inputEl = document.createElement('input')

//     inputEl.type = type;
//     labelEl.innerText = label 

//     labelEl.append(inputEl)

//     return labelEl
// }
// const inputFromDOM = createInputDOM({label: 'Name'})

// console.log(inputFromDOM.querySelector('input'))

// app.append(inputFromDOM)

// //Using string templates
// function createInputTemplate({label, type = 'text'}){
//     return `
//     <label>
//     ${label}
// <input type="${type}">
//     </label>
//     `;
// }

// const inputFromTemplate = createInputTemplate({label: 'Email', type: 'email'})
// app.innerHTML += inputFromTemplate
// app.innerText = 'some text here'
// const div = document.createElement('div')
// const text = document.createTextNode('DOM!')
// const comment = document.createComment('No comment')

// div.append(comment)
// app.append(div)
// app.append(text)

// console.log(app, div)


// app.innerHTML = `<h1>Javascript DOM </h1>`;
// //html

// console.log(document.documentElement)
// console.dir(document.documentElement)

// //head
// console.dir(document.head)

// //retrieve constructor name
// console.log(document.body.constructor.name)

// //looking at the prototype chain
// console.log(document.body instanceof HTMLBodyElement)
// console.log(document.body instanceof Element)
// console.log(document.body instanceof Node)
// console.log(document.body instanceof EventTarget)


// // Node types
// /*
// Element
// Attribute
// Text
// CDATASection
// EntityReference
// Entity
// ProcessingInstruction
// Comment
// Doument
// DocumentType
// DocumentFragment
// Notation
//  */

// console.log(document.body.nodeType)
// console.log(document.nodeType)

// console.log(document.body.nodeName)
// console.log(document.body.tagName)