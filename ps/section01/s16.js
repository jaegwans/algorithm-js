function solution(i) {
    // 중복 방지 문자 출력
    let answer = '';

    for (x of i) {
        if (!answer.includes(x)) {
            answer += x;
        }
    }
    return answer;
}

console.log(solution('ksekkset'));
