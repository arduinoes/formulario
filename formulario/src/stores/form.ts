import { defineStore } from 'pinia'

export const formulario = defineStore({
  id: 'form',
  state: () => ({
    categorias: [
      'Entrantes',
      'Primeros platos',
      'Segundos platos',
      'Postres'
    ],
    receta: {
      receta: '',
      preparacion: '',
      categoria: '',
      fecha: '',
      tipo: {
        carnivoro: 1,
        vegetariano: {
          vegano: 0,
        }
      },
      extras: {
        imagen: false,
        video: false
      }
    }
  }),
  actions: {
    crearReceta () {
      console.log('Enviar: ', this.receta)
    }
  }
})
