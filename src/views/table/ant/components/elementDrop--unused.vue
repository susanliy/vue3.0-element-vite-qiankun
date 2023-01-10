<script setup lang="ts">
  import Sortable from 'sortablejs';

  import { onMounted, ref } from 'vue';
  const data = ref([
    {
      name: 'groupA',
      child: [
        {
          name: 'groupA1',
        },
        {
          name: 'groupA2',
        },
        {
          name: 'groupA3',
        },
        {
          name: 'groupA4',
        },
      ],
    },
    {
      name: 'groupB',
      child: [
        {
          name: 'groupB1',
        },
        {
          name: 'groupB2',
        },
        {
          name: 'groupB3',
        },
        {
          name: 'groupB4',
        },
      ],
    },
    {
      name: 'groupC',
      child: [
        {
          name: 'groupC1',
        },
        {
          name: 'groupC2',
        },
        {
          name: 'groupC3',
        },
        {
          name: 'groupC4',
        },
      ],
    },
  ]);
  onMounted(() => {
    var sortable0 = setSortable('g0');
    var sortable1 = setSortable('g1');
    var sortable2 = setSortable('g2');
    var sortable3 = setSortable('g3');
  });
  const instance = ref([]);
  const setSortable = (id) => {
    //获取对象
    var e0 = document.getElementById(id);
    //设置配置
    var ops0 = {
      animation: 1000,
      draggable: '.item',
      direction: 'vertical',
      group: 'itxst.com',
      forceFallback: true,
      onStart: function (evt) {
        console.log(evt);
      },
      //取消选中的事件
      onUnchoose: function (evt) {
        console.log(evt);
      },
      //选中回调函数
      onChoose: function (evt) {
        console.log(evt);
      },
      //拖动结束
      onEnd: function (evt) {
        console.log(evt);
        instance.value.forEach((s) => {
          console.log(s.toArray());
        });
      },
    };
    //初始化
    var sortable0 = Sortable.create(e0, ops0);
    instance.value.push(sortable0);
    return sortable0;
  };
</script>

<template>
  <div id="g0">
    <div v-for="(i, iIndex) in data" :key="i.name" class="group item" :data-id="i.name">
      <div>{{ i.name }}</div>
      <div :id="`g${iIndex + 1}`" class="itxst">
        <div v-for="j in i.child" :key="j.name" class="item" :data-id="j.name">
          {{ j.name }}
        </div>
      </div>
    </div>
  </div>
  <div id="msg1" class="msg"></div>
  <div id="msg2" class="msg"></div>
</template>

<style>
  .group {
    display: flex;
    flex-direction: column;
  }
  .itxst {
    margin: 10px;
    width: 40%;
    float: left;
    margin-right: 10px;
  }
  .itxst div {
    padding: 6px;
    background-color: #fdfdfd;
    border: solid 1px #eee;
    margin-bottom: 10px;
    cursor: move;
  }
  .msg {
    clear: both;
  }
</style>
