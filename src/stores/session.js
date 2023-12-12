import { ref } from 'vue'
import { defineStore } from 'pinia'

 const useSessionStore = defineStore('session', () => {
  const user = ref({});

  const isLoggedln = ref(false);

  function login(data) {
    user.value = { ...data };
    isLoggedln.value = true;
  }

  return { isLoggedln, login, user };
});

export default useSessionStore
