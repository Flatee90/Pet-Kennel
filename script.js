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
let firstnameInput = document.getElementById("userNameOutput");
let lastnameInput = document.getElementById("UserNameOutput");
let petnameInput = document.getElementById("petnameOutput");
let cityinput = document.getElementById("cityOutput");
let zipCodeInput = document.getElementById("zipcodeOutput");
let phonenumberInput = document.getElementById("phonenumberOutput");
let emailInput = document.getElementById("UseremailOutput");

function handleSave() {
    console.log("save button was clicked");
    let firstname = firstnameInput.value;

    state.name = name;
    console.log("Added name" + state.name);

    state.phonenumber = phonenumberInput.value;
    state.zipCode = zipCodeInput.value;
    state.email = emailInput.value;


    console.log(state);

    firstnameInput.value = "";
    lastnameInput.value = "";
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

