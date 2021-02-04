<template>
  <section id="content">
    <h2 class="subheader">Page 1</h2>
    <h3>{{id_from_url}}</h3>
  </section>
</template>

<script>
export default {
    name : 'Page1',
    mounted () //Ejecutado al iniciar el componente
    {
      this.id_from_url = this.$route.params.id;
    },
    data()
    {
      return {id_from_url: null}
    }
}
</script>