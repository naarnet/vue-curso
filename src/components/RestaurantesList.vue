<template>
  <!-- <h2>{{texto}}</h2> -->
  <div>
    <ul id="restaurantes-list" v-if="restaurantes != null">
      <li v-for="restaurante in restaurantes" :key="restaurante.id">
        <strong>{{restaurante.nombre}}</strong>
        <p>
          <router-link :to="{name:'restaurante',params:{id:restaurante.id}}">
            Ver
          </router-link>
          <router-link :to="{name:'editar-restaurante',params:{id:restaurante.id}}">
            Editar
          </router-link>
          <span v-if="showBorrar != restaurante.id">
              <a @click="borrarRestaurante(restaurante.id)" style="cursor:pointer">Eliminar</a>
          </span>
          <span v-else>
              <p>Estar seguro de querer borrarlo ? </p>
              <button @click="cancelarBorrado">Cancelar</button>
              <button @click="confirmarBorrado(restaurante.id)">Borrar</button>
          </span>
        </p>
      </li>
    </ul>
    <span v-else>Cargando Restaurantes</span>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "restaurantes-list",
  mounted() {
    this.getRestaurantes();
  },
  data() {
    return {
      texto: "Página Restaurantes LIST",
      restaurantes: null,
      showBorrar: null
    };
  },
  methods: {
    getRestaurantes() {
      var url = "http://proyecto.local/api/restaurantes";
      axios.get(url).then(respuesta => {
        this.restaurantes = respuesta.data;
      });
    },
    borrarRestaurante(id) {
      this.showBorrar = id;
    },
    cancelarBorrado() {
      this.showBorrar = null;
    },
    confirmarBorrado(id) {
      var url = "http://proyecto.local/api/delete-restaurantes/"+id;
      axios.get(url).then(respuesta => {
        this.restaurantes = respuesta.data;
      });
    }
  }
};
</script>
<style lang="scss">
#restaurantes-list {
  padding: 5px;
  li {
    margin-top: 10px;
    width: 30%;
    height: 120px;
    border: 1px solid #ddd;
    background: #eee;
    padding: 20px;
    overflow: hidden;
  }
}
</style>
