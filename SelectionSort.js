//Selection Sort
const b = [5,2,4,8,-1,3];
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
