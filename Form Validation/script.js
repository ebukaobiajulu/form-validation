const form = document.getElementById('form');
const firstname= document.getElementById('firstname');
const lastname= document.getElementById('lastname');
const email= document.getElementById('email');
const password= document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkedInputs()

});



function checkedInputs(){
   const firstnameValue = firstname.value.trim();
   const lastnameValue = lastname.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();

   if(firstnameValue === ""){
       setErrorFor(firstname, "Oops...you didn't fill a name")
   }
   else{
       setSuccessFor(firstname, "niceeee")
   }
   if (lastnameValue === ""){
       setErrorFor (lastname, "Oops...you didn't fill a name")
   }
   else if(lastnameValue === 'ebuka'){
    setErrorFor (lastname, "Oops...your name isn't Ebuka")
   }
   else if(lastnameValue === 'theo'){
    setErrorFor (lastname, "Oops...your name isn't Theo")
   }
   else if(lastnameValue === 'Ebuka Theo'){
    setErrorFor (lastname, "Oops...your name isn't that")
   }
   
   else{
       setSuccessFor( lastname, "niceeee")
   }
   if (emailValue === ""){
       setErrorFor (email, "Oops...you didn't fill an email")
   }
   else{
       setSuccessFor( email, "niceeee")
   }
   if (passwordValue === ""){
       setErrorFor (password, "Oops...you didn't fill a password")
   }
   else if(passwordValue.length < 8){
        setErrorFor(password, "Length should be more than 8 characters")
   }
   else{
       setSuccessFor( password, "niceeee")
   }

   
}

function setErrorFor(input, message){
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message')

    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

function setSuccessFor(input){
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message')

    errorDisplay.innerText = '';

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}