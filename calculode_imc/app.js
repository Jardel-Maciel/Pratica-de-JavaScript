function calcular(){
    var altura = document.getElementById('altura');
    var peso = document.getElementById('peso');
    var res = document.getElementById('res')
    var alt = Number(altura.value)
    var pes = Number(peso.value)
    var imc = pes / (alt * alt)
    res.innerHTML = imc.toFixed(1)
    if(imc < 18.5 ){
        res.innerHTML = ("Seu imc é " + imc.toFixed(1) + " Você está abaixo do peso.")
    }if(imc >= 18.5 && imc <= 24.9){
        res.innerHTML = ("Seu imc é " + imc.toFixed(1) + " Você está com peso normal .")

    }if(imc >= 25 && imc <= 29.9){
        res.innerHTML = ("Seu imc é " + imc.toFixed(1) + " Você está com sobrepeso.")
    }if(imc >= 30 && imc <= 34.9){
        res.innerHTML = ("Seu imc é " + imc.toFixed(1) + " Você está com Obesidade tipo 1.")
    }if(imc >= 35 && imc <= 39.9){
        res.innerHTML = ("Seu imc é " + imc.toFixed(1) + " Você está com Obesidade tipo 2.")
    }if(imc >= 25 && imc <= 29.9){
        res.innerHTML = ("Seu imc é " + imc.toFixed(1) + " Você está com sobrepeso.")
    }if(imc >= 40 ){
        res.innerHTML = ("Seu imc é " + imc.toFixed(1) + " Você está com Obesidade tipo 3.")
    }
    
}