function solution(i) {
    //대문자 찾기
    let answer = i;
    let answer2 = 0;

    for (x of i) {
        if (x === x.toUpperCase()) {
            answer2++;
        }
    }

    return answer2;
}

console.log(solution('KoreaTimeGood'));
