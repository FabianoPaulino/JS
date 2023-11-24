const result = document.querySelector("#p_txt")

const endpoint = 'http://localhost:8080'
let res = fetch(endpoint)
console.log(res)

fetch(endpoint).then(re=>{
    re.json().then(p=>{
        console.log(p.valor);
        result.innerHTML = p.valor
        
    })
})
