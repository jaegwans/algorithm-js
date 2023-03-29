function solution(arrParam) {
    let answer = [];
    //합을 구하는 함수
    //합을 담는 배열 변수
    //위의 max
    const sumArr = (arr) => {
        return arr.reduce((a, b) => a + b, 0);
    };
    //행 합
    for (x of arrParam) {
        answer.push(sumArr(x));
    }
    //열 합
    for (let i = 0; i < 5; i++) {
        arrParam[i][]
    }
    //대각선 합

    return answer;
}

console.log(
    solution([
        [10, 13, 10, 12, 15],
        [12, 39, 30, 23, 11],
        [11, 25, 50, 53, 15],
        [19, 27, 29, 37, 27],
        [19, 13, 30, 13, 19],
    ])
);
