function getLongestElement(array){
    if ( array.length === 0) {
        return '';
    }else {
        return reduce(function(stringA,stringB){
            if(stringA >= stringB){
                return stringA;
            }else {
                return stringB;
            }
        })
    }
}