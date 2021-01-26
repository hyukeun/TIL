// code 1. pass

function or(arr) {

    const head = arr[0];
    const tail = arr.slice(1);

    if(arr.length === 0){
        return false;
    }
    else if (head === true){
        return true;
    }
        return or(tail);
};

// Reference code.

function or(arr) {
    if (arr.length === 0) {
        return false;
    }

    // const [head, ...tail] = arr;
    const head = arr[0];
    const tail = arr.slice(1);

    // if (head === true) {
    //   return true;
    // }

    return head || or(tail);
}