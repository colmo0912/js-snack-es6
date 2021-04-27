


function filtraNumeri(array,numMinimo,numMassimo) {

    return numeri.filter(function(element , index ){

        if (index >= numMinimo && index <=numMassimo ){
    
            return true
        }else {
            return false
        }
    })

}


let numeri = [12,34,56,10,44]


let numeriNuovo = filtraNumeri(numeri ,2,4)

console.log(numeriNuovo)

