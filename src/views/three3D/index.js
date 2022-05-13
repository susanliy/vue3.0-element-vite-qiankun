import * as THREE from 'three';
import { model } from './model';
let scene = new THREE.Scene();
/**
 * 添加模型
 */
scene.add(model);
/**
 * 光源设置
 */
// 平行光1
let directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(400, 200, 300);
scene.add(directionalLight);
// 平行光2
let directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight2.position.set(-400, -200, -300);
scene.add(directionalLight2);
//环境光
var ambient = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambient);

// Three.js三维坐标轴 三个坐标轴颜色RGB分别对应xyz轴
let axesHelper = new THREE.AxesHelper(250);
scene.add(axesHelper);

export { scene };
