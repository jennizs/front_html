let sobre = document.querySelector("#sobre");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

let nomeOk = false;
let emailOk = false;
let messageOk = false;
let cepOk = false;

function validarNome() {
    let txtNome = document.querySelector("#txtNome");

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido";
        txtNome.style.color = "red";
        nomeOk = false;
    } else {
        txtNome.innerHTML = "";
        nomeOk = true;
    }
}

function validarEmail() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.match(regex)) {
        txtEmail.innerHTML = "";
        emailOk = true;
    } else {
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = "red";
        emailOk = false;
    }
}

function validarMessage() {
    let txtMensagem = document.querySelector("#txtMensagem");

    if (message.value.length >= 50) {
        txtMensagem.innerHTML = "Mensagem muito grande!";
        txtMensagem.style.color = "red";
        messageOk = false;
    } else {
        txtMensagem.innerHTML = "";
        messageOk = true;
    }
}

function enviarForm() {
    if (nomeOk === true && emailOk === true && messageOk === true) {
        alert(nome.value + ", obrigado pelo contato, aguarde nosso retorno.");
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
}


getApiGithub();