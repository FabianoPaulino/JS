const nv = function(energia){
    this.energia = energia
    this.disparos = 100
}
const n1 = new nv(100)

nv.prototype.vida = 2
nv.prototype.disparar = function(){
    if(this.disparos > 0){
        console.log("pow")
        this.disparos --
}}

console.log(nv)
n1.vida = 10
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
console.log(n1.disparos)
console.log(n1.energia)
console.log(n1.vida)