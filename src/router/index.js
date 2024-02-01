import { createRouter, createWebHistory } from '@ionic/vue-router';
import Start from '../views/Start.vue';
import HomePage from '../views/homePage.vue';
import Ffirmy from '../views/Ffirmy.vue';
import Fparkingi from '../views/Fparkingi.vue';

import Uskaner from '../views/Uskaner.vue';
import Ubilety from '../views/Ubilety.vue';
import Uwiadomości from '../views/Uwiadomosci.vue';
import Uprofil from '../views/Uprofil.vue';
import tmp from '../views/tmp.vue';

const routes = [
  {
    path: '/',
    redirect: '/start'
  },
  {
    path: '/start',
    name: 'Start',
    component: Start
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/firmy',
    name: 'Ffirmy',
    component: Ffirmy
  },
  {
    path: '/parkingi',
    name: 'Fparkingi',
    component: Fparkingi
  },


  {
    path: '/uskaner',
    name: 'Uskaner',
    component: Uskaner
  }
  ,

  {
    path: '/ubilety',
    name: 'Ubilety',
    component: Ubilety
  }
  ,
  {
    path: '/uwiadomosci',
    name: 'Uwisadomosci',
    component: Uwiadomości
  }
  ,

  {
    path: '/uprofil',
    name: 'Uprofil',
    component: Uprofil
  }
  ,


  {
    path: '/tmp',
    name: 'tmp',
    component: tmp
  }
  ,
  

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
