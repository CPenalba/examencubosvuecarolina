<template>
  <div v-if="token">
    <h1>Mi perfil ({{ usuario.nombre }})</h1>
    <hr />
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.email }}</td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-info" @click="goToCompras">Mostrar compras</button>
  </div>
</template>

<script>
import Global from "@/Global";
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "PerfilComponent",
  data() {
    return {
      usuario: [],
      token: Global.token,
    };
  },
  mounted() {
    service.getPerfilUsuario().then((result) => {
      this.usuario = result.data;
    });
  },
  methods: {
    goToCompras() {
      this.$router.push("/compras");
    },
  },
};
</script>

<style></style>
