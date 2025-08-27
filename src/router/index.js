// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import LivreList from '../components/LivreList.vue'
import LivreForm from '../components/LivreForm.vue'
import LoginPage from '../components/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'LivreList',
    component: LivreList,
    meta: { requiresAuth: true }
  },
  {
    path: '/ajouter',
    name: 'LivreForm',
    component: LivreForm,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    meta: { requiresAuth: false }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('jwtToken');

  if (to.meta.requiresAuth && !loggedIn) {
    // Si la route est protégée et l'utilisateur n'est pas connecté
    next('/login');
  } else if (to.path === '/login' && loggedIn) {
    // Si l'utilisateur est déjà connecté et essaie d'aller sur la page de connexion
    next('/');
  } else {
    // L'utilisateur peut continuer sa navigation
    next();
  }
});

export default router