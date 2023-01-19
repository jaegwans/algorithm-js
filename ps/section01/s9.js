function solution(i) {
    let answer = i;
    while (answer.indexOf('A') !== -1) {
        answer = answer.replace('A', '#');
    }

    return answer;
}

console.log(solution('BANANA'));
