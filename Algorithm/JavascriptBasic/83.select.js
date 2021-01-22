function select(array,obj){
    let newObj = {}; // return new obj
    for (let key in obj) { // obj is give property 
        for ( let i = 0; i < array.lenght; i++) { // add array.length loop 
            if( key === array[i]) { // obj is in array
                newObj[key] = obj[key]; // return value key is property obj 
            }
        }
    }
    return newObj; 
}