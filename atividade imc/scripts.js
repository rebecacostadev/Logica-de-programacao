function calcularIMC(){
    event.preventDefault();
    let mPeso = Number(peso.value);
    let mAltura = Number(altura.value);
    let imc = (mPeso / (mAltura * mAltura)).toFixed(1);

    if(mPeso == 0){
        alert("Peso inválido");
        return;
    }
    if(mAltura == 0){
        alert("Altura inválida");
        return;
    }

    if(imc <= 18.5){
        alert("Abaixo do peso: "+ imc);
    }else if(imc > 18.5 && imc <= 25){
        alert("Peso normal: "+ imc);
    }else if(imc > 25 && imc <= 30){
        alert("Acima do peso: "+ imc);
    }else{
        alert("Obesidade: " + imc);
    
    }
}

