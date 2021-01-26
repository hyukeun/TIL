function arrLength(array){
    if(array.isEmpty() === true){
        return 0;
    } else {
        const tail = array.slice(1);
        return arrLength(tail) + 1
    }
}