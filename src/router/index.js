/*
 * @Author: pi@nullce.com
 * @Date: 2020-12-19 16:54:14
 * @LastEditors: pi@nullce.com
 * @LastEditTime: 2020-12-19 18:50:57
 * @Description: file content
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cest_query',
    name: 'CESTQuery',
    component: () => import('../views/CESTQuery.vue'),
  },
  {
    path: '/acee_status_query',
    name: 'ACEEStatusQuery',
    component: () => import('../views/ACEEStatusQuery.vue'),
  },
  {
    path: '/acee_sign_up',
    name: 'ACEESignUp',
    component: () => import('../views/ACEESignUp.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
