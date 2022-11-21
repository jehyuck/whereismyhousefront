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

import store from '@/store';

Vue.use(VueRouter);

const onlyAuthUser = async (to, from, next) => {
  const checkUserInfo = store.getters['userStore/checkUserInfo'];
  const checkToken = store.getters['userStore/checkToken'];
  let token = sessionStorage.getItem('access-token');
  // console.log("로그인 처리 전", checkUserInfo, token);

  if (checkUserInfo != null && token) {
    // console.log("토큰 유효성 체크하러 가자!!!!");
    await store.dispatch('userStore/getUserInfo', token);
  }
  if (!checkToken || checkUserInfo === null) {
    alert('로그인이 필요한 페이지입니다..');
    // next({ name: "login" });
    router.push({ name: 'login' });
  } else {
    // console.log("로그인 했다!!!!!!!!!!!!!.");
    next();
  }
};

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
    path: '/findpassword',
    name: 'findPassword',
    component: FindPasswordView,
  },
  {
    path: '/mypage',
    name: 'mypage',
    beforeEnter: onlyAuthUser,
    redirect: 'mypage/usermodify',
    component: MyPageView,
    children: [
      {
        path: 'usermodify',
        name: 'userModify',
        beforeEnter: onlyAuthUser,
        component: UserModifyView,
      },
      {
        path: 'bookmark',
        name: 'Bookmark',
        beforeEnter: onlyAuthUser,
        component: BookmarkView,
        props: true,
      },
      {
        path: 'withdrawal',
        name: 'withdrawal',
        beforeEnter: onlyAuthUser,
        component: WithdrawalView,
      },
    ],
  },
  {
    path: 'bookmarkdetail',
    name: 'bookmarkDetail',
    beforeEnter: onlyAuthUser,
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
        beforeEnter: onlyAuthUser,
        component: QNAModifyView,
      },
      {
        path: 'qnaregist',
        name: 'QNARegistView',
        beforeEnter: onlyAuthUser,
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
    path: '/noticelist',
    name: 'noticeList',
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
    beforeEnter: onlyAuthUser,
    component: NoticeModifyView,
  },
  {
    path: '/noticeinsert',
    name: 'noticeInsert',
    beforeEnter: onlyAuthUser,
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

//this.$router.push 에러핸들링
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => {
    if (err.name !== 'NavigationDuplicated') throw err;
  });
};

export default router;
