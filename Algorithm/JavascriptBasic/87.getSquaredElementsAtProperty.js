// code 1.

function getSquaredElementsAtProperty(obj,key){

    let arrayProperty = obj[key];

    if(!Array.isArray(arrayProperty)) {
        return [];
    }
    return arrayProperty.map(obj[key] * obj[key]);
}

// Reference

function square(number) {
    return number * number;
}

function getSquaredElementsAtProperty(obj, key) {
    let arrayProperty = obj[key];

    if(Array.isArray(arrayProperty) === false) {
        return [];
    }

    return arrayProperty.map(square);
}