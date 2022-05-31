//实现基础，镜像，横向，镜像平铺
//TODO --自由选择控制的图形位移，平铺的形状也跟着改变
//--平铺采用原本图形的中间点进行四个方向的平铺

import Konva from 'konva';

export function tileImage(direction, imgUrl) {
  const repeatImg = new Image();
  const c = document.createElement('canvas');
  const ctx = (c as HTMLCanvasElement).getContext('2d');
  c.width = 600;
  c.height = 800;
  ctx?.clearRect(0, 0, c.width, c.height); //清除前面的操作
  const pat = ctx?.createPattern(imgUrl, direction);
  ctx?.rect(0, 0, 600, 800);
  ctx.fillStyle = pat;
  ctx?.fill();
  const base = c?.toDataURL('image/png', 1.0);
  repeatImg.src = base;

  const tileImg = new Konva.Image({
    x: 0,
    y: 0,
    image: repeatImg,
    draggable: true,
  });
  return { tileImg };
}
