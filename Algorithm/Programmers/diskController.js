// 1. Solution
function solution(jobs) {
    let total = jobs.length;
    let answer = 0;
    let now = 0;
    let queue = [];
}

while(true) {
    let index = 0;
    while(true) {
        if(index >= jobs.length) break;
        if(jobs[index][0] <= now ) {
            queue.push(jobs.splice(index,1)[0])
        } else {
        index++;
    }
}

    if(queue.length === 0) {
        if (jobs.length === 0) {
            break;
        } else {
        now ++;
    }
} else {
    let minIndex = 0;
    for(let i = 1; i < queue.length; i++) {
        if(queue[minIndex][1] > queue[i][1]) minIndex = i
    }
   // 2.1 수행한 시간 만큼 tick 증가
    tick += queue[minIndex][1]

   // 2.2 answer += tick - 수행한 작업의 작업 처리 요청 시간 
    answer += tick - queue[minIndex][0]

   // 2.3 queue에서 해당 job 삭제
    queue.splice(minIndex,1)

}

    return Math.floor(answer/total)

}
