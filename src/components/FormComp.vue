<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">FormComp</h2>

        <form class="mid-form" v-on:submit.prevent="onSubmit()">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" v-model="user.name"/>
            <div v-if="submited && !$v.user.name.required"> Este campo es requerido</div>
            <div v-if="submited && !$v.user.name.minLength"> Este debe contener un mínimo de 3 carácteres</div>
          </div>

          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" v-model="user.surname"/>
            <div v-if="submited && !$v.user.surname.required"> Este campo es requerido</div>
            <div v-if="submited && !$v.user.surname.minLength"> Este debe contener un mínimo de 3 carácteres</div>
          </div>

          <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea name="bio" v-model="user.bio"></textarea>
            <div v-if="submited && !$v.user.bio.required"> Este campo es requerido</div>
          </div>

          <div class="form-group radibuttons">
            <input type="radio" name="genero" value="hombre" checked  v-model="user.genre" /> Hombre
            <input type="radio" name="genero" value="mujer" v-model="user.genre"/> Mujer
            <input type="radio" name="genero" value="otro" v-model="user.genre"/> Otro
          </div>

          <div class="clearfix"></div>

          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>

        <div class="datos" v-if='user.name && user.surname'>
          <h3> {{user}}</h3>  
        </div>

      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import Sidebar from "./Sidebar.vue";
export default {
  name: "FormComp",
  components: {
    Sidebar,
  },
  validations:
  {
    user:
    {
      name:{required, minLength: minLength(3)},
      surname:{required, minLength: minLength(3)},
      bio:{required}
    }
  },
  methods:
  {
    onSubmit()
    {
      console.log(this.user);
      this.submited=true;
      this.$v.$touch();
      if(this.$v.$invalid)
      {
        console.log(false);
        return false;
      }

      alert('validación pasada');
    }
  },
  data()
  {
    return{
      user:
      {
        name:'',
        surname:'',
        bio:'',
        genre:'hombre'
      },
      submited:false
    }
  }
};
</script>
