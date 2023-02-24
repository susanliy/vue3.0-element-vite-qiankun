<template> 面试算法题--快排 {{ list }}</template>
<script setup>
  //两个数组去重   快排改为01  复杂度
  const arr1 = [1, 2, 4];
  const arr2 = [1, 2, 6, 4, 8];
  let list = [];
  const sort = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr1[j]) {
          list.push(arr1[i]);
          break;
        }
      }
    }
  };
  sort(arr1, arr2);
  console.log(111, list);

  // on 写法
  
</script>
