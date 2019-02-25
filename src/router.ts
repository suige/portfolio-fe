import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Works from './views/Works.vue';
import Contact from './views/Contact.vue';
import NotFound from './views/NotFound.vue';
import store from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/works',
      name: 'works',
      component: Works,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  store.commit('start');
  next();
});
router.afterEach((to, from) => {
  store.commit('end');
});

export default router;
