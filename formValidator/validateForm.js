
const form= document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cPassword = document.getElementById('re-TypePassword');

//show error mesage

function showError(input, message){
    const formControl = input.parentElement;
    console.log(formControl)
    formControl.classList.add("error")

    const small = formControl.querySelector("small");

    small.innerText= message;

}

//show success message

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.classList.add("success")
    
}

//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function (input){
        if(input.value.trim()===""){
            showError(input,`${getFieldName(input)} is required`)
        }else{
            showSuccess(input)
        }
    });
}

//Get Field name

function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

//check input length

function checkInputLenght(input, min, max){
    if(input.value.length<min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);  
    }else if(input.value.length>max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}
function checKEmail(input){
    const re =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(re.test(input.value)){
        showSuccess(input);
    }
    else {
        showError(input, "E-mail is not valid")

    }
}

function checkPasswordMatch(input1, input2){
    if(input1.value!==input2.value){
        showError(input2, "Password do not match")
    } else{
        showSuccess(input1);
        showSuccess(input2);
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    checkRequired([username, email,password, cPassword]);
    checkInputLenght(username, 3,15);
    checkInputLenght(password, 8, 25);
    checKEmail(email);
    checkPasswordMatch(password, cPassword);
});

