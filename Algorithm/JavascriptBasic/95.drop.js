// code 1 . pass
function drop(num, arr){
    if(num > arr.length){
        return [];
    } else if (num === 0){
        return arr;
    } else {
        arr.shift()
        return drop(num -1, arr);
    }
}

// Reference
function drop(num, arr) {
    // if (num >= arr.length) {
    //   return [];
    // }
  
    if (num === 0 || arr.length === 0) {
      return arr;
    }
  
    // const [head, ...tail] = arr;
    const tail = arr.slice(1);
    return drop(num - 1, tail);
  }