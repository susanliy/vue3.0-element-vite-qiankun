<template>
  <div id="canvas" ref="centerKonva"></div>
</template>
<script lang="ts" setup>
  import Konva from 'konva';
  import { onMounted, ref, watch } from 'vue';
  import { tileImage } from './centerComponent/tile';
  const props = defineProps({
    imgUrl: {
      type: String,
      default: '',
    },
    tile: {
      type: String,
      default: '',
    },
  });

  let centerKonva = ref();
  let stage: any = null;
  let layer: any = null;

  defineExpose({
    centerKonva,
  });

  watch(
    () => props.imgUrl,
    () => {
      init();
    }
  );

  const init = () => {
    const konvaWidth = 600;
    const konvaHeight = 600;
    stage = new Konva.Stage({
      container: centerKonva.value,
      width: konvaWidth,
      height: konvaHeight,
    });
    layer = new Konva.Layer();
    stage.add(layer);

    let imgSrc = new Image();
    imgSrc.src = props.imgUrl;

    //平铺的图层
    const { tileImg } = tileImage(props.tile, imgSrc);
    layer.add(tileImg);

    //自由选择图片
    const imageObj = new Konva.Image({
      x: 60,
      y: 60,
      width: 100,
      image: imgSrc,
      height: 90,
      draggable: true,
    });
    layer.add(imageObj);
    var tr = new Konva.Transformer({
      name: 'imageObj',
      rotateAnchorOffset: 30,
    });
    layer.add(tr);
    tr.attachTo(imageObj);
  };

  onMounted(() => {
    init();
    console.log('stage..', stage);
  });
</script>
