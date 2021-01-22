// code 1

function getProductOfAllElementsAtProperty(obj,key){
    if(!Array.isArray(obj[key])){
        return 0;
    } else {
        return obj[key].reduce(a * b);
    }
}

// Reference code

function product(accumulator, value) {
    return accumulator * value;
}

function getProductOfAllElementsAtProperty(obj, key) {
    let arrayProperty = obj[key];
    
    if (!Array.isArray(arrayProperty)) {
        return 0;
    }

    if (arrayProperty.length === 0) {
        return 0;
    }

    return arrayProperty.reduce(product);
}