import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' 
import '@mdi/font/css/materialdesignicons.css' // Importez les styles CSS des icônes
import 'vuetify/styles' 
import { aliases, mdi } from 'vuetify/iconsets/mdi' // Importez l'ensemble d'icônes MDI
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi, // Enregistrez l'ensemble d'icônes MDI
    },
  },
  components,
  directives,
})

// ⭐ Add the Axios interceptor here
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

const app = createApp(App)

app.use(router)
app.use(vuetify) 

app.mount('#app')