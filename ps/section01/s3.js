//연필 개수
function solution(i) {
    let answer;
    let _flag = true;
    let penQuantity = 12;
    while (_flag) {
        if (i > penQuantity) {
            penQuantity += 12;
        } else {
            answer = penQuantity;
            break;
        }

        console.log(penQuantity);
    }
    return answer / 12;
}

console.log(solution(178));
