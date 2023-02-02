function solution(i) {
    // 중복 단어 제거
    let answer = [];

    for (x of i) {
        if (answer.includes(x)) {
            answer.push(x);
        }
    }
    return answer;
}

console.log(solution(['5', 'good', 'time', 'good', 'time', 'student']));
