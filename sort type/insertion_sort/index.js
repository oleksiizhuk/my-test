const array = [10, 2, 4, 3, 7];
console.log(array);
let originalInsertionSort = (arr) => {
    let length = arr.length;
    for (let i = 1; i < length; i++) {
        let tmp = arr[i];
        let index = i - 1;
        while (index >= 0 && arr[index] > tmp) {
            arr[index + 1] = arr[index];
            index--;
        }
        arr[index + 1] = tmp;
    }
    return arr;
};

console.log(originalInsertionSort(array));
/*
function myInsertionSort (arr)  {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let item = arr[i];
        let index = i - 1;
        for ( ;index >= 0; index--) {
            if (index >= 0 && arr[index] > item) {
                arr[index + 1] = arr[index];
            }
        }
        arr[index + 1] = item;
    }
    return arr;
}

var t0 = performance.now();
let test = myInsertionSort(array);
console.log(test);
var t1 = performance.now();
console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:');
*/

