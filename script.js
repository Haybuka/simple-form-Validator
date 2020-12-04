const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//show input error message
function showError(input,message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small');
  small.innerText = message
}

//show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
  formControl.className = 'form-control success'
}

//check email is valid
function isValidEmail(email){
    //use js email regExp
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//check required fields
function checkRequired(input){
  input.forEach(element => {
      if(element.value.trim() == ''){
          showError(element,`${getFieldName(element)} is required`)
      }else{
          showSuccess(element)
      }
  });
}
//Get fieldname and cap
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//Event listeners refactored
form.addEventListener('click',function (e) {
    e.preventDefault();
    // instead of passing input one after the other,pass in an Array,
    // to automate the task at once
    checkRequired([username,email,password,password2])
})

//Event Listeners using if else,not advisable
// form.addEventListener('click',function (e) {
//     e.preventDefault();
//     if(username.value === ''){
//         showError(username, 'Username is required')
//     }else{
//         showSuccess(username)
//     }

//     if(email.value === ''){
//         showError(email, 'Email is required')
//     }else if (!isValidEmail(email.value)){
//         showError(email, 'Email is not valid');
//     }
//     else{
//         showSuccess(email)
//     }
//     if(password.value === ''){
//         showError(password, 'Password is required')
//     }else{
//         showSuccess(password)
//     }
// });