<template>
  <div>手写防抖debounce和节流throttle函数</div>
  <el-button @click="debounceFn">debounce</el-button>
  <p>连续点击的话，最后一次生效</p>
  <p>用途： input框不断输入，防止出发搜索 不断的调整浏览器的大小</p>
  <hr />
  <el-button @click="throttle">throttle</el-button>
  <p>采用时间戳 以时间为准 触发后需要冷却</p>
  <p>鼠标点击 滚轮事件</p>
  <hr />
  <p>倒计时</p>
  {{ day }}天{{ hr }}时{{ min }}分{{ sec }}秒

  {{ timeDown }}
  <demoTest></demoTest>
</template>
<script setup lang="ts">
import demoTest from './demoTest.vue'
import { ElButton } from 'element-plus'
import { ref, watch } from 'vue'

//用settimeout 制作倒计时
let day = ref(0)
let hr = ref(0)
let min = ref(0)
let sec = ref(0)
const timeDown = ref(30)

const end = ref(Date.parse(new Date('2023-8-12 10:10:10')))
const now = ref(Date.parse(new Date()))
const msec = ref(end.value - now.value)

const countDown = () => {
  if (now.value >= end.value) {
    day.value = 0
    hr.value = 0
    min.value = 0
    sec.value = 0
    return
  }

  day.value = parseInt(msec.value / 1000 / 60 / 60 / 24)
  hr.value = parseInt(msec.value / 1000 / 60 / 60 / 24)
  min.value = parseInt(msec.value / 1000 / 60 / 60)
  sec.value = parseInt(msec.value / 1000 / 60)

  setTimeout(() => {
    countDown()
  }, 1000)
}

watch(
  () => msec.value,
  // () => {
  //   if (timeDown.value > 0) {
  //     const timer = setTimeout(() => {
  //       timeDown.value--
  //       clearTimeout(timer)
  //     }, 1000)
  //   }
  // },
  () => {
    if (msec.value > 0) {
      const timer = setTimeout(() => {
        countDown()
        clearTimeout(timer)
      }, 1000)
    }
  },
  {
    immediate: true,
  },
)

//重在清零
const debounceFn = (fn: any, delay: number | undefined) => {
  let timer: any = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(fn.apply(this), delay)
  }
}

//重在加锁
const throttle = (fn: any, delay: number) => {
  let lastTime = 0
  return function () {
    let nowTime = Date.now()
    if (nowTime - lastTime > delay) {
      return fn.apply(this)
      // eslint-disable-next-line no-unreachable
      lastTime = nowTime
    }
  }
}
//数字排序【3，4，3，4，6，9】
//冒泡排序
const bubbleSort = (arr) => {
  const arrNum = arr.length
  for (let i = 0; i < arrNum - 1; i++) {
    for (let j = 0; j < arrNum - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
    return arr
  }
}

bubbleSort([3, 4, 3])

//斐波那契数列  1 12358....
const fibo = (n: number) => {
  if (n < 1) {
    return 1
  }
  return fibo(n - 1) + fibo(n - 2)
}
fibo(2)

//冒泡排序，负数位置不变
let arr = [11, 2, -3, 0, -6]
let result = []
let sort = (array) => {
  let temp
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

let arr2 = arr.filter((x, index) => {
  if (x < 0) {
    result.push({
      number: x,
      index: index,
    })
  }
  if (x > 0) {
    return x
  }
})
let newarr = sort(arr2)
result.map((item) => {
  newarr.splice([item.index], 0, item.number)
})
console.log(newarr)
</script>
