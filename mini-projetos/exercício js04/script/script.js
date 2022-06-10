function mostrar() {
    var num = document.getElementById('txtn')
    var res = document.getElementById('res')

    if (num.value.length == 0) {
        alert('Por favor, Verifique os dados!')
    } else {
        var n = Number(num.value)
        var m = 1

        res.innerHTML = '' // serve para limpar antes de uma nova tabuada

        /*while (m <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${m} = ${n*m}`
            res.appendChild(item)
            m++ 
        }*/

        for (var m = 1; m <= 10; m++) {
            var item = document.createElement('option')
            item.text = `${n} x ${m} = ${n*m}`
            res.appendChild(item)
        }
    }
}