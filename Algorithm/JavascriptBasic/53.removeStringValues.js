function removeStringValues(obj){
    for(let key in obj) {
        if(typeof obj[key] === 'string'){
            delete obj[key];
        }
    }
    return obj;
}