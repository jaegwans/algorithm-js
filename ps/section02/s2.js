function solution(i) {
    // 큰 수 출력
    const l = 8;
    let bigger = i[0];
    console.log(i);
    let answer = [];
    answer.push(bigger);
    for (x of i) {
        if (x > bigger) {
            answer.push(x);
            bigger = x;
        }
    }
    return answer.length;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
