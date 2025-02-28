<script setup lang="ts">
import { useSasForm } from '~/store/SasForm';

import type { UploadFile } from 'element-plus'
import { useDocumentPieceForm } from '~/composables/Formulaires/sas';
const { activeStep: active, documentPieceJointe } = storeToRefs(useSasForm());
const { errors, handleSubmit } = useDocumentPieceForm()
const prev = () => active.value--;
const next = () => active.value++;
const { attestationDepotFond, projetStatus, declarationSouscription, listeActionnaires, justificatifDomiciliation } = useDocumentPieceForm()
const onSubmit = handleSubmit((values) => {
  documentPieceJointe.value = values
  next()
});
const form = reactive({ attestationDepotFond, projetStatus, declarationSouscription, listeActionnaires, justificatifDomiciliation })
const handleFileChange = (file: UploadFile, field: keyof typeof documentPieceJointe.value): void => {
  form[field] = file.raw;
  //soumettre la totalité de formulaire pour créer la demande
}
</script>

<template>
  <div class="mt-8 mx-10 flex flex-row justify-center">
    <el-form class="w-4/5">
      <div class="grid grid-cols-3 gap-x-2">
        <el-form-item class="flex w-full" :error="errors.projetStatus">
          <el-upload action="#" :on-change="(file) => handleFileChange(file, 'projetStatus')" :limit="1">
            <el-button plain :icon="ElIconLink" type="primary">Importer le projet de statut</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item :error="errors.attestationDepotFond">
          <el-upload action="#" :on-change="(file) => handleFileChange(file, 'attestationDepotFond')" :limit="1">
            <el-button plain :icon="ElIconLink" type="primary">Importer l'attestation de dépot de fond</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item :error="errors.declarationSouscription">
          <el-upload action="#" :on-change="(file) => handleFileChange(file, 'declarationSouscription')" :limit="1">
            <el-button plain :icon="ElIconLink" type="primary">Importer la déclaration de souscription</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item :error="errors.listeActionnaires">
          <el-upload action="#" :on-change="(file) => handleFileChange(file, 'listeActionnaires')" :limit="1">
            <el-button plain :icon="ElIconLink" type="primary">Importer la liste des actionnaires</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item :error="errors.justificatifDomiciliation">
          <el-upload action="#" :on-change="(file) => handleFileChange(file, 'justificatifDomiciliation')" :limit="1">
            <el-button plain :icon="ElIconLink" type="primary">Importer le justificatif de domiciliation</el-button>
          </el-upload>
        </el-form-item>
      </div>
      <div class="flex flex-row justify-between mt-4">
        <el-button @click="prev">Précédent</el-button>
        <el-button @click="onSubmit">Soumettre</el-button>
      </div>
    </el-form>
  </div>
</template>

<style scoped></style>
