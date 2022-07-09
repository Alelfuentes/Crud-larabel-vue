import { createRouter, createWebHistory } from "vue-router"

import Home from "../components/Home.vue"
import Mostrar from '../components/libro/Mostrar.vue'
import Editar from '../components/libro/Editar.vue'
import Crear from '../components/libro/Crear.vue'

export const routes =[
  {
    name:'home',
    path:'/home',
    component: Home
  },
  {
    name:'mostrar',
    path:'/mostrar',
    component: Mostrar
  },
  {
    name:'editar',
    path:'/book/:id/edit',
    props: true,
    component: Editar
  },
  {
    name:'crear',
    path:'/crear',
    component:Crear
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})