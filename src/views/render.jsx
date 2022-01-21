//just to test
import { defineComponent } from 'vue'

const Bar = defineComponent({
  // eslint-disable-next-line vue/require-prop-types
  props: ['content'],
  render() {
    return this.content
  },
})
export { Bar }
