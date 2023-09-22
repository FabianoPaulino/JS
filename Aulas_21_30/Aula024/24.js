let fun = function(v1,v2){return v1+v2}

console.log(fun(60,79))

let fo = new Function("v1","v2","return v1+v2")

console.log(fo(1,2))