import { ref } from '../js/vue.esm-browser.js'
export default {
  props: {
    initial: { type: Number, default: 0 }
  },
  emits: ['set-size'],
  setup(props) {
    const size = ref(props.initial)
    return {
      size
    }
  },
  template: `
    <button @click="$emit('set-size',size++)">Font Size Up {{size+1}}</button> -> {{size}} <-
    <button @click="$emit('set-size',size--)">Font Size Down {{size-1}}</button>`
}
