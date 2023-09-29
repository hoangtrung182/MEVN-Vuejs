import { defineStore } from 'pinia'
import { reactive } from 'vue'
import axios from 'axios';

export const useUserStore = defineStore('authorize', {
    state: () => {
        return {
            isLogin: false,
            user: null
        }
    },
    actions: {
        login: async (user) => {
            try {
                const res = await axios.post("http://localhost:8000/auth/login", user);
                if(res.data.success) { 
                    localStorage.setItem("token", token);
                }
                return res.data;
            } catch (error) {
                console.log(error);
            }
        },
        loadUser: async (user) => {
            try {
                
            } catch (error) {
                console.log(error);
            }
        }
    }
})