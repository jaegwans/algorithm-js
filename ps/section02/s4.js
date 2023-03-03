function solution(arr) {
    let answer = [];
    // 1:가위 2:바위 3:보
    for (i = 0; i < 10; i++) {
        if (arr[i] > 0 && typeof answer[i - 1] == 'number') {
            answer.push(answer[i - 1] + 1);
        } else {
            answer.push(arr[i]);
        }
    }
    answerNum = answer.reduce((a, b) => a + b, 0);

    return answerNum;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
//3402
