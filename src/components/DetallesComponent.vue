<template>
  <div v-if="cubo">
    <h1>{{ cubo.nombre }}</h1>
    <hr />

    <img :src="cubo.imagen" />
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Marca y modelo</th>
          <th>Valoracion</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ cubo.marca }} {{ cubo.modelo }}</td>
          <td>{{ cubo.valoracion }}</td>
          <td>{{ cubo.precio }}€</td>
        </tr>
      </tbody>
    </table>
    <router-link class="btn btn-danger" to="/">Volver</router-link>
  </div>
  <br />
  <div v-if="comentario">
    <h2>Comentarios</h2>
    <hr />
    <table class="table table-hover">
      <tbody>
        <tr v-for="c in comentario" :key="c">
          <td>Usuario {{ c.idUsuario }}</td>
          <td>{{ c.comentario }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "DetallesComponent",
  data() {
    return {
      cubo: null,
      comentario: null,
    };
  },
  mounted() {
    let id = this.$route.params.id;
    service.findCuboById(id).then((result) => {
      this.cubo = result;
    });
    service.getComentariosCuboById(id).then((result) => {
      console.log(result);
      this.comentario = result;
    });
  },
};
</script>

<style></style>
