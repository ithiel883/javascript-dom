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
<div>
What size?
<label>
Small
 <input type="radio" name="size" value="small" checked>
</label> 
<label>
Medium
 <input type="radio" name="size" value="medium" checked>
</label>
<label>
Large
 <input type="radio" name="size" value="large" checked>
</label>
</div>
<label>
Quantity
<input type=
</label>
<button type="submit">
Submit
</button>
</form>
`;

const form = document.forms.order

function handleSubmit(event) {
    event.preventDefault(); 
    // console.log([...new FormData(event.target)])
    const formData = new FormData(event.target)
    // const data = [...formData.entries()]
    // const asString = data.map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`).join('&')
    // )

    const asString = new URLSearchParams(formData).toString()
    console.log(asString)

    //json
    const asJSON = JSON.stringify(Object.fromEntries(formData))
    console.log(asJSON)
}


form.addEventListener('submit', handleSubmit)
