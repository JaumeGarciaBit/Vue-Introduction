<template>
  <section id="content">
    <h2 class="subheader">Mi componente</h2>        <hr/>
        <h1>{{title}}</h1>
        <h2>{{subtitle}}</h2>
        <hr/>
  </section>
</template>

<script>
export default {
    name:'MyComponent',
    data ()
    {
        return {
            title: 'My Component',
            subtitle: 'This is the subtitle'
            }
    }
}
</script>

<style scoped>

</style>
