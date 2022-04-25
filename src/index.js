import "../assets/css/style.css";

const app = document.getElementById("app");

app.innerHTML = `
<h1>Javascript DOM</h1>
<form name="example">
<div class="container">
        <label>
        blue
        <input type="radio" name="color" value="blue" checked>
        </label>
        <label>
        Red
        <input type="radio" name="color" value="red">
        </label>
        <label>
        Green
        <input type="radio" name="color" value="green">
        </label>
        </div>
</form>
`;



const form  = document.forms.example
const radios = [...form.elements.color]

//properies on radio buttons
radios.forEach(radio => {
    console.log(radio.value)
    console.log(radio.checked)

})

const container = form.querySelector('.container')
container.addEventListener('change', () => {
    console.log(form.elements.color.value)
})
// const checked = radios.find(radio => radio.checked)
// console.log(checked)
// console.log(radios)

