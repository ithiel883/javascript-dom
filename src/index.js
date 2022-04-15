import '../assets/css/style.css';

const app = document.getElementById('app');

app.innerHTML = `
<h1>Javascript DOM</h1>
`
//removing nodes
const div = document.createElement('div')
div.innerText = "I am a message!"

app.append(div)

// setTimeout(() => div.remove(), 2500)
setTimeout(() => div.remove(), 2500)


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