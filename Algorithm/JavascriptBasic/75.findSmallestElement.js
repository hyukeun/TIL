function findSmallestElement(array){
    if( array.length === 0){
        return 0;
    } else {
        return array.reduce(function(a,b) {
            return Math.min(a,b);
        })
    }
}