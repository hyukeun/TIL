function printObject(obj){
    let result = '';
    for( let key in obj) {
        result = result + key + ': ' + obj[key] + '\n';
    }
    return result;
}