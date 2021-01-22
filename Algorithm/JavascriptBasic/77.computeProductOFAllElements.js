function computeProductOfAllElements(array){
    if(array.length === 0){
        return 0;
    } else {
        return array.reduce(function(arr,cur){
            return arr * cur;
        })
    }
}