<script setup lang="ts">
import { useModaliteAdministrativeForm } from '~/composables/Formulaires/sas';
import { useSasForm } from '~/store/SasForm';

const { activeStep: active } = storeToRefs(useSasForm());
const prev = () => active.value--;
const next = () => active.value++;
const { handleSubmit, modeDecision, organeGestion, errors } = useModaliteAdministrativeForm()
const form = reactive({ modeDecision, organeGestion })
const onSubmit = handleSubmit((values) => {
  next()
});
</script>

<template>
  <div class="mt-8 mx-10 flex flex-row justify-center">
    <el-form class="w-1/2">
      <el-form-item label-position="top" :error="errors.modeDecision">
        <template #label>
          <b class="text-red-800">Mode de décision</b>
        </template>
        <template #default>
          <el-radio-group class="w-full" v-model="form.modeDecision">
            <template #default>
              <div class="flex flex-row w-full">
                <el-radio class="w-1/2" value="Assemblée générale">
                  Assemblée générale
                </el-radio>
                <el-radio class="w-1/2" value="Consultation écrite">
                  Décision par consultation écrite
                </el-radio>
              </div>
            </template>
          </el-radio-group>
        </template>
      </el-form-item>
      <el-form-item label-position="top" :error="errors.organeGestion">
        <template #label>
          <b class="text-red-800">Organe de gestion</b>
        </template>
        <template #default>
          <el-radio-group class="w-full" v-model="form.organeGestion">
            <template #default>
              <div class="flex flex-row  w-full">
                <el-radio class="w-1/2" value="Président seul">
                  Président seul
                </el-radio>
                <el-radio class="w-1/2" value="Conseil d'administration">
                  Conseil d'administration
                </el-radio>
              </div>
            </template>
          </el-radio-group>
        </template>
      </el-form-item>
      <div class="flex flex-row justify-between">
        <el-button @click="prev">Précédent</el-button>
        <el-button @click="onSubmit">Suivant</el-button>
      </div>
    </el-form>
  </div>
</template>

<style scoped></style>
