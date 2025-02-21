import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';

const baseUrl = `${import.meta.env.VITE_API_URL}/api/login`;

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null
  }),
  actions: {
    //works fine
    async login(email: string, password: string) {
      const user = await fetchWrapper.post(`${baseUrl}`, { email, password });

      // if you want to use actual api then uncomment below code & comment above code
      // const user = await fetchWrapper.post(`${import.meta.env.VITE_API_URL}/api/account/login`, { email, password });

      // update pinia state
      this.user = user;
      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));
      // redirect to previous url or default to home page
      router.push(this.returnUrl || '/dashboard/default');
    },
    async register(name: string, email: string, password: string, password_confirmation: string, telegram: string) {
      try {
        const user = await fetchWrapper.post(`${import.meta.env.VITE_API_URL}/api/register`, {
          name,
          email,
          password,
          password_confirmation,
          telegram
        });
    
        console.log('Registration success:', user);
        
        // Сохраняем пользователя в локальное хранилище
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
    
        // Перенаправление на страницу после регистрации
        router.push(this.returnUrl || '/dashboard/default');
      } catch (error) {
        console.error('Registration failed:', error);
        throw error;
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/login');
    }
  }
});
