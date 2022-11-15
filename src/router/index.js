import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView';
import LoginView from '@/views/LoginView';

import RegistView from '@/views/RegistView';
import FindPasswordView from '@/views/FindPasswordView';
import MyPageView from '@/views/MyPageView';
import UserModifyView from '@/components/user/UserModifyView';
import BookmarkView from '@/components/user/BookmarkView';
import WithdrawalView from '@/components/user/WithdrawalView';
import BookmarkDetailView from '@/views/BookmarkDetailView';
import AboutView from '@/views/AboutView';
import SitemapView from '@/views/SitemapView';
import APTSearchView from '@/views/APTSearchView';
import APTDetailView from '@/views/APTDetailView';
import NoiceListView from '@/views/NoiceListView';
import NoticeDetailView from '@/views/NoticeDetailView';
import NoticeModifyView from '@/views/NoticeModifyView';
import NoticeInsertView from '@/views/NoticeInsertView';
import ErrorView from '@/views/ErrorView';

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
    path: '/regist',
    name: 'regist',
    component: RegistView,
  },
  {
    path: 'findpassword',
    name: 'findPassword',
    component: FindPasswordView,
  },
  {
    path: '/mypage',
    name: 'mypage',
    redirect: 'mypage/usermodify',
    component: MyPageView,
    children: [
      {
        path: 'usermodify',
        name: 'userModify',
        component: UserModifyView,
      },
      {
        path: 'bookmark',
        name: 'Bookmark',
        component: BookmarkView,
      },
      {
        path: 'withdrawal',
        name: 'withdrawal',
        component: WithdrawalView,
      },
    ],
  },
  {
    path: 'bookmarkdetail',
    name: 'bookmarkDetail',
    component: BookmarkDetailView,
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
    component: AboutView,
  },
  {
    path: '/sitemap',
    name: 'sitemap',
    component: SitemapView,
  },
  {
    path: '/aptsearch',
    name: 'aptSearch',
    component: APTSearchView,
  },
  {
    path: '/aptdetail',
    name: 'aptDetail',
    component: APTDetailView,
  },
  {
    path: '/noicelist',
    name: 'noiceList',
    component: NoiceListView,
  },
  {
    path: '/noticedetail',
    name: 'noticeDetail',
    component: NoticeDetailView,
  },
  {
    path: '/noticemodify',
    name: 'noticeModify',
    component: NoticeModifyView,
  },
  {
    path: '/noticeinsert',
    name: 'noticeInsert',
    component: NoticeInsertView,
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
