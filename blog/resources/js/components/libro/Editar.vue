<template>
  <div>
    <h1>Editar</h1>
    <br>
    <div class="text-end">
      <router-link :to="{ name:'mostrar' }" class="btn btn-primary"> Mostrar libros </router-link>
    </div>
    <br>
    <form @submit.prevent="saveBook">
      <div class="form-group">
        <label>Autor</label>
        <input v-model="book.autor" type="text"  name="autor" class="form-control">
      </div>
      <br>
      <div class="form-group">
        <label>Titulo</label>
        <input v-model="book.titulo" type="text" name="titulo" class="form-control">
      </div>
      <div class="form-group">
        <label>Edicion</label>
        <input v-model="book.edicion" type="number" name="edicion" class="form-control">
      </div>
      <div class="form-group">
        <label>Datos</label>
        <input v-model="book.datos" type="text" name="datos" class="form-control">
      </div>
      <div class="form-group">
        <label>Tipo</label>
        <input v-model="book.tipo" type="text" name="tipo" class="form-control">
      </div>
      <div class="form-group">
        <label>Restricciones</label>
        <input v-model="book.restricciones" type="text" name="restricciones" class="form-control">
      </div>
      <div class="form-group">
        <label>Materia</label>
        <input v-model="book.materia" type="text" name="materia" class="form-control">
      </div>
      <div class="form-group">
        <label>Proveedor</label>
        <input v-model="book.proveedor" type="text" name="proveedor" class="form-control">
      </div>
      <br>
    <div class="text-end">
      <button type="submit" class="btn btn-success btn-sm"> Actualizar </button>
    </div>
    <br>
    </form>
  </div>
</template>

<script>
import useBooks from '../../composables/books'
import { onMounted } from 'vue'

  export default{

    props:{
      id:{
        required: true,
        type: String
      }
    },
    setup(props) {
      const {errors, book, getBook} = useBooks()
      onMounted(getBook(props.id))
      return{
        errors,
        book,
      }
    }

  }
</script>