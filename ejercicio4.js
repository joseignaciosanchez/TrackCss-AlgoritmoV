//Crea una función que cambie un array repitiendo sus valores 
//originales (manteniendo el mismo orden). Por ejemplo, 
//repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, 
//“Ulysses”, “Ulysses”, 42, 42, false, false].
function repetirValores(x){    
    var arrayAux = [];
    for(var i = 0; i < x.length; i++){
        arrayAux.push(x[i]);
        arrayAux.push(x[i]);
    }    
    return arrayAux;  
}
y = repetirValores([4,"Ulysses", 42, false]);
console.log(y);