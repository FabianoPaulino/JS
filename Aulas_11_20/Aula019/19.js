 let n=0
 let max=1000
 par=0;
 cont=0;
 while(n < max){
    console.log("Contagem do While: " + n)
    if(n > 10){
        break 
    }
    n++
 }
 console.log("Fim")
 for(let i=0; i < max; i++){
    if(i%2==0){
        continue
    }
    cont++
 }
 console.log("O número de pares é: " + par + ". O número de números é: " + cont)
 