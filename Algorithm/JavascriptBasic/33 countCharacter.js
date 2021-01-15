function countCharacter(string, char){
    let count =0;
    for(let i=0; i<string.length; i++){
        if(string.charAt(i) === char){
            return count++
        }
    }
    return count;
}