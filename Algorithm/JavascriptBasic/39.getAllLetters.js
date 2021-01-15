function getAllLetters(str){
    let result =[];
    for (let i = 0; i < str.length; i++){
        str.push(str[i])
    }
    return result;
}