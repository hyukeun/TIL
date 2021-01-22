function keep (array, keeper) {
    return array.filter(function(el) {
        if ( el === keeper)
        return true;
    })
    return false;
}