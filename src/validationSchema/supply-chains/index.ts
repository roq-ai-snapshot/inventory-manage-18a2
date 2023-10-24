import * as yup from 'yup';

export const supplyChainValidationSchema = yup.object().shape({
  supplier: yup.string().nullable(),
  quantity_supplied: yup.number().integer().nullable(),
  supply_date: yup.date().nullable(),
  product_id: yup.string().nullable().required(),
  supply_chain_manager_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
