<template src='./CreateArticle.html'></template>

<script>
import axios from 'axios';
import { required } from 'vuelidate/lib/validators';
import swal from 'sweetalert';

import Sidebar from "./Sidebar.vue";

import Global from "../global.js";
import ArticleClass from '../models/ArticleClass.js';



export default {
    name:'CreateArticle',
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
            isEdit:false
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
        // console.log(this.article);
    },
    methods:
    {
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

                axios.post(this.url + 'save', this.article)
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
                                            swal('Articulo creado', 'El artículo se ha creado correctamente', 'success');

                                            this.article = res.data.article;
                                            this.$router.push('/blog');
                                        }
                                    });

                            }
                            else
                            {
                                swal('Articulo creado', 'El artículo se ha creado correctamente', 'success');


                                this.article = res.data.article;
                                this.$router.push('/blog');
                            }

                        }
                    })
                    .catch(err =>
                    {
                        swal('Creación fallida', err , 'error');
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