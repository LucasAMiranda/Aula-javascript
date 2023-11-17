// JavaScript
const Validar = (event) => {

    if(event){
        event.preventDefault();
    }

    let usuario = document.getElementById("username").value;
    let senha = document.getElementById("password").value;
    let senhaConfirm = document.getElementById("confirmPassword").value;
    let errorMessage = document.getElementById("error-message");

    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    errorMessage.innerHTML = "";

    if(usuario === ""){
        errorMessage.innerHTML = "Por favor, preencha o campo Username.";
        return false;
    } else if(senha === ""){
       errorMessage.innerHTML = "Por favor, preencha o campo Senha.";
       return false;
    }

    if(!passwordRegex.test(senha)){
        errorMessage.innerHTML = "A senha deve conter pelo menos 1 letra maiúscula, 1 número e no mínimo 8 caracteres.";
        return false;
    }

    if(senha !== senhaConfirm){
        console.log("As senhas são diferentes!");
        alert("As senhas são diferentes!");
        return false;
    } else {
        console.log("As senhas são iguais");
        alert("As senhas são iguais!");
        return true;
    }
}

document.getElementById("btnClick").addEventListener("click", Validar);
