import { yupResolver } from "@hookform/resolvers/yup"

import { Controller, SubmitHandler, useForm } from "react-hook-form"

import { IMaskInput } from "react-imask"

import * as yup from 'yup'

export const schema = yup
  .object({
    fullName: yup.string().required('Nome e sobrenome são obrigatórios.'),
    email: yup.string().email().required('E-mail é um campo obrigatório.'),
    mobile: yup.string().required('Número de contato é obrigatório.'),
  })

  .required()

  export type FieldValues = yup.InferType<typeof schema>
