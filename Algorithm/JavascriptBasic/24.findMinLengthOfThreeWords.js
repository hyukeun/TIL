// case 1.

function findMinLengthOrThreeWords(word1,word2,word3){
    if(word1.length <= word2.length && word1.length <= word3.length){
        return word1.length;
    } else if(word2.length <= word1.length && word2.length <= word3.length){
        return word2.length;
    } else if (word3.length <= word1.length && word3.length <= word1.length){
        return word3.length;
    } else {
        return false;
    }
}

// case 2.

function findMinLengthOfThreeWords(word1,word2,word3){
    let parameters = [word1.length,word2.length,word3.length]
    let shortest = parameters[0]

    for(let i = 1 ; i < parameters.length; i ++){
        if(shortest.length > parameters[i].length){
            return shortest = parameters[i]
        }
    }
    return shortest;
}

