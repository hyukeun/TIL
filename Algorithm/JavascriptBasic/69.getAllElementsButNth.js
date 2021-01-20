function getAllElementsButNth(array, index){
    let result = [];
    for ( let i = 0; i< array.length; i++){
        if( i !== index){
            result.push(array[i]);
        }
    }
    return result;
}