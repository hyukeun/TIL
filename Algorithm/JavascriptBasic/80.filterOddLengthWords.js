function filterOddLengthWords(words){
    return words.filter(function(element) {
        return element.length % 2 !== 0;
    })
}