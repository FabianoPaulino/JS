const long = document.getElementById("long")
const lati= document.getElementById("lati")

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showlocation, errorlocation())
}else{
    console.log("Geolocalização desativada")
}

function showlocation(pos){
    long.innerHTML = `Longitude: ${pos.coords.longitude}`
    lati.innerHTML = `Latitude: ${pos.coords.latitude}`
    console.log(pos)
}
function errorlocation(){
    console.log("Erro ao obter localização")
    long.innerHTML = `Não foi possivél obter a localização`
}