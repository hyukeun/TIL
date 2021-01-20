function findShortestWordAmongMixedElements(array){
    if (array.length === 0) {
        return '';
    }
    return array.reduce((acc, cur) => {
        if (typeof acc !== 'string'){
            if(typeof cur === 'string'){
                return cur;
            }
            return '';
        }
        if(typeof cur === 'string') {
            if (cur.length < acc.length){
                return cur;
            }
            return acc;
        }
        return acc;
    })
}