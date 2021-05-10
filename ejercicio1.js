//Configura un array para que los valores negativos se transformen 
//en 0. Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como 
//resultado [1,2,0,0].
function resetNegativos(x){
    for(var i=0; i<x.length; i++){					
		if(x[i] < 0){				
		x[i] = 0;				
		}				
	}					
return x;
}
console.log(resetNegativos([1,2,-1,-3]));