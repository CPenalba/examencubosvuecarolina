<template>
  <div>
    <h1>Iniciar Sesión</h1>
    <hr />
    <form v-on:submit.prevent="hacerLogin()">
      <label>Email</label>
      <input type="text" v-model="login.email" class="form-control" /><br />
      <label>Contraseña</label>
      <input
        type="password"
        v-model="login.password"
        class="form-control"
      /><br />
      <button class="btn btn-info">Iniciar sesion</button>
    </form>
  </div>
</template>

<script>
import Global from "@/Global";
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "IniciarSesionComponent",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    hacerLogin() {
      service
        .login(this.login)
        .then((result) => {
          Global.token = result.data.response;
          console.log(Global.token);
          this.$router.push("/perfil");
        })
        .catch(() => {
          alert("Usuario o contraseña incorrectos");
        });
    },
  },
};
</script>

<style></style>
