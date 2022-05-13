import { scene } from './index.js';
import { renderer, camera } from './RendererCamera';
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  // console.log(camera.position);
}
render();
export { renderer };
