/**
 * 折半查找法
 */
// 待查找数组
const arr = [1, 3, 6, 10, 13, 16, 18, 22, 23, 35, 89, 100];
// 目标元素
const target = 89;
// 记录查找的长度
let recodeLength = 0;
// 折半查找法
function find_way(array) {
  const length = Math.floor(array.length / 2);
  if (array[length] === target) {
    return `目标元素的下标为${length + recodeLength}`;
  } else if (array[length] > target) {
    return find_way(array.slice(0, length));
  } else if (array[length] < target) {
    recodeLength += length;
    return find_way(array.slice(length, array.length));
  }
}

const result = find_way(arr);
console.log(result);
