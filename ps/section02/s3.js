function solution(i, j) {
    let answer = [];
    // 1:가위 2:바위 3:보
    const macthArr = [
        ['D', 'A', 'B'],
        ['A', 'D', 'B'],
        ['A', 'B', 'D'],
    ];
    const match = (a, b) => {
        return macthArr[a - 1][b - 1];
    };
    for (let k = 0; k < 5; k++) {
        answer.push(match(i[k], j[k]));
    }

    return answer;
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
//3402
