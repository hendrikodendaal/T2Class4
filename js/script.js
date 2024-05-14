function clearScreen(){
    document.getElementById('result').value = "";
}

function display(value){
    document.getElementById('result').value += value
}

function calculate(){
    let sum = document.getElementById('result').value;
    let answer = eval(sum);
    document.getElementById('result').value = answer;
}

let form = document.forms["my-form"];
form.addEventListener("submit", getValues);

function getValues(event){
    event.preventDefault();

    let formData = {
        "name": this.name.value,
        "bio": this.bio.value,
        "fav-color": this['fav-color'].value,
        "gender": this.gender.value,
        "fav-food": []
    }

    let favFoods = document.querySelectorAll(".fav-foods");
    for (let food of favFoods){
        if (food.checked == true){
            formData['fav-food'].push(food.value);
        }
    }

    let out = `
    <p>Name: <span>${formData.name}</span></p>
    <p>Bio: <span>${formData.bio}</span></p>
    <p>Fav Color: <span>${formData['fav-color']}</span></p>
    <p>Gender: <span>${formData.gender}</span></p>
    <p>Fav Food: <span>${formData['fav-food']}</span></p> 
    `;

    document.querySelector(".out code").innerHTML = out;





}