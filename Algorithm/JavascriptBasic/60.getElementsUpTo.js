// 첫번째 시도한 코드

function getElementsUpTo(array,index){
    let newArr = {};
    newArr = array.slice(index - 1);
    return newArr;
}

// 두번째 시도한 코드 : 통과

function getElementsUpTo(array,index){
    let newArr = {};
    newArr = array.slice(0,index);
    return newArr;
}

// Reference

function getElementsUpTo(array, n) {
    return array.slice(0, n);
}