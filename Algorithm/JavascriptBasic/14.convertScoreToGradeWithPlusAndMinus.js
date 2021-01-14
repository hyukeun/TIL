function convertScoreToGradeWithPlusAndMinus(score) {
    // let grade;
    if(score > 100 || score < 0){
        return 'INVALID SCORE';
    }
    if(score >= 90){
        if(score <= 92){
            return 'A-';
        } else if(score <= 97){
            return 'A';
        }else{
            return 'A+';
        }
    }
    if(score >= 80){
        if(score <= 82){
            return 'B-';
        } else if (score <= 87){
            return 'B';
        } else{
            return 'B+';
        }
    }
    if(score >= 70){
        if(score <= 72){
            return 'C-';
        } else if (score <= 77){
            return 'C';
        } else {
            return 'C+';
        }
    }
    if(score >= 60){
        if(score <= 62){
            return 'D-';
        } else if (score <= 67){
            return 'D';
        } else {
            return 'D+';
        }
    }
    if( 0 <= score && score <= 59){
        grade = 'F';
    }
    return grade;
    }