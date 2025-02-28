import { useInformationsForm, useModaliteAdministrativeForm, useRepresentationLegaleForm } from "~/composables/Formulaires/sas";
import type { ActionnairesFondateursForm, DocumentSas } from "~/types/globals";


export const useSasForm = defineStore("sas-form", () => {
  const activeStep = ref(3);
  const steps = computed(() => [
    {
      title: "Informations Générales",
      component: defineAsyncComponent(() =>
        import("~/components/Formulaire/sas/InformationGenerale.vue")
      ),
    },
    {
      title: "Actionnaires Fondateurs",
      component: defineAsyncComponent(() =>
        import("~/components/Formulaire/sas/ActionnaireFondateur.vue")
      ),
    },
    {
      title: "Représentation Légale",
      component: defineAsyncComponent(() =>
        import("~/components/Formulaire/sas/RepresentationLegale.vue")
      ),
    },
    {
      title: "Modalités Administratives",
      component: defineAsyncComponent(() =>
        import("~/components/Formulaire/sas/ModaliteAdministrative.vue")
      ),
    },
    {
      title: "Documents à joindre",
      component: defineAsyncComponent(() =>
        import("~/components/Formulaire/sas/DocumentPieceJointe.vue")
      ),
    },
  ]);
  const { values: informationGenerale } = useInformationsForm()
  const { values: representationLegale } = useRepresentationLegaleForm()
  const { values: modaliteAdministrative } = useModaliteAdministrativeForm()
  let actionnaireFondateur = ref<ActionnairesFondateursForm>([])
  let documentPieceJointe = ref<DocumentSas>({
    projetStatus: undefined,
    attestationDepotFond: undefined,
    declarationSouscription: undefined,
    listeActionnaires: undefined,
    justificatifDomiciliation: undefined,
  })
  return { activeStep, steps, actionnaireFondateur, documentPieceJointe }
})