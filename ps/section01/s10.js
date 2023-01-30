function solution(i) {
    let answer = i;
    let answer2 = 0;
    const second = 'R';
    while (answer.indexOf('R') !== -1) {
        answer = answer.replace('R', '#');
        answer2++;
    }

    return answer2;
}

console.log(solution('COMPUTERPROGRAMMING'));
