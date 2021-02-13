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

                <router-link :to="'/edit-article/'+article._id" class='btn btn-warning'>Edit</router-link>
                <a @click="deleteArticle(article._id)" class='btn btn-danger'>Delete</a>
            </article>
        </section>
        <Sidebar></Sidebar>
        <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

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
        },
        deleteArticle(articleID)
        {

            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        axios.delete(this.url + 'article/' + articleID)
                            .then(res =>
                            {
                                if(res.data.status == 'success')
                                {
                                    swal('Artículo borrado','El artículo se ha borrado correctamente','success');
                                    this.$router.push('/blog');
                                }
                            });
                    } else {
                        swal("You decided not deleting this article");
                    }
                });

        }
    }
}
</script>