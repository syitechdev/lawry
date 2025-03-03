import { toTypedSchema } from '@vee-validate/zod';
import { object, string } from "zod";
const useAuthForm = () => {
  const schema = toTypedSchema(object({
    email: string().email(),
    password: string().min(6, "Le mot de passe doit contenir au moins 6 caractères")
  }))
  const { errors, values, handleSubmit, defineField } = useForm({ validationSchema: schema })
  const [email] = defineField('email')
  const [password] = defineField('password')
  return { email, password, errors, values, handleSubmit }
}

export { useAuthForm }