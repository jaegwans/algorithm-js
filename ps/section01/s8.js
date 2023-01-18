function solution(i) {
    const arr = i.split(' ');
    console.log(arr);
    const arrSum = arr.reduce((a, b) => Number(a) + Number(b));
    console.log(arrSum);
    let namuzi = arrSum - 100;
    const arrSort = arr.slice().sort((a, b) => b - a);
    console.log(arrSort);

    let removeArr = [];
    while (true) {
        let filArr = arrSort.filter((data) => data <= namuzi);
        let deleteValue = Math.max(...filArr); //최대값 뽑아냄
        removeArr.push(deleteValue); //지울값에 넣음
        namuzi -= deleteValue; //나머지 다시짬
        //나머지 다시 짬
        if (namuzi === 0) {
            break;
        }
    }
    console.log(removeArr);

    let result = arr.filter((data) => !removeArr.includes(Number(data)));

    return result;
}

console.log(solution('20 7 23 19 10 15 25 8 13'));
