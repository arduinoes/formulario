<script setup lang="ts">
import BaseInput from "../components/BaseInput.vue";
import BaseSelect from "../components/BaseSelect.vue";
import BaseCheckBox from "../components/BaseCheckBox.vue";
import BaseRadioButton from "../components/BaseRadioButton.vue";
import BaseTextArea from "../components/BaseTextArea.vue";
import BaseInputDate from "../components/BaseInputDate.vue";

import { formulario } from "../stores/form";
const form = formulario();

</script>

<template>
<div class="container flex justify-center">
  <div>
     <h1 class="my-4 text-2xl">Formulario</h1>
  </div>
</div>
  <div class="flex justify-center">
    <form @submit.prevent="form.crearReceta">
      
      <BaseInput
        label="Receta"
        v-model="form.receta.receta"
        type="text"
        error="Campo obligatorio"
      />
      <BaseTextArea
        label="Preparación"
        v-model="form.receta.preparacion"
        type="text"
      />
      <BaseSelect
        label="Elige una categoría"
        :options="form.categorias"
        v-model="form.receta.categoria"
        error="Este campo es requerido"
      />
      <BaseInputDate 
      label="Fecha" 
      v-model="form.receta.fecha" 
      type="text" 
      />
      <h3>¿Carnívora o vegetariana?</h3>
      <BaseRadioButton 
      v-model="form.receta.tipo.carnivoro" 
      class="pl-4 pt-4"
      :value="1" 
      label=" Carnívora" />
      <BaseRadioButton 
      v-model="form.receta.tipo.carnivoro" 
      class="pl-4 pb-3"
      :value="0" 
      label=" Vegetariana" />

      <template v-if="form.receta.tipo.carnivoro === 0">
        <h3>¿Vegana o ovoláctea?</h3>
        <BaseRadioButton 
          v-model="form.receta.tipo.vegetariano.vegano"
          class="pl-4 pt-4" 
          :value="0" 
          label=" Ovoláctea" />
        <BaseRadioButton 
          v-model="form.receta.tipo.vegetariano.vegano"
          class="pl-4 pb-3" 
          :value="1" 
          label=" Vegana" />
      </template>

      <h3>Extras</h3>
      <div>
        <BaseCheckBox 
          label="Imágenes"
          class="pl-4 pt-4"  
          v-model="form.receta.extras.imagen" />
      </div>
      <div>
        <BaseCheckBox 
          label="Vídeo" 
          class="pl-4 pb-3" 
          v-model="form.receta.extras.video" />
      </div>
      <div>
        <button 
          type="submit" 
          class="btn btn-secondary" 
          something="else">
          Enviar
        </button>
      </div>
       <pre>{{ form.receta }}</pre>
    </form> 
  </div>
</template>
