const soma=(...val)=>{
    const som = valo => {
        let res=0
        for (v of valo) {
            res+=v
        }
            return res
    }
    return som(val)
}
console.log(soma(1,2,3))
