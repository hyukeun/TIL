// code 1

function getLastElementOfProperty(obj,key){

    if(!Array.isArray(obj[key])){
        return undefined;
    }
    return obj[key] - 1;
}

// Reference Code

function getLastElementOfProperty(obj, key) {
    let prop = obj[key];
    if (!Array.isArray(prop)) {
        return undefined
    }

    return prop[prop.length - 1]
}