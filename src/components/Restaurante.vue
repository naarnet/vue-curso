<template>
  <div>
  <h1>Detalle del restaurante {{id}}</h1>
  <div id="restaurante-detail" v-if="restaurante != null && Object.keys(restaurante).length !== 0">
    <h2>{{ restaurante.nombre}}</h2>
    <p>{{ restaurante.description}}</p>
    <p>{{ restaurante.direccion}}</p>

  </div>
  <span v-else>No existe el restaurante</span>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "restaurante-detail",
  mounted() {
    this.id = this.$route.params.id;
    var url = "http://proyecto.local/api/restaurante/" + this.id;
    axios.get(url).then(respuesta => {
      this.restaurante = respuesta.data;
    });
  },
  data() {
    return {
      id: null,
      restaurante: null
    };
  }
};
</script>
