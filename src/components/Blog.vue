<template>
  <div class="general">
    <Slider text="Blog"></Slider>

    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>
        <div id="articles" v-if='articles'>
          <Articles v-bind:articles="articles"></Articles>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Slider from "./Slider.vue";
import Articles from "./Articles.vue";

import axios from "axios";
import Global from "../global.js";


export default {
  name: "Blog",
  components: {
    Sidebar,
    Slider,
    Articles
  },
  mounted() {
    this.getArticles();
  },
  data() {
    return {
      url : Global.url,
      articles: []
    };
  },
  methods: {
    getArticles() {
      axios.get(this.url+"articles").then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;

          console.log(this.articles);
        }
      });
    },
  },
};
</script>
