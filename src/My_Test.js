let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const searchNum = (arr, num) => {
    let left = -1;
    let right = arr.length;

    while (right - left > 1) {
        let middle = Math.ceil((left + right) / 2)

        if (num === arr[middle]) return middle
        if (num > arr[middle]) {
            left = middle
        } else {
            right = middle
        }
    }
}
console.log(searchNum(arr, 1));