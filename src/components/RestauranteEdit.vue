<template>
  <div id="restaurante-edit">
  <h2>Editar Restaurante</h2>
  <form v-on:submit.prevent="guardarRestaurante">
      <input type="hidden" v-model="restaurante.id">
    <p>
      <label>Nombre</label>
      <input type="text" v-model="restaurante.nombre">
    </p>
    <p>
      <label>Direccion</label>
      <input type="text" v-model="restaurante.direccion">
    </p>
    <p>
      <label>Descripcion</label>
      <textarea v-model="restaurante.description"></textarea>
    </p>
    <p>
      <label>Precio</label>
      <select v-model="restaurante.precio">
        <option value="">Seleccione una opcion...</option>
        <option value="bajo">Bajo</option>
        <option value="medio">Medio</option>
        <option value="normal">Normal</option>
        <option value="alto">Alto</option>
      </select>
    </p>
    <p>
      <input type="submit" value="Guardar Restaurante">
    </p>
  </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "restaurante-edit",
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
      restaurante: {
        nombre: "",
        direccion: "",
        description: "",
        precio: "normal"
      }
    };
  },
  methods: {
    guardarRestaurante() {
      var router = this.$router;
      var params = JSON.stringify(this.restaurante);
      var url = "http://proyecto.local/api/edit-restaurante";
      axios
        .post(url, params)
        .then(respuesta => {
          if (respuesta.status === 200) {
            router.push("/restaurante");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
