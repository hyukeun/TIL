// code 1. pass

function and(arr) {
    const head = arr[0];
    const tail = arr.slice(1);

    if(arr.length ===0){
        return true;
    }
    else if (head === false){
        return false;
    }
        return and(tail);
};

//Reference

function and(arr) {
    if (arr.length === 0) {
        return true;
    }

    // const [head, ...tail] = arr;
    const head = arr[0];
    const tail = arr.slice(1);

    // if (head === false) {
    //   return false;
    // }

    return head && and(tail);
}