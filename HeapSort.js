function heap(array, size, i){
    let root = i;
    let left = i*2 + 1;
    let right = left +1;

    if (array[left] > array[root] && left < size){
        root = left;
    }

    if(array[right] > array[root] && right < size ){
        root = right;
    }

    if(root != i){
        [array[i], array[root]] = [array[root], array[i]]; //cambio
        heap(array, size, root);
    }

    return array;
}

function heapSort(array){
    size=array.length;
    let i = Math.floor(size/2 - 1);
    let j = size - 1;

    while(i >= 0) {
        heap(array, size, i);
        i--;
    }

    while(j >= 0){
        [array[0], array[j]] = [array[j], array[0]];
        heap(array, j, 0);
        console.log(array[0], array[j]);
        j--;
    }
    return array;
}
array = [10,4,8,5,12,2,6,11,3,9,7,1]
console.log(heapSort(array));