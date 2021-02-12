<template>
    <div class="general">
        <Slider :text="'Buscando: ' + this.searchString"></Slider>

        <div class="center">
        <section id="content">
            <h1 class="subheader">Artículos encontrados</h1>
            <div id="articles" v-if="articles">
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
    name: "Search",
    components: {
        Sidebar,
        Slider,
        Articles,
    },
    mounted() {
        this.searchString = this.$route.params.searchString;
        this.getArticlesBySearch(this.searchString);
    },
    data() {
        return {
        url: Global.url,
        articles: [],
        searchString: null
        };
    },
    methods: {
        getArticlesBySearch(searchString) {
        axios.get(this.url + "search/"+ searchString).then((res) => {
            if (res.data.status == "success") {
            this.articles = res.data.articles;

            console.log(this.articles);
            }
        });
        },
    },
};
</script>
