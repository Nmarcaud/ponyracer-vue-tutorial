import { createApp } from 'vue'
import App from './App.vue'
import Alert from '@/components/Alert.vue'
import router from './router'

import './assets/main.css'

// Pour rendre accessible partout mon composant Alert !!!
createApp(App).component('Alert', Alert).use(router).mount('#app');

