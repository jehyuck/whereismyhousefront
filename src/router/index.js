import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView';
import LoginView from '@/views/LoginView';
import QNAView from '@/views/QNAView';
import QNAListView from '@/components/qna/QNAListView';
import QNADetailView from '@/components/qna/QNADetailView';
import QNAModifyView from '@/components/qna/QNAModifyView';
import QNARegistView from '@/components/qna/QNARegistView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/qna',
    name: 'qna',
    component: QNAView,
    redirect: 'qna/qnalist',
    children: [
      {
        path: 'qnalist',
        name: 'QNAListView',
        component: QNAListView,
      },
      {
        path: 'qnadetail',
        name: 'QNADetailView',
        component: QNADetailView,
      },
      {
        path: 'qnamodify',
        name: 'QNAModifyView',
        component: QNAModifyView,
      },
      {
        path: 'qnaregist',
        name: 'QNARegistView',
        component: QNARegistView,
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
