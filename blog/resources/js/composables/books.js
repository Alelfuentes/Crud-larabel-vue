import {ref} from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useBooks(){
  const errors = ref('')
  const router = useRouter()
  const books = ref([])
  const book = ref([])
  

  const getbooks = async() => {
    let response = await axios.get('/api/books')
    books.value = response.data.data
  }

  const getbook = async(id) => {
    let response = await axios.get('/api/books/'+id)
    book.value = response.data.data
  }

  const storeBook = async(data) =>{
    errors.value = ''
    try{
      await axios.post('/api/books/', data)
      await router.push({name:'mostrar'})
    }catch(e){
      if(e.response.status === 422){
        errors.value = e.response.data.errors
      }
    }
  }

  const destroyBook = async (id) => {
    await axios.delete('/api/books/'+id)
  }

  return{
    errors,
    books,
    book,
    getbooks,
    getbook,
    storeBook,
    destroyBook
  }
}