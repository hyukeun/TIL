function removeElement(array, discarder) {
    return array.filter(function(element) {
        if (element !== discarder){
            return true;
        } else {
            return false;
        }
    })
}