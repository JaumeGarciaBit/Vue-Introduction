<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <Slider></Slider>
    <div class="center">
      <router-view></router-view>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import Slider from './components/Slider.vue';
import Sidebar from './components/Sidebar.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    Slider,
    Sidebar,
    FooterComp
  }
}
</script>

<style>
  @import "./assets/css/styles.css";
</style>
