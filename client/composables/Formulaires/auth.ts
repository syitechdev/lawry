import type { FetchError } from 'ofetch'
import { toTypedSchema } from '@vee-validate/zod';
import { object, string } from "zod";

const useLoginForm = () => {
  const { login } = useSanctumAuth()
  const schema = toTypedSchema(object({
    email: string().optional(),
    password: string().optional()
  }))
  const { errors, values, handleSubmit, defineField } = useForm({ validationSchema: schema })
  const [email] = defineField('email')
  const [password] = defineField('password')

  const onSubmit = handleSubmit(async (values, actions) => {
    try {
      await login(values)
    } catch (error) {
      const fail = error as FetchError
      actions.setErrors(fail.response?._data.errors)
    }
  })
  return { email, password, errors, values, onSubmit }
}

export { useLoginForm }