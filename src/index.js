import "../assets/css/style.css";

const app = document.getElementById("app");

app.innerHTML = `
<h1>Javascript DOM</h1>
<form name="example">

<select name="drink">
<option value="">Select your drink</option>
<option value="lemonade" selected>Lemondade</option>
<option value="cola">Cola</option>
<option value="water">Water</option>

</select>
</form>
`;

const form = document.forms.example;
const select = form.elements.drink

console.log(select.value)

