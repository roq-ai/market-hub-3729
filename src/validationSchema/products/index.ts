import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  fee: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
});
