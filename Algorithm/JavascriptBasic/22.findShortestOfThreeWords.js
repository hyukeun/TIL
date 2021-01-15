// case 1.

function findShortestOfThreeWords(word1,word2,word3){
    if(word1.length <= word2.length && word1.length <= word3.length){
        return word1;
    }else if(word2.length <= word1.length && word2.length <= word3.length){
        return word2;
    }else if(word3.legth <= word1.length && word3.length <= word1.length){
        return word3;
    }else{
        return false;
    }
}

// case 2.

function findShortestOfThreeWords(word1, word2, word3) {
    //단어 3개를 문자열들의 배열로 지정
    let parameters = [word1, word2, word3];
    let shortest = parameters[0];

    //for문으로 문자열 길이 비교
    for ( let i = 1 ; i < parameters.length ; i++ ){
        if(shortest.length > parameters[i].length){
            return shortest = parameters[i];
        } 
    }
    return shortest;
}
