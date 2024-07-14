const camposDoFormulario = document.querySelectorAll('[required]')
const formulario = document.querySelector('form')
const botaoEnviar = document.querySelector('button[type="submit"]')


formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "assunto": e.target.elements["assunto"].value,
        "mensagem": e.target.elements["mensagem"].value
    }

    localStorage.setItem("contato", JSON.stringify(listaRespostas));
    formulario.reset();
    botaoEnviar.disabled = true;
})


const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'tooShort',
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um email válido.",
    },
    assunto: {
        valueMissing: "O campo de assunto não pode estar vazio.",
        tooShort: "Por favor, preencha um assunto válido."
    },
    mensagem: {
        valueMissing: "O campo de mensagem não pode estar vazio.",
        tooShort: "Por favor, preencha uma mensagem válida."
    }
};


function verificaCampo(campo) {
    let  msg = "";
    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            msg = mensagens[campo.id][erro];
        }
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = msg;
    } else {
        mensagemErro.textContent = "";
        }
    });


}

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault())
    campo.addEventListener("input", () =>  habilitarBotao());
})


function habilitarBotao() {
    const camposValidos = Array.from(camposDoFormulario).every(campo => campo.checkValidity());
    botaoEnviar.disabled = !camposValidos;
}


