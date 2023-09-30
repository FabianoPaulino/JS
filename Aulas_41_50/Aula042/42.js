const idades = [15,45,25,17,96,14,36,65,44]
const maior = idades.filter((i, ind, arr)=>{
    if(i > 18){
        return i
    }
})
console.log(maior)