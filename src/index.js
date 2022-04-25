import "../assets/css/style.css";

const app = document.getElementById("app");

app.innerHTML = `
<h1>Javascript DOM</h1>
<form name="example">
<label>
Accept Marketing
<input type="checkbox" name="marketing">

</label>
</form>
`;

const form = document.forms.example
const checkbox = form.elements.marketing

console.dir(checkbox)

checkbox.select()