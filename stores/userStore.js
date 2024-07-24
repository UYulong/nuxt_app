import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),

  actions: {
    saveUser(payload) {
      this.user = payload
    },

    clearUser() {
      this.user = null
    }
  },

  persist: true,
})
