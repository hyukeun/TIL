// LEVEL 3.
function solution(operations) {
    let queue = [];

    for(let item of operations) {
        let [command, val] = item.split(" ")
        if (command === "I") {
            queue.push(val * 1) 
            queue.sort((a,b) => a - b) // 삽입 후 오름차운 정렬
        } else if (queue.length) {
            // 최댓값과 최솟값 정리는 그냥 가장 뒤/앞에 있는 데이터를 지우게 한다.
            val * 1 > 0 ? queue.pop() : queue.shift()
        }
    }
    return queue.length ? [queue[queue.length - 1], queue[0]] : [0,0]
}
