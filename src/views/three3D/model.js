import * as THREE from 'three';
// 模型组
let model = new THREE.Group();
// 添加正方体模型
let geometry = new THREE.SphereGeometry(60, 40, 40); //图形设置
let material = new THREE.MeshLambertMaterial({
  //设置图形的材质
  color: 0x00ffff,
});
let mesh = new THREE.Mesh(geometry, material);
model.add(mesh);
export { model };
