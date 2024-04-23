const name = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("assunto").value;
const message = document.getElementById("mensagem").value;

const validateName = (name) => {
    if (!name || name.trim() === "") {
        return "O campo do nome não pode ficar em branco ou vazio.";
    }

    if (name.length > 50) {
        return "O campo do nome deve conter no máximo 50 caracteres.";
    }

    return "";
}

const validateEmail = (email) => {
    if (!email || email.trim() === "") {
        return "O campo do e-mail não pode ficar em branco ou vazio.";
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        return "O campo do e-mail deve estar em formato válido.";
    }

    return "";
}

const validateSubject = (subject) => {
    if (!subject || subject.trim() === "") {
        return "O campo do assunto não pode ficar em branco ou vazio.";
    }

    if (subject.length > 50) {
        return "O campo do assunto deve conter no máximo 50 caracteres.";
    }

    return "";
}

const validateMessage = (message) => {
    if (!message || message.trim() === "") {
        return "O campo da mensagem não pode ficar em branco ou vazio.";
    }

    if (message.length > 300) {
        return "O campo da mensagem deve conter no máximo 300 caracteres.";
    }

    return "";
}

const nameError = validateName(name);
const emailError = validateEmail(email);
const subjectError = validateSubject(subject);
const messageError = validateMessage(message);

const isFormValid = () => {
    if (nameError || emailError || subjectError || messageError) {
        return false;
    }

    return true;
}

const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
        document.getElementById("formcontato__form").submit();
    } else {
        document.getElementById("error").innerText = "Por favor, preencha todos os campos corretamente.";
    }
}

document.getElementById("myForm").addEventListener("submit", handleSubmit);


