function addToFrontOfNew(array, element){
    const newArray = array.slice();
    newArray.unshift(element);
    return newArray;
}