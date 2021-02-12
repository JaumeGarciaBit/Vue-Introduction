<template>
    <div class="general">
        <div class="center">
        <section id="content">
            <article class="article-item article-detail" v-if="article">
                <div class="image-wrap" v-if='article.image'>
                    <img :src="url + 'get-image/' + article.image" :alt="article.title" />
                </div>

                <h1 class="subheader">{{article.title}}</h1>
                <span class="date">
                    {{article.date | moment('from','now')}}
                </span>
                <p>{{article.content}}</p>

                <div class="clearfix"></div>

                <router-link to='/edit' class='btn btn-warning'>Edit</router-link>
                <router-link to='/delete' class='btn btn-danger'>Delete</router-link>
            </article>
        </section>
        <Sidebar></Sidebar>
        <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import Sidebar from "./Sidebar.vue";

import Global from "../global.js";


export default {
    name:'Article',
    components: {
    Sidebar,
    },
    data()
    {
        return{
            url: Global.url,
            article: null
        }
    },
    mounted()
    {
        var articleId = this.$route.params.id;
        this.getArticle(articleId);
    },
    methods:
    {
        getArticle(articleID)
        {
            axios.get(this.url + 'article/' +articleID)
                .then(res =>
                {
                    if(res.data.status == 'success')
                    {
                        this.article = res.data.article;
                        console.log(this.article);
                    }
                });
        }
    }
}
</script>