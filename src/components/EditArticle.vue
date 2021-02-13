<template src='./CreateArticle.html'></template>

<script>
import axios from 'axios';
import { required } from 'vuelidate/lib/validators';
import swal from 'sweetalert';

import Sidebar from "./Sidebar.vue";

import Global from "../global.js";
import ArticleClass from '../models/ArticleClass.js';



export default {
    name:'EditArticle',
    components: {
        Sidebar,
    },
    data()
    {
        return{
            article : new ArticleClass('','', null, ''),
            url: Global.url,
            submitted: false,
            file: '',
            isEdit:true,
            articleID: ''
        }
    },
    validations:
    {
        article:
        {
            title:{required},
            content:{required}
        }
    },
    mounted()
    {
        this.articleID =this.$route.params.id;
        this.getArticle(this.articleID);
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
        OnSubmit()
        {
            this.submitted=true;

            this.$v.$touch();
            if(this.$v.$invalid)
            {
                return false;
            }
            else
            {
                axios.put(this.url + 'article/' + this.articleID, this.article)
                    .then(res =>
                    {
                        if(res.data.status == 'success')
                        {
                            //Subida de archivo
                            if(this.file != null && this.file != undefined && this.file != '')
                            {
                                const formData = new FormData();
                                formData.append('file0', this.file, this.file.name);
                                axios.post(this.url + 'upload-image/' + res.data.article._id, formData)
                                    .then(res =>
                                    {
                                        if(res.data.articleUpdated)
                                        {
                                            swal('Articulo editado', 'El artículo se ha editado correctamente', 'success');

                                            this.article = res.data.article;
                                            this.$router.push('/article/' + this.articleID);
                                        }
                                    });

                            }
                            else
                            {
                                swal('Articulo editado', 'El artículo se ha editado correctamente', 'success');


                                this.article = res.data.article;
                                this.$router.push('/article/' + this.articleID);
                            }

                        }
                    })
                    .catch(err =>
                    {
                        swal('Edición fallida', err , 'error');
                    });
            }

        },
        fileChange()
        {
            this.file = this.$refs.file.files[0];
        }
    }
}
</script>