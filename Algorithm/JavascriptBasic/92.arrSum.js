function arrSum(arr){
    if( arr.length < 1){
        return 0;
    } else {
        const head = array[0];
        const tail = array.slice(1);
        return head +arrSum(tail);
    }
}