function solution(i) {
    //문자 찾기
    let answer = i;
    let answer2 = 0;
    const second = 'R';
    for (x of i) {
        if (x === 'R') answer2++;
    }

    return answer2;
}

console.log(solution('COMPUTERPROGRAMMING'));
