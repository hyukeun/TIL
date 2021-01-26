function take(num, array){
    if( num === 0 || array.length === 0){
        return [];
    } else {
        const head = array[0];
        const tail = array.slice(1);
        return [head].concat(take(num -1,tail));
    }
}