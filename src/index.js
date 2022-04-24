import "../assets/css/style.css";

const app = document.getElementById("app");

app.innerHTML = `
<h1>Javascript DOM</h1>
<form name="order">
<label>
Your name
<input type="text" name="fullname">
</label>
<label>
Which pizza would you like?
<select name="pizza">
<option value="pepperoni">Pepperoni</option>
<option value="meaty">Meaty</option>
<option value="cheesy">Cheesy</option>

</select>
</label>
<button type="submit">
Submit
</button>
</form>
`;

const form = document.forms.order

function handleSubmit(event) {
    event.preventDefault(); 
    console.log([...new FormData(event.target)])
}

function handleFormData(event){
    console.log([...event.formData])
    console.log([...event.formData.values()])
    const entries = event.formData.entries()

    for(const entry of entries){
        console.log(entry)
    }


}

form.addEventListener('submit', handleSubmit)
form.addEventListener('formdata', handleFormData)