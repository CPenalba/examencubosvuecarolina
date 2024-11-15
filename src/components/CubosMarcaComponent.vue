<template>
  <div v-if="cubos && cubos.length > 0">
    <h1>Cubos de la marca: {{ this.$route.params.nombremarca }}</h1>
    <hr />
    <div class="cards-container">
      <div class="card" style="width: 18rem" v-for="cubo in cubos" :key="cubo">
        <img :src="cubo.imagen" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ cubo.nombre }}</h5>
          <p class="card-text">{{ cubo.precio }}€</p>
          <router-link class="btn btn-primary" :to="'/detalles/' + cubo.idCubo">
            Detalles
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "CubosMarcaComponent",
  data() {
    return {
      cubos: [],
    };
  },
  methods: {
    getCubosMarca() {
      let marca = this.$route.params.nombremarca;
      service.getCubosMarca(marca).then((result) => {
        console.log(result);
        this.cubos = result;
      });
    },
  },
  watch: {
    "$route.params.nombremarca"(valorNuevo, valorAntiguo) {
      if (valorNuevo != valorAntiguo) {
        this.getCubosMarca();
      }
    },
  },
  mounted() {
    this.getCubosMarca();
  },
};
</script>

<style>
.cards-container {
  display: flex; /* Usar flexbox */
  gap: 1rem; /* Espacio entre las tarjetas */
  flex-wrap: wrap; /* Para que las tarjetas bajen de línea si no caben */
  justify-content: flex-start; /* Alinear a la izquierda */
}
</style>
