// code 1. 

function getElementsLessThan100AtProperty(obj, key){
    if (obj[key] === [] || obj[key] > 100 || obj[key] !== Array.isArray(obj[key])){
        return [];
    } else {
        return obj[key].filter(obj[key] < 100);
    }
}
// 배열에 100보다 작은 모든 element를 가진 배열을 리턴해야합니다. 조건이 통과가 되지않았다.


// Reference 

function lessThan100(number) {
    return number < 100;
}

function getElementsLessThan100AtProperty(obj, key) {
    let arrayProperty = obj[key];
        if (!Array.isArray(arrayProperty)) {
            return [];
    }
    return arrayProperty.filter(lessThan100);
}