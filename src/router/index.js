import { createRouter, createWebHistory } from 'vue-router'
import LivreList from '../components/LivreList.vue' // Ton composant pour la liste de livres
import LivreForm from '../components/LivreForm.vue' // Ton composant pour ajouter un livre

const routes = [
  {
    path: '/',
    name: 'LivreList',
    component: LivreList
  },
  {
    path: '/ajouter',
    name: 'LivreForm',
    component: LivreForm
  },
  // Tu peux ajouter d'autres routes ici
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router