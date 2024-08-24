let state = {
    name: "",
    petname: "",
    zipCode: 0,
    city: "",
    phonenumber: "",
    email: "",
}

console.log(state);




let saveBtn = document.getElementById("saveButton");
let firstnameinput = document.getElementById("userName");
let lastnameinput = document.getElementById("userName");
let petnameInput = document.getElementById("petname");
let cityinput = document.getElementById("city");
let zipCodeInput = document.getElementById("zipcode");
let phonenumberInput = document.getElementById("phonenumber");
let emailInput = document.getElementById("Useremail");

function handleSave() {
    console.log("save button was clicked");
    let name = petnameInput.value;
    state.name = name;
    console.log("Added name" + state.name);

    state.phonenumber = phonenumberInput.value;
    state.zipCode = zipCodeInput.value;
    state.email = emailInput.value;

    console.log(state);

    firstnameinput.value = "";
    lastnameinput.value = "";
    petnameInput.value = "";
    cityinput.value = "";
    zipCodeInput.value = "";
    emailInput.value = "";

    let user = createPet(state.name, state.petname, state.city, state.zipCode, state.email);
    user.status();
    user.render();
}

saveBtn.addEventListener("click", handleSave);


console.log("hello World");

