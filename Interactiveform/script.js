const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
function valName(){
    const name=nameInput.value.trim();
    const error=document.getElementById('name-error');
    if(name===''){
        error.textContent="Name should not be empty";
        return false;
    }
    else{
        error.textContent="";
        return true;
    }
}
function valphone(){
    const phone=phoneInput.value.trim();
     const error=document.getElementById('phone-error');
     const phonePattern=/^\d{10}$/;
    if(!phonePattern.test(phone)){
        error.textContent="phone no is Invalid";
        return false;
    }
    else{
        error.textContent="";
        return true;
    }
}
function valEmail(){
    const email=emailInput.value.trim();
     const error=document.getElementById('email-error');
     const emailPattern=/^\S+@\S+\.\S+$/;
    if(!emailPattern.test(email)){
        error.textContent="Email is invalid";
        return false;
    }
    else{
        error.textContent="";
        return true;
    }
}
function valpassword(){
    const password=passwordInput.value.trim();
    const error=document.getElementById('password-error');
    const passwordPattern=/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if(!passwordPattern.test(password)){
        error.textContent="password is invalid";
        return false;
    }
    else{
        error.textContent="";
        return true;
    }
}
form.addEventListener('submit',function(e){
    const isNameValid=valName();
    const isphoneValid=valphone();
    const isEmailValid=valEmail();
    const ispasswordValid=valpassword();

    if(!isNameValid ||!isphoneValid ||!isEmailValid ||!ispasswordValid){
        e.preventDefault();
    }else{
        console.log("Form Submitted Successfully");
    }
});