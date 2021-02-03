# Introduction to Vue.js

## Instalar Vue

- `npm install -g @vue/cli` (requires Node)
- `vue create [Nombre de proyecto]` (Recomended Vetur as VS code extension)
- `cd [Nombre de proyecto]`
- `npm run serve`

## Crear componentes

- Crear un nuevo archivo `MyComponent.vue`
- añadir tags de template, script y style
```javascript
<template>
    <div id='my-component'>
        <h1>This is my component</h1>
        <h2>{{subtitle}}</h2>
    </div>
</template>

<script>
export default {
    name:'MyComponent',
    data ()
    {
        return {subtitle: 'This is the subtitle'}
    }
}
</script>

<style>
</style>
```

- importar componente en App.vue

```javascript
import MyComponent from './components/MyComponent.vue';

export default {
  name: 'App',
  components: {
    MyComponent
  }
}
```

## Routing

- `npm install --save vue-router`
- en main.js `import VueRouter from 'vue-router'`
- Definir las rutas:
```javascript
Vue.use(VueRouter);
const routes = [
  {path: '/home', component: HomeCoponent},
  {path: '/last-articles', component: LastArticles},
];
```
- Crear objeto de VueRouter
```javascript
const router = new VueRouter({
  routes,
  mode: 'history'
});
```
- Dar de alta el router dentro de la instancia de Vue
```javascript
new Vue({
  router, <--
  render: h => h(App),
}).$mount('#app')
```

## Vistas y Directivas

## Props

## Filtros

## Formularios y validación

## Eventos y reactividad

## Peticiones HTTP
