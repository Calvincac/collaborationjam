import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueRouter);

import { routes } from './routes'; // importa as rotas do arquivo de rotas

const router = new VueRouter({ // instancia novo objeto de Router e passa router como parametro
  routes : routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
