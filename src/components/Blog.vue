<template>
  <div class="general">
    <Slider text="Blog"></Slider>

    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Slider from "./Slider.vue";

import axios from 'axios';

export default {
  name: "Blog",
  components: {
    Sidebar,
    Slider,
  },
  mounted()
  {
    this.getArticles();
  },
  data()
  {
    return{
      articles: []
    }
  },
  methods:
  {
    getArticles()
    {
      axios.get('http://localhost:3900/api/articles')
        .then(res=>
        {
          if(res.data.status == 'success')
          {
            this.articles = res.data.articles;

            console.log(this.articles);
          }
        });
    }
  }
};
</script>
