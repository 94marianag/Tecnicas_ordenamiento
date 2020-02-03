// Bubble Sort
const a = [0,3,7,5,-1,4,1,7];

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
