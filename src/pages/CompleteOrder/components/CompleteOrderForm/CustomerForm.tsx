import { FormContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function CustomerForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <FormContainer>
      <div className="row">
        <Input
          placeholder="Name"
          type="string"
        //   className="cep"
          {...register('name')}
          error={errors.name?.message}
        />
      </div>
      <div className="row">
        <Input
          placeholder="Document"
        //   className="street"
          {...register('document')}
          error={errors.document?.message}
        />
      </div>
      <div className="row">
        <Input
          type="date"
          placeholder="birth"
          {...register('birth')}
          error={errors.birth?.message}
        />
      </div>
    </FormContainer>
  )
}
