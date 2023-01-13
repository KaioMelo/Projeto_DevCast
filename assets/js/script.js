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

// Validação de formularios do projeto

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
   
    alert('Erro ao enviar, verifique seus dados!')
    limpa_formulário()
 }

 function successValidation(input){
    const formControl = input.parentElement;

    alert('Dados enviados com sucesso')
    limpa_formulário()
 }

// VIA CEP - Lista de Espera

cep.value = '';

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

function abrirAlerta2(){
    alert("No momento não temos vagas disponíveis.")
}

// limpa formulario de todos os formulario

function limpa_formulário() {
    //Limpa valores do formulário
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('estado').value=("");
    document.getElementById('cep').value=("");
    document.getElementById('name').value=("");
    document.getElementById('email').value=("");
    document.getElementById('password').value=("");
    document.getElementById('age').value=("");
    document.getElementById('message').value=("");
}