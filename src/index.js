import '../assets/css/style.css';

const app = document.getElementById('app');


const div = document.createElement('div')
const text = document.createTextNode('DOM!')
const comment = document.createComment('No comment')

div.append(comment)
div.append(text)
app.append(div)

console.log(app, div)


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