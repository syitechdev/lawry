<script setup lang="ts">
import { useInformationsForm } from "~/composables/Formulaires/sas";
import { useSasForm } from "~/store/SasForm";
const { activeStep: active } = storeToRefs(useSasForm());
const next = () => active.value++;
const { denomination, siege, capital, objet, telephone, duree, email, errors, handleSubmit } = useInformationsForm();
const onSubmit = handleSubmit((values) => {
  // set errors here
  next()
});
</script>

<template>
  <div class="mt-8 mx-10 flex flex-row justify-center">
    <el-form class="w-1/2" require-asterisk-position="right">
      <div class="flex flex-row gap-2">
        <el-form-item class="w-1/2" label-position="top" :error="errors.denomination" :rules="[{ required: true }]">
          <template #label>
            <b class="text-red-800">Dénomination sociale</b>
          </template>
          <template #default>
            <el-input v-model="denomination" />
          </template>
        </el-form-item>
        <el-form-item class="w-1/2" label-position="top" :error="errors.siege" :rules="[{ required: true }]">
          <template #label>
            <b class="text-red-800">Siège sociale</b>
          </template>
          <template #default>
            <el-input v-model="siege" />
          </template>
        </el-form-item>
      </div>
      <div class="flex flex-row gap-2">
        <el-form-item class="w-1/2" label-position="top" :error="errors.telephone" :rules="[{ required: true }]">
          <template #label>
            <b class="text-red-800">Téléphone</b>
          </template>
          <template #default>
            <el-input v-model="telephone" />
          </template>
        </el-form-item>
        <el-form-item class="w-1/2" label-position="top" :error="errors.email" :rules="[{ required: true }]">
          <template #label>
            <b class="text-red-800">Email</b>
          </template>
          <template #default>
            <el-input v-model="email" />
          </template>
        </el-form-item>
      </div>
      <div class="flex flex-row gap-2">
        <el-form-item class="w-1/2" label-position="top" :error="errors.duree" :rules="[{ required: true }]">
          <template #label>
            <b class="text-red-800">Durée de la société</b>
          </template>
          <template #default>
            <el-input v-model="duree" />
          </template>
        </el-form-item>
        <el-form-item class="w-1/2" label-position="top" :error="errors.capital" :rules="[{ required: true }]">
          <template #label>
            <b class="text-red-800">Capital social</b>
          </template>
          <template #default>
            <el-input v-model="capital" />
          </template>
        </el-form-item>
      </div>
      <el-form-item label-position="top" :error="errors.objet">
        <template #label>
          <b class="text-red-800">Description de l'activité principale</b>
        </template>
        <template #default>
          <el-input v-model="objet" type="textarea" />
        </template>
      </el-form-item>
      <div class="flex flex-row justify-end">
        <el-button @click="onSubmit">Suivant</el-button>
      </div>
    </el-form>
  </div>
</template>

<style scoped></style>
