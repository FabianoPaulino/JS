const box = document.getElementById("caixa")
let mapa = new Map()
mapa.set("Key", "Jar")
mapa.set("Key_10", "Java_10")
mapa.set("Key_100", 10)
console.log(mapa)
//box.innerHTML = mapa.get("Key")
let res = ""
let pes = "Key_100"
if(mapa.has(pes)){
    res = "Existe" + mapa.get(pes)
    res+= "<br/> O tamanho da coleção é " + mapa.size
}else res = "Não existe"
box.innerHTML = res
console.log(mapa.keys())