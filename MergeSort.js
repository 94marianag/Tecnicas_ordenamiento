//Merge Sort
function merge(d){
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
