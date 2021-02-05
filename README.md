# Introduction to Vue.js

## Instalar Vue

- `npm install -g @vue/cli` (requires Node)
- `vue create [Nombre de proyecto]` (Recomended Vetur as VS code extension)
- `cd [Nombre de proyecto]`
- `npm run serve`

## Crear componentes

- Crear un nuevo archivo: `MyComponent.vue`
- añadir tags de template, script y style:
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
- importar componente en App.vue:
```javascript
import MyComponent from './components/MyComponent.vue';

export default {
  name: 'App',
  components: {
    MyComponent
  }
}
```

### Hooks

- created()   => Ejecutado cuando el componente se crea pero no ha acabado de cargarse todo.
- mounted()   => Ejecutado cuando el componente se monta.
- updated()   => Ejecutado cada vez que algún dato del componente se actualiza.
- destroyed() => Ejecutado cuando el componente se elimina de la vista de la página.
- data() {return{param:null}} => Contiene las variables custom del componente.

### Propiedades 

- name: 'Component' => nombrel componente.
- Methods:{ } => Contiene todos los métodos custom del componente.
- components: { } => Contiene los componentes hijos importados.
- props: ['param1' ,'param2'] => parámetros que serán recividos desde el padre.

## Routing

- `npm install --save vue-router`

### Navegación

- en main.js: `import VueRouter from 'vue-router'`
- Definir las rutas:
```javascript
Vue.use(VueRouter);
const routes = [
  {path: '/home', component: HomeCoponent},
  {path: '/last-articles', component: LastArticles},
];
```
- Crear objeto de VueRouter:
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

### Parámetros por URL

- En el routing de main.js: 
`{path: '/page/:param?', name: 'page', component: Page}`
- En el componente encargado de los links:
```javascript
<router-link :to="{name:'page', params: {param: 'I am the param value'}}">Page 1</router-link>
```
- En el componente de la página:
```javascript
export default {
    name : 'Page',
    mounted ()
    {
      this.id_from_url = this.$route.params.param;
    },
    data()
    {
      return {param_from_url: null}
    }
}
```

### Redirección via JS

`this.$router.push('/page');`

### 404 Page

- En el routing de main.js: `{path: '*',component: ErrorComp}`

## Vistas y Directivas

- two-way data binding: `<input type="text" v-model="parameter" />`
- Condicional if: 
```javascript
<p v-if="parameter && parameter >=18">{{parameter}}</p>
<p v-else-if="parameter && parameter >=65">{{parameter}}</p>
<p v-else>{{parameter}}</p>
```
- Iterativo for:
```javascript
<li v-for="p in params" :key="p">{{p}}</li>
```
### Binding de parámetros:

```javascript
<img :src="p.param1" :alt="p.param2" :title="p.param3" />
```
### Binding de parámetros condicional:

```javascript
<span :class="{greenClass:p.param > 1, redClass:p.param <= 1}">
```

## Props

- Pasar datos de un componente padre a un componente hijo (Input) y de un hijo al padre (Output)

### Input

- En el hijo:
```javascript
export default {
    name: 'ChildComponent',
    props: ['childParam']
}
```
- En el padre:
```javascript
<ChildComponent :childParam="param"></ChildComponent>
```
```javascript
export default {
    name: "ParentComponent",
    components:
    {
        ChildComponent
    },
    data(){
    return {param:null}
    }
  }
```
### Output

- En el hijo:
```javascript
 this.$emit('eventName', param);
```
- En el padre:
```javascript
<ChildComponent v-on:eventName="MethodToCall"></ChildComponent>
```
```javascript
export default {
    name: "ParentComponent",
    methods:
    {
        MethodToCall(param)
        {
            this.recivedParam = param;
        }
    },
 }
```

## Filtros

## Formularios y validación

## Eventos y reactividad

## Peticiones HTTP
