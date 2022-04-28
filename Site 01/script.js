function scrollhome(){
    window.scroll(0,0);
    console.log("scroll");
}


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

