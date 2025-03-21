function calcular(){
    var altura = document.getElementById('altura');
    var peso = document.getElementById('peso');
    var pes = Number(peso.value)
    var alt = Number(altura.value)
    var res = document.getElementById('res')
    var imc = pes / (alt * alt);

    res.innerHTML = imc.toFixed(1)

    

   

}



