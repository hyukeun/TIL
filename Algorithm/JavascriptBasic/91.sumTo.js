function sumTo(num){
    if( num === 0){ // 자연수 1부터 num까지의 합을 계산하는 함수이다. 
        return 0;
    } else {
        return num + sumTo ( num - 1);
    }
}