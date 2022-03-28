import { ref } from 'vue';

export default function useCounter(initialValue = 0) {
  const count = ref(initialValue);
  const inc = (val = 1) => (count.value += val);
  const dec = (val = 1) => (count.value -= val);
  const get = () => count.value;
  const set = (val: number) => (count.value = val);
  const reset = () => (count.value = initialValue);

  return { count, inc, dec, get, set, reset };
}
