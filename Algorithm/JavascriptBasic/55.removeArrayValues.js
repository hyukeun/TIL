// 첫번째 시도한 코드

function removeArrayValues(obj){
    for(let props in obj){
        if( obj[props] === 'array'){
            delete obj[props]
        }
    }
    return obj;
}

// 두번째 시도한 코드

function removeArrayValues(obj) {
    for (let props in obj){
        if(Array.isArray(obj[props])){
            delete obj[props];
        }
    }
    return obj;
}