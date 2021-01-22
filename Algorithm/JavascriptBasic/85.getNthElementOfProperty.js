function getNthElementOfProperty(obj, key, n){
    if(!Array.isArray (obj[key])){
        return undefined;
    }
    return obj[key][n];
}