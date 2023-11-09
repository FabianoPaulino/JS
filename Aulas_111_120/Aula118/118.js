//Dentro do laço
for(let i=0;i < 10;i++){
    console.log(i)
}
//laço sem bloco
let ind = null
for(ind=0; ind < 10; ind++);

console.log(ind)
//Mesma linha
let i = 10; let j = 1;

//Elemento novo não declarado
let canal = "CFB Cursos";

["J","a","v","a","s","c","r","i","p","t"].forEach(element =>{
    console.log(element)
});

let n1 = [1,2]
let n2 = [3,4];
[n1,n2].map(l=>console.log(l))

let numbers = [10, 20, 30];
([n1, n2, n3] = numbers).map(l=>console.log(l))
