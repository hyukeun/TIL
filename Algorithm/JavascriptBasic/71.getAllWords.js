function getAllWords(string){
    let result = [];
    if ( string === ''){
        return result;
    } else {
        return string.split(' ');
    }
}