let soma= (...valores) => {
    let somar=(val) =>{
        let res=0
        for(v of val)
            res= res + v
        return res 
    }
    return somar(valores)
}

console.log(soma(10,4,20))