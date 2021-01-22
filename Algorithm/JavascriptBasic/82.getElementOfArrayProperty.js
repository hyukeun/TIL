function getElementOfArrayProperty(obj,key,index){
    let arrayProperty = obj[key];
    if(Array.isArray(obj[key]) === false) {
        return undefined;
    } else {
        return arrayProperty;
    }
}