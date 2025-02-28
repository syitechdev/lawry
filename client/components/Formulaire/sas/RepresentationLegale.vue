<script setup lang="ts">
import { useRepresentationLegaleForm } from '~/composables/Formulaires/sas';
import { useSasForm } from '~/store/SasForm';

const { activeStep: active } = storeToRefs(useSasForm());
const prev = () => active.value--;
const next = () => active.value++;

const { noms, email, adresse, telephone, errors, handleSubmit } = useRepresentationLegaleForm()
const form = reactive({ noms, email, adresse, telephone });
const onSubmit = handleSubmit((values) => {
    // set errors here and send by post to api
    next()
});
</script>

<template>
    <div class="mt-8 mx-10 flex flex-row justify-center">
        <el-form class="w-1/2">
            <div class="flex flex-row gap-2">
                <el-form-item class="w-2/3" label-position="top" :error="errors.noms">
                    <template #label>
                        <b class="text-red-800">Nom et prénoms du président</b>
                    </template>
                    <template #default>
                        <el-input v-model="form.noms" />
                    </template>
                </el-form-item>
                <el-form-item class="w-1/3" label-position="top" :error="errors.telephone">
                    <template #label>
                        <b class="text-red-800">Téléphone</b>
                    </template>
                    <template #default>
                        <el-input v-model="form.telephone" />
                    </template>
                </el-form-item>
            </div>
            <div class="flex flex-row gap-2">
                <el-form-item class="w-1/2" label-position="top" :error="errors.adresse">
                    <template #label>
                        <b class="text-red-800">Adresse</b>
                    </template>
                    <template #default>
                        <el-input v-model="form.adresse" />
                    </template>
                </el-form-item>
                <el-form-item class="w-1/2" label-position="top" :error="errors.email">
                    <template #label>
                        <b class="text-red-800">Email</b>
                    </template>
                    <template #default>
                        <el-input v-model="form.email" />
                    </template>
                </el-form-item>
            </div>
            <div class="flex flex-row justify-between">
                <el-button @click="prev">Précédent</el-button>
                <el-button @click="onSubmit">Soumettre</el-button>
            </div>
        </el-form>
    </div>
</template>

<style scoped></style>
