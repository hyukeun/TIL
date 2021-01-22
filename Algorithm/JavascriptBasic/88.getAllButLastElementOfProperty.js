function getAllButLastElementOfProperty(obj,key){
    if(!Array.isArray(obj[key])){
        return [];
    } else {
        return obj[key].slice(0,-1);
    }
}