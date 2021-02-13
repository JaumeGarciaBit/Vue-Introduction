import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import LastArticles from './components/LastArticles.vue';
import Details from './components/Details.vue';
import MyComponent from './components/MyComponent.vue';
import Blog from './components/Blog.vue';
import FormComp from './components/FormComp.vue';
import Page1 from './components/Page1.vue';
import ErrorComp from './components/ErrorComp.vue';
import Search from './components/Search.vue';
import CreateArticle from './components/CreateArticle.vue';
import EditArticle from './components/EditArticle.vue';
import Redirect from './components/Redirect.vue';
import Videogames from './components/Videogames.vue';
import Vuelidate from 'vuelidate';
import VueMoment from 'vue-moment';


Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueMoment);

const routes = [
  {path: '/home', component: LastArticles},
  {path: '/last-articles', component: LastArticles},
  {path: '/article/:id', name:'article', component: Details},
  {path: '/create-article', name:'create', component: CreateArticle},
  {path: '/edit-article/:id', name:'edit', component: EditArticle},
  {path: '/my-component', component: MyComponent},
  {path: '/videogames', name:'Videogames', component: Videogames},
  {path: '/', component: LastArticles},
  {path: '/blog', component: Blog},
  {path: '/search/:searchString',component: Search},
  {path: '/redirect/:searchString',component: Redirect},
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
