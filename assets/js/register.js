let button = document.getElementById('button');


$('#cep').focusout(function () {
    fetch(`https://viacep.com.br/ws/${$('#cep').val()}/json/`, { method: 'GET', mode: 'cors' })
        .then((serverPromise) => {
            serverPromise.json()
                .then((response) => {
                    $('#logradouro').val(response.logradouro);
                    $('#localidade').val(response.localidade);
                })
                .catch((error) => {
                    console.log("Erro response: " + error);
                });
        })
        .catch((error) => {
            console.log("Erro server promise: " + error);
        });
});


function validaUser() {
    let user = $('#user').val();
    
    if(!user || user.length < 5 || user.length > 12) {
        return console.log("Usuário inválido");
    }
}

function validaPassword() {
    let password = $('#password').val();
    
    if(!password || password.length < 7 || password.length > 12) {
        return console.log("Senha inválido");
    }
}

function validaConfirmacaoPassword() {
    let password = $('#password').val();
    let confirmacaoPassword = $('#confirm-password');

    if(password !== confirmacaoPassword) {
        console.log('As senhas não coincidem');
    }
}

validaUser()

