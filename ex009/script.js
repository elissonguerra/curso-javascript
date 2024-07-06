function Verificar() {
    var pais = document.getElementById('pais');
    var res = document.getElementById('res');
      
    if (pais.value.toLowerCase() === "brasil") {
        res.innerHTML = "Você é brasileiro"
    } else {
        res.innerHTML = "Você é estrangeiro"
    };
}