const arr = [8, 4, 2, 5, 10];
console.log(arr);

const BubbleSort = (arr) => {
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        for (let k = 0; k < arrLength; k++) {
            if (arr[k] < arr[k + 1]) {
                let tmp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = tmp;
            }
        }
    }
    return arr;
};

console.log(BubbleSort(arr));