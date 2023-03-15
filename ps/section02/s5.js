function solution(arr) {
    let answer = [];
    console.log(arr);
    const arr2 = [...arr];
    const lank = arr.sort((a, b) => b - a);
    console.log(lank);
    for (x of arr2) {
        console.log(x);
        answer.push(lank.indexOf(x) + 1);
    }

    //arr.indexof()
    // 해쉬의 이름만 알면 값을 순회할 수 있음
    return answer;
}

console.log(solution([89, 89, 92, 100, 76]));
