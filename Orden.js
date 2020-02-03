// Bubble Sort
/*const a = [0,3,7,5,-1,4,1,7];

for(h=0 ; h<=a.length-1; h++){
    for(i=0; i<=a.length-1; i++){
        if (a[i]>a[i+1]){
          let temp = a[i];
            a[i]=a[i+1];
            a[i+1]=temp;
        }
    }
}
console.log(a);
*/

//Selection Sort
/*const b = [5,2,4,8,-1,3];
let min;
let index;
for (j=0; j<=b.length-1; j++){
    for (k=j+1; k<=b.length-1; k++){   
        if(b[j]>b[k]){
         min = b[k];
         index=k;
        let temp1 = b[j];
        b[j] = min;
        b[index]=temp1;
        }
    }    
}
console.log(b);
*/

//Insertion Sort
/*const c = [2,0,0,8,6,2,0,2,0,2,-1,50];
let copy=[c[0]];  
for (i=1; i<c.length; i++){
    
    if (c[i] < copy[i-1]){
            var temp=c[i];

        for(let j =copy.length-1; j>=0; j--){
            if (j==0 && temp<copy[j]){
                copy.splice(j,0,temp);
                break;
            }
            if (temp<copy[j] && temp>copy[j-1] || temp==copy[j-1]){
                copy.splice(j,0,temp);
                break;
            }
        }
    }
    else 
    copy.push(c[i]);
}
console.log(copy);
*/

//Merge Sort
/*function merge(d){
    if(d.length===1){
        return d;
    }

    redondeo = Math.floor(d.length/2);
    let dDer=d.slice(0,redondeo);
    let dIzq=d.slice(redondeo);

    var Do=merge(dDer);
    var Io=merge(dIzq);
    let nuevo=[];

    while(Do.length>0 && Io.length>0){
        if(Io[0]>Do[0]){
            nuevo.push(Do[0]);
            Do.shift();
        }
        else {
        nuevo.push(Io[0]);
        Io.shift();
        }        
    }
    return nuevo=[...nuevo,...Do,...Io];
}
console.log(merge([3,1,4,1,5,9,2,6,5,4]));
*/

//Shell Sort

//function shell(array){
 //   let gap=Math.floor(array.length/2);
 //   let aux=[];




//}

//Quick Sort
/*function quick(e){
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
*/

const c = [2,0,0,8,6,2,0,2,0,2];
let copy=[c[0]]; 
for (let i=1; i<c.length; i++){
    
    if (c[i] < copy[i-1]){
            var temp=c[i];
            let j =copy.length-1;
        while(j>=0 ){
            if (j==0 && temp<copy[j]){
                copy.splice(j,0,temp);
            }
            if (temp<copy[j] && temp>copy[j-1] || temp==copy[j-1]){
                copy.splice(j,0,temp);
            }
            j--;
        }
    }
    else 
    copy.push(c[i]);
}
console.log(copy);
