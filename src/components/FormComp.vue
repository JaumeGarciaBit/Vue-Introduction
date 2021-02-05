<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">FormComp</h2>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
export default {
  name: "FormComp",
  components: {
    Sidebar,
  },
};
</script>
