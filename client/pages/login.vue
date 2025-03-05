<script setup lang="ts">
import { useLoginForm } from '~/composables/Formulaires/auth'
const { onSubmit, email, password, errors, loading } = useLoginForm()
const form = reactive({ email, password })

</script>

<template>
  <div class="flex h-screen flex-col justify-center px-6 py-12 lg:px-8">
    <el-card v-loading="loading" class="sm:mx-auto sm:w-full sm:max-w-sm" shadow="always">
      <img class="w-[9vw] sm:w-[12vw] mx-auto mb-2" src="/public/logo-lawry.png" alt="lawry logo"></img>
      <el-form class="space-y-6" require-asterisk-position="right">
        <el-form-item class="w-full" label-position="top" :rules="[{ required: true }]" :error="errors.email">
          <template #label>
            <b class="text-red-800">Adresse Email</b>
          </template>
          <template #default>
            <el-input v-model="form.email" />
          </template>
        </el-form-item>

        <el-form-item class="w-full" label-position="top" :rules="[{ required: true }]" :error="errors.password">
          <template #label>
            <b class="text-red-800">Mot de passe</b>
          </template>
          <template #default>
            <el-input show-password type="password" v-model="form.password" />
          </template>
        </el-form-item>

        <div class="flex flex-col gap-2">
          <a href="#" class="font-semibold text-sm text-slate-900 hover:text-slate-600 text-center">Mot de passe
            oublié?</a>
          <button @click.prevent="onSubmit" type="submit" class="flex w-full justify-center rounded-md bg-red-800 px-3 py-1.5 text-sm/6 font-semibold
           text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
            Connexion
          </button>
        </div>
      </el-form>
      <p class="mt-10 text-center text-sm/6 text-gray-500">
        êtes-vous membre?
        <a href="#" class="font-semibold text-slate-900 hover:text-slate-700">Creer un compte ici</a>
      </p>
    </el-card>
  </div>
</template>

<style scoped></style>
