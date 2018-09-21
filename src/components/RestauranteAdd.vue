<template>
  <div id="restaurante-add">
  <h2>Crear Restaurante</h2>
  <form v-on:submit.prevent="guardarRestaurante">
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
      <textarea v-model="restaurante.descripcion"></textarea>
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
  name: "restaurante-add",
  mounted() {},
  data() {
    return {
      restaurante: {
        nombre: "",
        direccion: "",
        descripcion: "",
        precio: "normal"
      }
    };
  },
  methods: {
    guardarRestaurante() {
      var router = this.$router;
      var params = JSON.stringify(this.restaurante);
      axios
        .post("http://proyecto.local/api/create-restaurante", params)
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
