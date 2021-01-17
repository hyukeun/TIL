function countNumberOfKeys(obj){
    let count = 0;
    for (let key in obj){
        count ++;
    }
    return count;
}