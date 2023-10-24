import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  product_name: yup.string().required(),
  product_description: yup.string().nullable(),
  quantity: yup.number().integer().nullable(),
  price: yup.number().integer().nullable(),
  supplier: yup.string().nullable(),
  organization_id: yup.string().nullable().required(),
});
