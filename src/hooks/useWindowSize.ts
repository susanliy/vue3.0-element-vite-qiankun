import { ref, onMounted, onUnmounted } from 'vue';
//利用了vue3.0的响应式原理
export default function useWindowSize() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);
  const update = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => {
    window.addEventListener('resize', update);
  }),
    onUnmounted(() => {
      window.removeEventListener('resize', update);
    });
  return { width, height, update };
}
