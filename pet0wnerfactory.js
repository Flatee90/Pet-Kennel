function createPerson(name, petname, zipCode, phonenumber, email, city) {
    let person = {
        name: name,
        petname: petname,
        zipCode: zipCode,
        city: city,
        email: email,
        phonenumber: phonenumber,
        status: function () {
            console.log(`Name: ${this.name}, pet name: ${this.birthday}, zip: ${this.zipCode}, phonenumber: ${this.phonenumber}, email: ${this.email}, city: ${this.city}`);
        },
        render: function() {
            let nameP = document.getElementById("userNameOutput");
            nameP.textContent = this.name;
            let petnamep = document.getElementById("userPetnameOutput");
            petnameP.textContent = this.birthday;
            let zipP = document.getElementById("userZipCodeOutput");
            zipP.textContent = this.zipCode;
            let phonep = document.getElementById("userPhonenumberOutput");
            phonep.textContent = this.phonenumber;
            let emailp = document.getElementById("userEmailOutput");
            emailp.textContent = this.email;
            let cityp = document.getElementById("userCityOutput");
            cityp.textContent = this.city;
        }
    }
    return person;
}

//proof of life//
//let p1 =createPerson("Nick" , "Honey" , "70056" , "5043585568" , "nickmurs3@yahoo.com" , "Gretna");
//console.log(p1);
//p1.status();
//let p2 = createPerson("Andre" , "Buster" , "70056" ,"5043196307" , "flatee90@gmail.com" , "Kenner" );
