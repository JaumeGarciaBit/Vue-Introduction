import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import LastArticles from './components/LastArticles.vue';
import MyComponent from './components/MyComponent.vue';
import Blog from './components/Blog.vue';
import FormComp from './components/FormComp.vue';
import Page1 from './components/Page1.vue';
import ErrorComp from './components/ErrorComp.vue';
import Videogames from './components/Videogames.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {path: '/home', component: LastArticles},
  {path: '/last-articles', component: LastArticles},
  {path: '/my-component', component: MyComponent},
  {path: '/videogames', name:'Videogames', component: Videogames},
  {path: '/', component: LastArticles},
  {path: '/blog', component: Blog},
  {path: '/form', component: FormComp},
  {path: '/page/:id?', name:'page', component: Page1},
  {path: '*',component: ErrorComp},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
