import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
   
    {
      path: '/Usuario',
      name: 'Usuario',
      component: () => import('../views/pages/TelaDoUsuario.vue')
    },

    {
      path: '/Cadastro',
      name: 'Cadastro',
      component: () => import('../views/pages/CadastroDeAluno.vue')
    },

    {
      path: '/Relatorio',
      name: 'Relatorio',
      component: () => import('../views/pages/Relatorio.vue')
    },
  ]
})

export default router


