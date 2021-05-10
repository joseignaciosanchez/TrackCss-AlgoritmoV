//Dado un array, mueve todos los valores un espacio de derecha 
//a izquierda eliminando el primer valor y dejando un 0 para el 
//último valor. Por ejemplo, moverAdelante([1,2,3]) debiera dar 
//como resultado [2,3,0].
function moverAdelante(x){
    x.push(0);
    x.splice(0, 1);
    return x;
}
console.log(moverAdelante([1,2,3]));