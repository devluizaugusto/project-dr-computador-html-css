function validarForm(){
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('input');

    let isValid = true;

    inputs.forEach(input => {
        if(!input.checkValidity()){
            input.classList.add('invalid');
            isValid = false;
        }
        else{
            input.classList.remove('invalid');
        }
    });
    
    return isValid;
}

function enviarForm(){
    if(validarForm()){
        enviarWhats();
    }
}

function mascararTelefone(telefone){
    const text = telefone.value;
    const telApenasNum = text.replace(/\D/g, '');

    let telFormatado = telApenasNum.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    if(telApenasNum.length < 11){
        telFormatado = telApenasNum.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }
    telefone.value = telFormatado;
}

const campoTel = document.getElementById('input-phone');
campoTel.addEventListener('input', function(){
    mascararTelefone(this);
});

function enviarWhats(){
    const name = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    const phone = document.getElementById('input-phone').value;
    const message = document.getElementById('input-message').value;

    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const numWhats = phone.replace(/[-()\s]/g,'');
    const url = `https://wa.me/55${numWhats}?text=${encodedText}`;

    window.open(url, '_blank');
}
