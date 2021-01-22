// code

function getLengthOfLongerstElement(array){
    if( array.length === 0){
        return 0;
    } else {
        return array.reduce(function(acc,cur){
            if( acc.length >= cur.length){
                return acc;
            } else {
                return cur;
            }
        })
    }
}

// Reference

function getLengthOfLongestElement(arr) {
    if (arr.length === 0) {
      return 0;
    }
    
    return arr.reduce(function(acc, curr) {
      if(acc.length >= curr.length) {
        return acc;
      }
      else {
        return curr;
      }
    }).length;
  }

// 밑에 추가적으로 length;를 작성해주어서 반드시 number type으로 return해 줄 수 있게 하고 
// 배열 안에 가장 긴 element의 길이를 return해야 하고, 길이가 동일한 경우에도 결과가 잘 나와야 한다.