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
- computed: { } => Propiedades computadas. Contiene los métodos que modifican parámetros y devuelven un valor.
- components: { } => Contiene los componentes hijos importados.
- props: ['param1' ,'param2'] => Parámetros que serán recividos desde el padre.
- filters: { } => Pipes. filtran o modifican los parámetros en HTML
- validations { } => configuración de los validators del form importados desde la librería de vuelidator.

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

- Filtran y modifican parámetros desde el HTML
```javascript
    filters:
    {
        toMayus(value)
        {
            return value.toUpperCase();
        }
    },
```

```javascript
<h2>{{param.name | toMayus}}</h2>
```

## Formularios y validación

### Formulario

```javascript
        <form v-on:submit.prevent="onSubmit()">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" v-model="param.name"/>
          </div>
          <div class="form-group radibuttons">
            <input type="radio" name="genero" value="hombre" checked  v-model="param.genre" /> Hombre
            <input type="radio" name="genero" value="mujer" v-model="param.genre"/> Mujer
          </div>

          <input type="submit" value="Enviar"/>
        </form>
      </section>
```

### Validación

- Instalar librería de validación de Vue `npm install --save vuelidate`
- Importar vuelidate en main.js:
```javascript
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
```
- Importar todas las librerías deseadas dentro del script del componente
```javascript
import { required, email, minLenght } from 'vuelidate/lib/validators';
validations:
{
name:{required, minLength: minLength(3)},
genre:{required},
},
```
```javascript
<div class="form-group">
  <label for="nombre">Nombre</label>
  <input type="text" name="nombre" v-model="param.name"/>
  <div v-if="!$v.name.required"> Este campo es requerido</div>
  <div v-if="!$v.name.minLength"> Este debe contener un mínimo de 3 carácteres</div>
</div>
```

## Peticiones HTTP

- `npm install --save axios`
- En el componente que hará las peticiones:
```javascript
import axios from 'axios';

 methods:
  {
    getFromApi()
    {
      axios.get([the url of API])
        .then(res=>
        {
          console.log(res.data);
        });
    }
  }

```

## Subida de archivos

- `<input type="file" name='file0' id='file' ref='file' v-on:change='fileChange()'/>`
- ```javascript
methods:
{
    fileChange()
    {
        this.file = this.$refs.file.files[0];
    }
}
```












