import { ref } from '../js/vue.esm-browser.js'
export default {
  props: {
    initial: { type: Number, default: 0 }
  },
  setup(props) {
    const count = ref(props.initial)
    console.log(count.value)
    return {
      count
    }
  },
  template: `<button @click="count++">Template {{count}} from File</button>`
}
