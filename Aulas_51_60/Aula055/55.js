const box = document.getElementById("caixa")

const mp = new Set(["Lá ele","Musica boa", "Musica good vibe", "Musica exelente"])
mp.add()  
mp.add("Musica dos deuses")
mp.delete("Musica good vibe")
mp.forEach((st1, st2, se)=>{
    box.innerHTML += (st1 + " / " + st2 + " / " + se)
})

