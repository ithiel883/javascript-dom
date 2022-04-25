import "../assets/css/style.css";

const app = document.getElementById("app");

app.innerHTML = `
<h1>Javascript DOM</h1>
<form name="example">
        <input type="text" name="myInput" value="Hello" />
</form>
`;

const form = document.forms.example
const input = form.myInput
// input.readOx = true
console.log(input.value)

//Events
input.addEventListener('focus', () => console.log('Focus'))
input.addEventListener('blur', () => console.log('Blur'))
input.addEventListener('input', () => console.log('Input'))
input.addEventListener('change', () => console.log('Change'))

//methods

input.focus()
setTimeout(() => input.blur(), 2500)


