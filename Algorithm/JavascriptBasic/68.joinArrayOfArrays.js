function joinArrayOfArrays(array){
    const result = array.reduce(function(acc, val){
        return acc.concat(val);
    })
    return result;
}