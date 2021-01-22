// code

function computeSumOfAllElements(array){
    return array.reduce(function(acc,val){
        return acc + val;
    },0)
}


// Reference

function computeSumOfAllElements(arr) {
    if (arr.length === 0) return 0;
    return arr.reduce(function(acc, val) {
        return acc + val;
    });
}