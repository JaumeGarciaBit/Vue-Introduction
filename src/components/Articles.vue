<template>
    <section id="articles-component">
        <div id="articlesList" v-if='articles && articles.length > 0'>
            <article class="article-item" v-for="a in articles" :key="a._id">
                <div class="image-wrap">
                <img :src="url + 'get-image/' + a.image" :alt="a.title" v-if="a.image" />
                <img src="../assets/images/noImage.png" v-if="!a.image" />
                </div>
                    <h2>
                        <router-link :to="{name: 'article', params: {id:a._id}}">
                            {{ a.title }}
                        </router-link>
                    </h2>
                <span class="date">
                {{ a.date | moment("from", "now") }}
                </span>
                <a href="">
                    <router-link :to="{name: 'article', params: {id:a._id}}">
                        Leer más
                    </router-link>
                </a>

                <div class="clearfix"></div>
            </article>
        </div>
        <div v-else-if="articles && articles == 0">
            No hay artículos para mostrar
        </div>
        <div v-else>
            Cargando...
        </div>
    </section>
</template>

<script>
import Global from "../global.js";

export default {
    name: "articles",
    props: ['articles'],
    data()
    {
        return{
            url: Global.url
        }
    }
};
</script>
