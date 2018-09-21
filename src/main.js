import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Contacto from './components/Contacto.vue'
import RestauranteTop from './components/RestauranteTop.vue'
import RestaurantesList from './components/RestaurantesList.vue'
import Restaurante from './components/Restaurante.vue'
import RestauranteAdd from './components/RestauranteAdd.vue'
import RestauranteEdit from './components/RestauranteEdit.vue'

Vue.use(VueRouter);

const routes = [{
    path: '/contacto',
    component: Contacto
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/restaurante-destacado/:id',
    name: 'restaurante-destacado',
    component: RestauranteTop
  },
  {
    path: '/restaurantes',
    name: 'restaurantes',
    component: RestaurantesList
  },
  {
    path: '/restaurante/:id',
    name: 'restaurante',
    component: Restaurante
  },
  {
    path: '/editar-restaurante/:id',
    name: 'editar-restaurante',
    component: RestauranteEdit
  },
  {
    path: '/crear-restaurante/',
    name: 'crear-restaurante',
    component: RestauranteAdd
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});


Vue.component('home', Home);
Vue.component('contacto', Contacto);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
