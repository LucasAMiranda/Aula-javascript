function validar(){
    //DOM - Document object Model - Modelo de objeto de documento HTML, o dom serve para manipular elementos do html , validando e colocando funcionalidades específicas para cada elemento 
    
    let usuario = document.getElementById("name").value

    let senha = document.getElementById("password").value

    if (usuario === ""){
        alert("Por favor, Preencha o campo nome do usuário")
    }
    else if(senha === ""){
        alert("Por favor, Preencha o campo senha do usuário")
    }
    document.getElementById("clickme").addEventListener("click", validar)


}
