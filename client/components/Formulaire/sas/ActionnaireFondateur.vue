<script setup lang="ts">
import { useActionnaireForm } from '~/composables/Formulaires/sas';
import { useSasForm } from '~/store/SasForm';

const { activeStep: active, actionnaireFondateur } = storeToRefs(useSasForm());
const prev = () => active.value--;
const next = () => active.value++;

const { noms, nationalite, adresse, actions, errors, resetForm, handleSubmit } = useActionnaireForm();
const form = reactive({ noms, adresse, nationalite, actions })

const remove = (key: number) => actionnaireFondateur.value?.splice(key, 1);

const onSubmit = handleSubmit((values) => {
    actionnaireFondateur.value?.push(values);
    resetForm()
});
</script>

<template>
    <div class="flex w-full justify-center">
        <el-row class="mt-8 px-10 w-4/5" justify="center" :gutter="20">
            <el-col :span="14">
                <el-form>
                    <div class="flex flex-row gap-2">
                        <el-form-item class="w-2/3" label-position="top" :error="errors.noms">
                            <template #label>
                                <b class="text-red-800">Nom et prénoms</b>
                            </template>
                            <template #default>
                                <el-input v-model="form.noms" />
                            </template>
                        </el-form-item>
                        <el-form-item class="w-1/3" label-position="top" :error="errors.nationalite">
                            <template #label>
                                <b class="text-red-800">Nationalité</b>
                            </template>
                            <template #default>
                                <el-input v-model="form.nationalite" />
                            </template>
                        </el-form-item>
                    </div>
                    <div class="flex flex-row gap-2">
                        <el-form-item class="w-4/5" label-position="top" :error="errors.adresse">
                            <template #label>
                                <b class="text-red-800">Adresse</b>
                            </template>
                            <template #default>
                                <el-input v-model="form.adresse" />
                            </template>
                        </el-form-item>
                        <el-form-item class="w-1/5" label-position="top" :error="errors.actions">
                            <template #label>
                                <b class="text-red-800">Actions</b>
                            </template>
                            <template #default>
                                <el-input type="number" v-model.number="form.actions" />
                            </template>
                        </el-form-item>
                    </div>
                    <el-button @click="onSubmit" type="primary" plain class="mb-5 w-full" :icon="ElIconPlus">
                        ajouter un actionnaire dans la liste
                    </el-button>
                </el-form>
            </el-col>
            <el-col :span="10">
                <h4 class="text-center text-red-800 font-medium">
                    {{ actionnaireFondateur?.length }} actionnaires
                </h4>
                <div class="h-[200px] w-full flex-col justify-center overflow-auto">
                    <span v-if="actionnaireFondateur !== undefined && actionnaireFondateur?.length > 0">
                        <el-card v-for="(actionnaire, index) in actionnaireFondateur" :key="index"
                            class="basis-1/3 w-full mb-4" body-style="padding:0px">
                            <div class="flex justify-between px-2 gap-4">
                                <div class="text-sm">
                                    <p class="font-normal">
                                        {{ actionnaire.noms }}
                                    </p>
                                    <p class="font-thin text-xs">
                                        <span>Domicilié:
                                            {{ actionnaire.adresse }}</span><br />
                                        <span>Nationalité:
                                            {{ actionnaire.nationalite }}</span>
                                    </p>
                                    <el-tag class="mb-1" type="info" size="small">
                                        {{ actionnaire.actions }} actions
                                    </el-tag>
                                </div>
                                <div class="flex items-center">
                                    <el-button type="danger" @click="remove(index)" circle plain :icon="ElIconDelete" />
                                </div>
                            </div>
                        </el-card>
                    </span>
                    <span v-else><el-empty :image-size="70" description="Aucun actionnaire dans la liste" /></span>
                </div>
            </el-col>
            <el-col :span="24">
                <div class="flex flex-row justify-between">
                    <el-button @click="prev" v-if="active > 0">Précédent</el-button>
                    <el-button @click="next" :disabled="actionnaireFondateur?.length === 0">Suivant</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped></style>
