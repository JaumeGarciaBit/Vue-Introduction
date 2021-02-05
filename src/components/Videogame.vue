<template>
    <article class="article-item">
        <div class="image-wrap">
            <img :src="v.img" :alt="v.title" :title="v.title" />
        </div>

        <h2>{{ v.title }}</h2>
        <span class="date" :class="{yeargreen:v.year > 2015, yearred:v.year <= 2015}">
            {{ v.year }}
        </span>
        <a href="#">Leer más</a>
        <input type='button' value='Set as Favorite' v-on:click="SendFavoriteToParent(v)"/>

        <div class="clearfix"></div>
    </article>
</template>

<script>
export default {
    name: 'videogame',
    props: ['v'],
    methods:
    {
        SendFavoriteToParent(v)
        {
            this.$emit('favorite', v);
        }
    }
}
</script>