import * as yup from 'yup';

export const salesValidationSchema = yup.object().shape({
  quantity_sold: yup.number().integer().nullable(),
  sale_date: yup.date().nullable(),
  customer_name: yup.string().nullable(),
  product_id: yup.string().nullable().required(),
  sales_representative_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
