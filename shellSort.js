function shellSort(array) {
    let size = array.length;
    let gapSize = Math.floor((size) / 2);
    while (gapSize > 0) {
        ////////////////////////////////
      for(h=0; h < gapSize ; h++){
        for (i = gapSize; i < size; i = gapSize + i) {
          let temp = array[i];
          for (j = i - gapSize; j >= 0 && array[j] > temp; j = j - gapSize) {
            array[j + gapSize] = array[j];
          }
          array[j + gapSize] = temp;
        }
      }
        ///////////////////////////////
        gapSize = Math.floor(gapSize/2) 
    }
    return array;
  };
  console.log(shellSort([3,4,0,-1,1,-4,7,9,3]));









/*const c = [2,0,-4,0,8,6,2,0,2,-44,-4,0,2,6,6,6];
const copy=[];
copy =c[0]; 
for (let i=1; i<c.length; i++){
    
    if (c[i] < copy[i-1]){
            var temp=c[i];
            let j =copy.length-1;
        while(j>=0 ){
            if (j==0 && temp<copy[j]){
                copy.splice(j,0,temp);
                j=-1;
            }
            else if (temp<copy[j] && temp>copy[j-1]||temp==copy[j-1]){
                copy.splice(j,0,temp);
                j=-1
            }
            j--;
        }
    }
    else 
    copy.push(c[i]);
}
console.log(copy);
*/

/*function insertionbetter(array) {
    let size = array.length;
    for (i = 0; i < size; i++) { 
        let temp = array[i]; 
        for (j = i-1; j >= 0 && array[j] > temp; j--) { 
            array[j+1] = array[j]; 
        }
        array[j+1] = temp;
        console.log(array, array[j+1]) 
    }
    return array;
};
console.log(insertionbetter([1, 4, 0, -1, 5]))
*/



