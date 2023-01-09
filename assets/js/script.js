let form = document.querySelector('form');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let age = document.querySelector('#age');
let message = document.querySelector('#message');

let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');

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