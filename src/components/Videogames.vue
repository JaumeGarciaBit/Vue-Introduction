<template>
    <div class="general">
    <div class="center">
        <section id="content">
        <h1 class="subheader">Videogames</h1>
        <div class="favorita" v-if="favorite">
            <h2>{{favorite.title}}</h2>
        </div>
        <div id="articles">
            <div v-for="v in videogames" :key="v.title">
            <Videogame :v="v" v-on:favorite="FavoriteRecived"></Videogame>
            </div>
        </div>
        </section>
        <Sidebar></Sidebar>
        <div class="clearfix"></div>
    </div>
    </div>
</template>

<script>
import Videogame from "./Videogame.vue";
import Sidebar from "./Sidebar.vue";

export default {
    name: "Videogames",
    components: {
    Videogame,
    Sidebar,
    },
    methods:
    {
        FavoriteRecived(v)
        {
            this.favorite = v;
            console.log("Se ha ejecutado el evento en el padre", v);
        }
    },
    data() {
        return {
            videogames: 
            [
                {
                    title: "Dark Souls",
                    year: 2011,
                    img:
                    "https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg",
                },
                {
                    title: "Monster Hunter World",
                    year: 2017,
                    img:
                    "https://upload.wikimedia.org/wikipedia/en/1/1b/Monster_Hunter_World_cover_art.jpg",
                },
                {
                    title: "Pokemon Diamond",
                    year: 2006,
                    img:
                    "https://cdn.bulbagarden.net/upload/thumb/6/69/Diamond_EN_boxart.jpg/250px-Diamond_EN_boxart.jpg",
                },
                {
                    title: "Sekiro : Shadows Die Twice",
                    year: 2019,
                    img:
                    "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Sekiro_art.jpg/220px-Sekiro_art.jpg",
                },
            ],
            favorite:null
        };
    },
};
</script>
