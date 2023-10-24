import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().nullable(),
  phone_number: yup.string().nullable(),
  email: yup.string().nullable(),
  organization_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
