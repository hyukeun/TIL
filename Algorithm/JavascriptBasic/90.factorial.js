function factorial(num){
    if(num <= 1){
        return 1; // 자연수 1부터 n까지의 곱을 계산하는 함수이기때문에 자연수 1보다 같거나 작을경우는 1를 반환해준다.
    } else {
        return num * factorial(num -1); // factorial로 재귀 함수 형태가 되어 결과적으로 끝에 곱셈이 1이 되도록 한다.
    }
}