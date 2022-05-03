/* Apresentar Modal */
setTimeout(ApresentarModal, 5000);
function ApresentarModal(){
    var modal = document.querySelector(".modal");
    
    if (modal == null){
        alert("Não existe");
    }else{
        document.querySelector(".modal").style.display = "block";

        document.querySelector(".modal a").addEventListener("click", function(){
            document.querySelector(".modal").style.display = "none";
        });
    }
    
    
}

/* Validação Modal(Página inicial) */

if (document.forms["modal_form"] != undefined){
    var form = document.forms["modal_form"];
    form.addEventListener("submit", validarFormModal);
    form.email.addEventListener("keyup", function(){
        form.email.className = "";
        form.document.querySelector("span.nao_valido").style.display = "none";
    });
}

function validarFormModal(evt){
    var form = document.forms["modal_form"];
    var inputEmail = form.email;
    var valorEmail = form.email.value;
    
    var posicaoArroba = valorEmail.indexOf("@");
    
    if (
        valorEmail != "" &&
        valorEmail.indexOf("@") > 3 &&
        valorEmail.lastIndexOf(".") > posicaoArroba
    ){
        
        
    }else{
        inputEmail.className = "nao_valido";
        document.querySelector("span.nao_valido").style.display = "block";
        evt.preventDefault();
    }
}


/* Validação Fale Conosco */
function submitform(event){
    event.preventDefault()
    let nome_1 = document.getElementById('NomeCompleto');
    if (nome_1.value.length < 5){
        alert("Precisa ser maior que 5 letras");
        nome_1.style.borderColor = 'red';
        return;
    }
    let email_1 = document.getElementById('Email');
    let telefone_1 = document.getElementById('Telefone');
    let mensagem_1 = document.getElementById('Mensagem');
    console.log(
        {
            nome: nome_1.value,
            email: email_1.value, 
            telefone: telefone_1.value, 
            mensagem: mensagem_1.value
        }
    )
}
