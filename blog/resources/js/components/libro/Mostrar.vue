<template>
  <div>
    <h1>Libros</h1>
    <br>
    <div class="text-end">
      <router-link :to="{ name:'crear' }" class="btn btn-primary"> Añadir libro </router-link>
    </div>
    <br>
    <table class="table table-striped">
     <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Autor</th>
        <th scope="col">Titulo</th>
        <th scope="col">Edicion</th>
        <th scope="col">Datos</th>
        <th scope="col">Tipo</th>
        <th scope="col">Restricciones</th>
        <th scope="col">Materia</th>
        <th scope="col">Proveedor</th>
        <th scope="col">Accion</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in books" :key="item.id">
          <th scope="row">{{item.id}}</th>
          <td>{{item.autor}}</td>
          <td>{{item.titulo}}</td>
          <td>{{item.edicion}}</td>
          <td>{{item.datos}}</td>
          <td>{{item.tipo}}</td>
          <td>{{item.restricciones}}</td>
          <td>{{item.materia}}</td>
          <td>{{item.proveedor}}</td>
          <td>
            <router-link :to="{name:'editar', params: {id: item.id}}" class="btn btn-info"> Editar </router-link>
            <button type="button" v-on:click="deleteBook(item.id)" class="btn btn-sm btn-danger"> Eliminar </button>
          </td>
      </tr>
    </tbody>
    </table>
  </div>
</template>
<script>
import useBooks from "../../composables/books";
import { onMounted } from "vue";

export default{
  setup(){
    const {books, getbooks, destroyBook} = useBooks()
    onMounted(getbooks)
    const deleteBook = async(id) => {
      if(!window.confirm("Esta seguro?")){
        return
      }
      await destroyBook(id)
      await getbooks()
    }
    return{
      books,
      deleteBook
    }
  }
}
</script>