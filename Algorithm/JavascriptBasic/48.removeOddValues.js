
// 첫번째 작성 코드.

function removeOddValues(obj){
    let result = '';

    for(let key in obj){
        if(obj[key] !== obj[key]%2){
            return obj;
        }else {
            return result;
        }
    }
}

// 두번째 작성 코드.

function removeOddValues(obj) {
    for( let key in obj){
        if( obj[key] % 2 === 1){
            delete obj[key];
        }
    }
}
