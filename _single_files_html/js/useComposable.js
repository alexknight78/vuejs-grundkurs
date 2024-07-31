import { ref } from '../js/vue.esm-browser.js'

export default function useApi() {
  const todos = ref([])
  const getAll = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/user/1/todos')
    todos.value = await response.json()
  }

  // getAll()
  return {
    todos,
    getAll
  }
}
