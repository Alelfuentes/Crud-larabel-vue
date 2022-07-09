<template>
  <div>
    <h1>Ver libro</h1>
    <br>
    <form @submit.prevent="saveBook">
      <div class="form-group">
        <label>Autor</label>
        <input v-model="form.autor" type="text"  name="autor" class="form-control">
      </div>
      <br>
      <div class="form-group">
        <label>Titulo</label>
        <input v-model="form.titulo" type="text" name="titulo" class="form-control">
      </div>
      <div class="form-group">
        <label>Edicion</label>
        <input v-model="form.edicion" type="number" name="edicion" class="form-control">
      </div>
      <div class="form-group">
        <label>Datos</label>
        <input v-model="form.datos" type="text" name="datos" class="form-control">
      </div>
      <div class="form-group">
        <label>Tipo</label>
        <input v-model="form.tipo" type="text" name="tipo" class="form-control">
      </div>
      <div class="form-group">
        <label>Restricciones</label>
        <input v-model="form.restricciones" type="text" name="restricciones" class="form-control">
      </div>
      <div class="form-group">
        <label>Materia</label>
        <input v-model="form.materia" type="text" name="materia" class="form-control">
      </div>
      <div class="form-group">
        <label>Proveedor</label>
        <input v-model="form.proveedor" type="text" name="proveedor" class="form-control">
      </div>
      <br>
    <div class="text-end">
      <button type="submit" class="btn btn-success btn-sm"> Añadir </button>
    </div>
    <br>
    </form>
  </div>
</template>
<script>
import { reactive } from '@vue/reactivity'
import useBooks from '../../composables/books'

  export default{
    setup(){
      const {errors, storeBook} = useBooks()

      const form = reactive({
        'autor':'',
        'titulo':'',
        'edicion':'',
        'datos':'',
        'tipo':'',
        'restricciones':'',
        'materia':'',
        'proveedor':'',
      })
      const saveBook = async()=>{
        await storeBook({...form})
      }
      return{
        form,
        errors,
        saveBook
      }
    },
  }
</script>