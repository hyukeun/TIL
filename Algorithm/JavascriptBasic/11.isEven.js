'use strict';

function isEven(num) {
    if ( num % 2 === 0){
        return true;
    } else if (num === 0){
        return true;
    } else {
        return false;
    }
}

// 1차로 작성한 답안
//     function isEven(number){
//       if(number === number/2){
//         return true;
//     } else {
//         return false;
//     }
// }
// boolean type을 잘 못 작성한 것 같다.