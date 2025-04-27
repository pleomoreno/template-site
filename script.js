document.addEventListener("DOMContentLoaded", function () {
    const form= document.getElementById("meuFormulario");
    
    form.addEventListener("submit", function(e){
        e.preventDefault();
    
        if(
            validarCampo("nome")&&
            validarEmail("email")&&
            validarSenha("senha")&&
            validarTelefone("numero")
        ) {
            alert("Formulário enviado")
            form.reset();
        }  
    });
});
    
function validarCampo(id){
    const campo = document.getElementById(id);
    if(campo.value.trim()=== ""){
        alert(`Por favor, escreva seu nome completo`);
        return false
    }
    return true
}

function validarEmail(id){
    const campo = document.getElementById(id);
    const valor = campo.value.trim();
    if(!valor.includes("@")){
        alert(`Por favor, digite um e-mail válido`);
        return false
    }
    return true
}

function validarSenha(id){
    const campo = document.getElementById(id);
    if(campo.value.length < 6){
        alert(`Por favor, digite pelo menos 6 caracteres`);
        return false
    }
    return true
}

function validarTelefone(id){
    const campo = document.getElementById(id);
    if(campo.value.length < 9){
        alert(`Por favor, digite um telefone válido`);
        return false
    }
    return true
}