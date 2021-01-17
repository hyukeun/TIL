
// 나의 첫번째 풀이코드.(test 통과는 완료.)

function removeNumbersLargerThan(num,obj){
    for( const property in obj ){
        if( obj[property] > num )
        delete obj[property];
    } return removeNumbersLargerThan;
}

// Reference Code.

function removeNumbersLargerThan(num,obj){
    for(let prop in obj) {
        if(obj[prop] > num) {
            delete obj[prop];
        }
    }
    return obj;
}