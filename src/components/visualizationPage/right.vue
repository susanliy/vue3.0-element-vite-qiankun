<template>
  <div>
    <p>要用到的图片：</p>
    <img id="lamp" src="/src/assets/images/lamp.gif" />
    <p>Canvas:</p>
    <a-button @click="draw('repeat')">Repeat</a-button>
    <a-button @click="draw('repeat-x')">Repeat-x</a-button>
    <a-button @click="draw('repeat-y')">Repeat-y</a-button>
    <a-button @click="draw('no-repeat')">No-repeat</a-button>

    <canvas id="myCanvas" width="300" height="150" style="border: 1px solid #d3d3d3">
      Your browser does not support the HTML5 canvas tag.</canvas
    >
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  //同级组件调用方式一
  const emits = defineEmits<{ (e: 'drawDirection', direction: string) }>();

  //同级组件调用方式二
  const drawDirection = ref();
  defineExpose({
    drawDirection,
  });

  //vuex的消息共享

  const draw = (direction) => {
    drawDirection.value = direction;
    emits('drawDirection', direction);
    var c = document.getElementById('myCanvas');
    var ctx = (c as HTMLCanvasElement).getContext('2d');
    ctx?.clearRect(0, 0, c.width, c.height); //清除前面的操作
    var img = new Image();
    img.src = '/src/assets/images/lamp.gif';
    var pat = ctx?.createPattern(img, direction);
    ctx?.rect(0, 0, 150, 100);
    ctx.fillStyle = pat;
    ctx?.fill();
  };
</script>
<style lang="scss" scoped>
  .right-tool {
    margin: auto 0px;
  }
  .canvas-box {
    width: 200px;
    height: 200px;
    border: 1px solid red;
  }
</style>
