<template>
  <section id="content">
    <h2 class="subheader">Mi componente</h2>
    <hr/>
    <h1>{{title}}</h1>
    <h2>{{subtitle}}</h2>
    <hr/>

    <h2>Reactividad</h2>
    <input type="text" v-model="name" />
    Mi name is <strong>{{name}}</strong>

    <h2>Directivas condiconales</h2>
    <input type="number" v-model="age" />
    I am <strong>{{age}}</strong> years old

    <p style='color: purple; font-weight:bold' v-if="age && age >=65">
      Eres de avanzada edad
    </p>
    <p style='color: green; font-weight:bold' v-else-if="age && age >=18">
      Eres mayor de edad
    </p>
    <p style='color: red; font-weight:bold' v-else>
      Eres menor de edad
    </p>

    <h2>Directivas iterativa</h2>
    <ol>
      <li v-for="v in videogames" :key="v">{{v}}</li>
    </ol>


  </section>
</template>

<script>
export default {
  name:'MyComponent',
  data ()
  {
    return {
      title: 'My Component',
      subtitle: 'This is the subtitle',
      name: '',
      age: 18,
      videogames: ['Pokemon', 'Dark Souls', 'Monster Hunter', 'Final Fantasy']
    }
  }
}
</script>

<style scoped>

</style>
