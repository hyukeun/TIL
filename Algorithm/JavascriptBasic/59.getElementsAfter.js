// 내가 시도한 코드 : 통과

function getElementsAfter(array, index){
    let newArr = {};
    newArr = array.slice(index + 1);
    return newArr;
}

// Reference code

function getElementsAfter(array, n) {
    let newArr = [];
    for (let i = n + 1; i < array.length; i++) {
        newArr.push(array[i]);
    }
    return newArr;
}