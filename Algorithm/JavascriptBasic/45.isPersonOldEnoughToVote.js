
// 첫번째 시도.

function isPersonOldEnoughtToVote(person){
    if(person >= 18){
        return true;
    } else {
        return false;
    }
}

// 두번째 시도.

function isPersonOldEnoughtToVote(person){
    if(person.age >= 18){
        return true;
    } else {
        return false;
    }
}