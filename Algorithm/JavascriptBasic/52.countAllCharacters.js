function countAllCharacters(string){
    let result = {};
    for (let i = 0; i < string.length; i++){
        if(result[string[i]] === undefined){
            result[str[i]] = 0;
        }
        result[str[i]]++;
    }
    return result;
}