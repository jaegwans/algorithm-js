//삼각형 판별
function solution(a, b, c) {
    let answer;
    const arr = [a, b, c];
    const sortArr = arr.sort((a, b) => b - a);

    let result = true;

    if (sortArr[0] >= sortArr[1] + sortArr[2]) {
        result = false;
    }

    console.log(result ? 'YES' : 'NO');
}

console.log(solution(13, 33, 17));
