function getType(parameter) {
    if(Array.isArray(parameter)){
        return 'array';
    }else{
        return typeof(parameter);
    }
}