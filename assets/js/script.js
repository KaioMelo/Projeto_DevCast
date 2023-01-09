let form = document.querySelector('form');
let username = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let age = document.querySelector('#age');
let message = document.querySelector('#message');

let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');

// Formulario de contato
 form.addEventListener('submit', (e) => {
    e.preventDefault
    checkInputs()
 })

 function checkInputs(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const messageValue = message.value.trim()
    const passawordValue = password.value.trim()
    const ageValue = age.value.trim()

    if(usernameValue === ''){

        errorValidation(username, 'Preencha esse campo')
    }else{
        successValidation(username)
    }

    if(emailValueValue === ''){

        errorValidation(email, 'Preencha esse campo')
    }else{
        successValidation(email)
    }

    if(messageValueValueValue === ''){

        errorValidation(message, 'Preencha esse campo')
    }else{
        successValidation(message)
    }

    if(passawordValueValueValueValue === ''){

        errorValidation(password, 'Preencha esse campo')
    }else{
        successValidation(password)
    }

    if(ageValueValueValue === ''){

        errorValidation(age, 'Preencha esse campo')
    }else{
        successValidation(age)
    }
 }

 function errorValidation(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
 }

 function successValidation(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
 }

// Formulario de Cadastro


form.addEventListener('submit', (e) => {
    e.preventDefault
    checkInputs()
 })

 function checkInputs(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const ageValue = age.value.trim()
    const passawordValue = password.value.trim()

    if(usernameValue === ''){

        errorValidation(username, 'Preencha esse campo')
    }else{
        successValidation(username)
    }

    if(emailValueValue === ''){

        errorValidation(email, 'Preencha esse campo')
    }else{
        successValidation(email)
    }

    if(ageValueValueValueValue === ''){

        errorValidation(age, 'Preencha esse campo')
    }else{
        successValidation(age)
    }

    if(passawordValueValueValueValueValue === ''){

        errorValidation(password, 'Preencha esse campo')
    }else{
        successValidation(password)
    }

 }

 function errorValidation(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
 }

 function successValidation(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
 }

// Formulário de Login


form.addEventListener('submit', (e) => {
    e.preventDefault
    checkInputs()
 })

 function checkInputs(){
    const emailValue = email.value.trim()
    const passawordValue = password.value.trim()

    if(emailValueValue === ''){

        errorValidation(email, 'Preencha esse campo')
    }else{
        successValidation(email)
    }

    if(passawordValueValueValueValueValue === ''){

        errorValidation(password, 'Preencha esse campo')
    }else{
        successValidation(password)
    }

 }

 function errorValidation(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
 }

 function successValidation(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
 }



// VIA CEP - Lista de Espera

cep.value = ' ';

cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
    document.body.appendChild(script);
});

function popularForm(resposta) {

    if("erro" in resposta) {
        alert('CEP não encontrado');
        return;
    }
    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
}

function abrirAlerta(){
    alert("Dados fornecidos não constam na base de dados.")
}