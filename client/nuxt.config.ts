//https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@vee-validate/nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
    "nuxt-auth-sanctum",
  ],
  app: {
    head: {
      bodyAttrs: {
        style: "margin: 0px; padding: 0px",
      },
    },
  },
  elementPlus: {
    defaultLocale: "fr",
    icon: "ElIcon",
  },
  veeValidate: {
    autoImports: true,
  },
  sanctum: {
    baseUrl: process.env.API,
    redirect: {
      onGuestOnly: '/profile',
    },
    endpoints: {
      login: 'api/login',
      logout: 'api/logout'
    },
    globalMiddleware: {
      enabled: true,
    },
  }
});