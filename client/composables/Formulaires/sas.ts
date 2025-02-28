import { toTypedSchema } from '@vee-validate/zod';
import { object, string, number, instanceof as _instanceof } from "zod";
const useInformationsForm = () => {
  const schema = toTypedSchema(
    object({
      denomination: string(),
      siege: string(),
      telephone: string(),
      capital: string(),
      objet: string(),
      duree: string(),
      email: string().email(),
    }),
  );
  const { errors, values, handleSubmit, defineField } = useForm({ validationSchema: schema })
  const [denomination] = defineField('denomination');
  const [siege] = defineField('siege');
  const [telephone] = defineField('telephone');
  const [email] = defineField('email');
  const [capital] = defineField('capital');
  const [objet] = defineField('objet');
  const [duree] = defineField('duree');
  return { denomination, siege, telephone, email, capital, objet, duree, errors, values, handleSubmit }
}

const useActionnaireForm = () => {
  const schema = toTypedSchema(
    object({
      noms: string(),
      nationalite: string(),
      adresse: string(),
      actions: number().min(1),
    })
  )
  const { errors, resetForm, handleSubmit, defineField } = useForm({ validationSchema: schema })
  const [noms] = defineField('noms');
  const [nationalite] = defineField('nationalite');
  const [adresse] = defineField('adresse');
  const [actions] = defineField('actions');
  return { noms, nationalite, adresse, actions, errors, handleSubmit, resetForm }
}

const useRepresentationLegaleForm = () => {
  const schema = toTypedSchema(
    object({
      noms: string(),
      adresse: string(),
      email: string().email(),
      telephone: string(),
    })
  )
  const { errors, values, handleSubmit, defineField } = useForm({ validationSchema: schema })
  const [noms] = defineField('noms');
  const [email] = defineField('email');
  const [adresse] = defineField('adresse');
  const [telephone] = defineField('telephone');
  return { noms, email, adresse, telephone, errors, values, handleSubmit }
}

const useModaliteAdministrativeForm = () => {
  const schema = toTypedSchema(object({
    modeDecision: string(),
    organeGestion: string()
  }))
  const { errors, values, handleSubmit, defineField } = useForm({ validationSchema: schema })
  const [modeDecision] = defineField('modeDecision')
  const [organeGestion] = defineField('organeGestion')
  return { modeDecision, organeGestion, handleSubmit, errors, values }
}

const useDocumentPieceForm = () => {
  const { errors, values, handleSubmit, defineField } = useForm()
  const [projetStatus] = defineField('projetStatus')
  const [attestationDepotFond] = defineField('attestationDepotFond')
  const [declarationSouscription] = defineField('declarationSouscription')
  const [listeActionnaires] = defineField('listeActionnaires')
  const [justificatifDomiciliation] = defineField('justificatifDomiciliation')
  return { projetStatus, attestationDepotFond, declarationSouscription, listeActionnaires, justificatifDomiciliation, errors, values, handleSubmit }
}

export { useInformationsForm, useActionnaireForm, useRepresentationLegaleForm, useModaliteAdministrativeForm, useDocumentPieceForm }
