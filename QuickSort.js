//Quick Sort
function quick(e){
   let menores =[];
   let mayores=[];
   let pivote =e[0];

   if(e.length<=1){
       return e;
   }

    for(i=1;i<e.length; i++){
        if (pivote>e[i]){
            menores.push(e[i]);
        }
        else {
        mayores.push(e[i]);
        }        
        
    }
    let menoresOrd = quick(menores);
    let mayoresOrd = quick(mayores);    
    let acomodo = [...menoresOrd, pivote, ...mayoresOrd];
    return acomodo;    
}       
console.log(quick([2,5,1,9,-6,0,50,3]));
