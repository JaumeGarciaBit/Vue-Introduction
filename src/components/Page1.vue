<template>
  <div class="general">
    <Slider text="Pagina de pruebas"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Page 1</h2>
        <h3>{{ id_from_url }}</h3>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Page1",
  components: {
    Slider,
    Sidebar,
  },
  mounted() { //Ejecutado al iniciar el componente
    this.id_from_url = this.$route.params.id;
  },
  data() {
    return { id_from_url: null };
  },
};
</script>
