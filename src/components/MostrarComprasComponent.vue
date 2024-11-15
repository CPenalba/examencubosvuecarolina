<template>
  <div>
    <h1>Tus compras</h1>
    <hr />
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Núm. Pedido</th>
          <th>ID Cubo</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in compras" :key="c">
          <td>{{ c.idPedido }}</td>
          <td>{{ c.idCubo }}</td>
          <td>{{ c.fechaPedido }}</td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-info" @click="goToPerfil">Volver al perfil</button>
  </div>
</template>

<script>
import Global from "@/Global";
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "MostrarComprasComponent",
  data() {
    return {
      compras: [],
      token: Global.token,
    };
  },
  mounted() {
    service.getComprasUsuario().then((result) => {
      console.log(result);
      this.compras = result;
    });
  },
  methods: {
    goToPerfil() {
      this.$router.push("/perfil");
    },
  },
};
</script>

<style></style>
