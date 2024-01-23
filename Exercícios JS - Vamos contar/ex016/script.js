function contar() {
    var inicio = window.document.getElementById('txtinc');
    var fim = window.document.getElementById('txtfim');
    var contador = window.document.getElementById('txtcon');
    var res = window.document.getElementById('res');

    res.innerHTML = ''; // Limpa o conteúdo anterior

    if (inicio.value.length == 0 || fim.value.length == 0 || contador.value.length == 0) {
        window.alert("[ERRO] Faltam dados")
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = "Contando: "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(contador.value)

        if (i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
            }
    
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
                }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}
