function solution(i) {
    // 큰 수 출력
    const l = 6;
    i.unshift(0);
    console.log(i);
    let answer = [];
    for (let k = 0; k < l; k++) {
        if (i[k] < i[k + 1]) {
            answer.push(i[k + 1]);
        }
    }
    return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12]));
