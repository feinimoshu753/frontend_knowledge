const arr = [8, 20, 4, 6, 13, 17, 9, 2, 5, 11, 3, 1, 15];

function insertSort() {
  const targetArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (targetArr.length === 0) {
      targetArr.push(arr[i]);
      continue;
    }
    var length = targetArr.length;
    for (let j = 0; j < length; j++) {
      if (targetArr[j] >= arr[i]) {
        targetArr.splice(j, 0, arr[i]);
        break;
      } else if (length === 1) {
        targetArr.push(arr[i]);
      }
    }
  }
  return targetArr;
}

console.log(`排序结果为:${insertSort()}`);
