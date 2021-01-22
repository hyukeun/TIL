function computeAverageOFNumbers(array){
    if(array.length === 0) {
        return 0;
    } else {
        let result = array.reduce(function(acc,cur){
            return acc + cur;
        });
        return result / array.length;
    }
}