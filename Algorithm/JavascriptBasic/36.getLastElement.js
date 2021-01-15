function getLastElement(array){
    if(array.length === 0){
        return undefined;
    } else if(array.length !== 0){
        return array[array.length - 1]; 
    }
}