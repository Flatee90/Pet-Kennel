function createPetowner(firstname,lastname, petname, zipCode, phonenumber, email, city) {
    let petowner = {
        firstname: firstname,
        lastname: lastname, 
        petname: petname,
        zipCode: zipCode,
        city: city,
        email: email,
        phonenumber: phonenumber,
        status: function () {
            console.log(`firstname: ${this.firstname}, lastname: ${this.lastname}, pet name: ${this.birthday}, zip: ${this.zipCode}, phonenumber: ${this.phonenumber}, email: ${this.email}, city: ${this.city}`);
        },
        render: function() {
            document.getElementById("firstnameoutput").textContent = this.firstname;
            document.getElementById("lastnameoutput").textContent = this.lastname;
            document.getElementById("petnameoutput").textContent.content = this.petname;
            document.getElementById("zipcodeout").textContent = this.zipCode;
            document.getElementById("phonenumber").textContent = this.phonenumber;
            document.getElementById("email").textContent = this.email;
            document.getElementById("city").textContent = this.email;
        }
    }
    return petowner;
}

//Proof of life
//let p1 = createPetowner("Nick" , "Morris" , "Honey" , "70056" , "5043585568" , "nickmurs3@yahoo.com" , "Gretna");
//console.log(p1);
//p1.status();
//let p2 = createPetowner("Andre" , "Morris" , "Buster" , "70056" ,"5043196307" , "flatee90@gmail.com" , "Kenner" );
//console.log(p2);
//p2.status();