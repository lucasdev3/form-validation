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



