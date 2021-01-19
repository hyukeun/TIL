function removeNumberValues(obj){
    for(let props in obj){
        if(typeof obj[props] === 'number'){
            delete obj[props]
        }
    }
    return obj;
}