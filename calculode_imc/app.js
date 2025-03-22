function calcular(){
    var altura = document.getElementById('altura');
    var peso = document.getElementById('peso');
    var res = document.getElementById('res')
    var alt = Number(altura.value)
    var pes = Number(peso.value)
    var imc = pes / (alt * alt)
    res.innerHTML = imc.toFixed(1)
}