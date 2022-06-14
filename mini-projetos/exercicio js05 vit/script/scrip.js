var num = document.getElementById('txtn')
var res = document.getElementById('res')
var valores = []

function adicionar() {
    if (num.value.length == 0 || num.value > 100) {
        alert('Por favor, verifique os dados para continuar!')
    } else {
        var n = Number(num.value)
        valores.push(n)
        
        var item = document.createElement('option')
            item.text = `o número ${n} foi adicionado`
            res.appendChild(item)
    }
}

function finalizar() {
    res.innerHTML += `Temos ${valores.length} números cadastrados.  ` 
   
   
    res.innerHTML += ` Os números cadastrados em ordem crescente ficam ${valores.sort()}.`
}