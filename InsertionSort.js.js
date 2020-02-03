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

//Insertion con while
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
