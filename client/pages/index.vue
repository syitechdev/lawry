<script setup>
import { useTimeout } from "@vueuse/core";
import { useSasForm } from "~/store/SasForm";
const ready = useTimeout(500);
const { activeStep: active, steps } = storeToRefs(useSasForm());
</script>

<template>
  <el-container>
    <el-header>
      <el-row justify="space-between" align="middle">
        <el-image src="/logo-lawry.png" class="w-[170px] sm:w-[250px]" />
        <div class="profile-links">
          <el-link>Legalshop</el-link>
          <el-dropdown class="ml-2" placement="bottom">
            <el-avatar class="profile-avatar">L</el-avatar>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Déconnexion</el-dropdown-item>
                <el-dropdown-item :icon="ElIconSetting">Profile</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-row>
    </el-header>
    <el-main>
      <el-container>
        <div class="flex flex-col w-full gap-5 mt-20">
          <h2 class="md:text-xl text-base text-center uppercase font-bold text-red-800">
            Création d'entreprise (nom d'entreprise)
          </h2>
          <div class="flex flex-row justify-center">
            <el-card class="min-h-[300px] w-full md:w-4/5 relative" shadow="always">
              <el-steps v-show="ready" :active="active" finish-status="success" process-status="finish" align-center>
                <el-step v-for="(step, index) in steps" :key="index" :title="step.title" />
              </el-steps>
              <Transition name="slide" mode="out-in">
                <component :is="steps[active].component" />
              </Transition>
            </el-card>
          </div>
        </div>
      </el-container>
    </el-main>
  </el-container>
</template>

<style scoped>
.profile-links {
  display: flex;
  align-items: center;
  justify-content: end;
  width: 10%;
}

.profile-avatar:hover {
  border: 2px solid blue;
  border-radius: 50%;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
