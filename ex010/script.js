function Calcular() {
    var txtv = window.document.getElementById('txtvel')
    var vel = Number(txtv.value);
    var res = document.getElementById('res');
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} km/h</strong></p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você está multado por excesso de velocidade</p>`
    }
    res.innerHTML += "<p>Dirija sempre com o cinto de segurança</p>"
}