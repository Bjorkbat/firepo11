import Vue from 'vue';
import Router from 'vue-router';

import CreatePoll from 'components/CreatePoll.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: CreatePoll
    }
  ]
});
