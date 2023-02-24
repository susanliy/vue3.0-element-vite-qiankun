<!-- <template>
  <h1>今天国际手写面试题</h1>
  <div>倒计时：{{ time }}</div>
  <hr />
  <p>正数：{{ plusList }}</p>
  <p>负数：{{ minusList }}</p>
  <p>结果：{{ resultList }}</p>
  <hr />
  {{ testList }}
</template>
<script lang="ts" setup>
  import { ref, watch } from 'vue';

  // 用settimeout 制作倒计时
  const time = ref(30);

  watch(
    () => time.value,
    () => {
      if (time.value > 0) {
        const timer = setTimeout(() => {
          time.value--;
          clearTimeout(timer);
        }, 1000);
      }
    },
    {
      immediate: true,
    }
  );

  //[11, 2, -3, 0, -6]冒泡排序，负数位置不变
  const list: number[] = [11, 2, -3, 0, -6, 0];
  const testList = list.filter((item) => {
    return item >= 0;
  });

  let minusList: { number: number; index: number }[] = [];
  let plusList = list.filter((x, index) => {
    if (x < 0) {
      minusList.push({
        number: x,
        index: index,
      });
    }
    return x >= 0;
  });

  const sort = (arr: any[]) => {
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  };

  const resultList = sort(plusList);
  minusList.map((item) => {
    resultList.splice(item.index, 0, item.number);
  });

  //宏任务微任务

  // token 的全局管理
  // 登录返回用户的token
  // token储存在vuex和localstorage
  // 请求和页面跳转的时候需要去验证token值是否正确
  // 1.token的axios的拦截器中设置
  // Http.interceptors.request.ues(function (request) {
  //   const token = localstorage.getItem('token');
  //   headers['X-TOKEN'] = token;
  //   return request;
  // });
  // // 2.页面跳转的时候判断是否存在token,没有的话放回登录页
  // router.beforeEach((to, from, next) => {
  //   // to and from are both route objects.
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     next();
  //   } else {
  //     //登录页
  //   }
  // });

  //[11, 2, -3, 0, -6, 0]
  // const list = [11, 2, -3, 0, -6, 0];
  // const minusList = [];
  // const plusList: number[] = list.filter((item, index) => {
  //   if (item < 0) {
  //     minusList.push({
  //       number: item,
  //       ins: index,
  //     });
  //   }
  //   return item >= 0;
  // });
  // const sortFn = (array: []) => {
  //   const temp;
  //   for (let i = 0; i < array.length - 1; i++) {
  //     for (let j = 0; j < array.length - 1 - i; j++) {
  //       if (array[j] > array[j + 1]) {
  //         temp = array[j];
  //         array[j] = ayyay[j + 1];
  //         ayyay[j + 1] = temp;
  //       }
  //     }
  //     return array;
  //   }
  // };

  // let resultList = sortFn(plusList);
  // minusList.map((item) => {
  //   resultList.splice(item.index, 0, item.number);
  // });
</script> -->
