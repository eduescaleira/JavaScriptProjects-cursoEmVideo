function contar() {
    var inicio = parseInt(window.document.getElementById('txtinc').value);
    var fim = parseInt(window.document.getElementById('txtfim').value);
    var contador = parseInt(window.document.getElementById('txtcon').value);
    var res = window.document.getElementById('res');

    res.innerHTML = ''; // Limpa o conteúdo anterior

    for (var i = inicio; i <= fim; i += contador) {
        res.innerHTML += i + '<br>';
    }
}