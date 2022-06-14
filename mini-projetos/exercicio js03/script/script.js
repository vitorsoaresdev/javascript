function calcular() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {

    res.innerHTML = 'Contando: '
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    
    if (i < f) {
        for (i; i <= f; i += p) {
            res.innerHTML += `${i} \u{1F449}`
        }
    } else {
    
    for (i; i >= f; i -= p) {
        res.innerHTML += `${i} \u{1F449}`
    }
  }
  res.innerHTML += '\u{1F3C1}'
}
}