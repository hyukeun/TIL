function arrProduct(arr){
    if(arr.length === 0){
        return 1;
    } else {
        const head = arr[0];
        const tail = arr.slice(1);
        return head * arrProduct(tail);
    }
}