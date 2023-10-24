import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { supplyChainValidationSchema } from 'validationSchema/supply-chains';
import { InventoryInterface } from 'interfaces/inventory';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { SupplyChainInterface } from 'interfaces/supply-chain';

function SupplyChainCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: SupplyChainInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.supply_chain.create({ data: values as RoqTypes.supply_chain });
      resetForm();
      router.push('/supply-chains');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<SupplyChainInterface>({
    initialValues: {
      supplier: '',
      quantity_supplied: 0,
      supply_date: new Date(new Date().toDateString()),
      product_id: (router.query.product_id as string) ?? null,
      supply_chain_manager_id: (router.query.supply_chain_manager_id as string) ?? null,
      organization_id: (router.query.organization_id as string) ?? null,
    },
    validationSchema: supplyChainValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Supply Chains',
              link: '/supply-chains',
            },
            {
              label: 'Create Supply Chain',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Supply Chain
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.supplier}
            label={'Supplier'}
            props={{
              name: 'supplier',
              placeholder: 'Supplier',
              value: formik.values?.supplier,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Quantity Supplied"
            formControlProps={{
              id: 'quantity_supplied',
              isInvalid: !!formik.errors?.quantity_supplied,
            }}
            name="quantity_supplied"
            error={formik.errors?.quantity_supplied}
            value={formik.values?.quantity_supplied}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('quantity_supplied', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="supply_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Supply Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.supply_date ? new Date(formik.values?.supply_date) : null}
              onChange={(value: Date) => formik.setFieldValue('supply_date', value)}
            />
          </FormControl>
          <AsyncSelect<InventoryInterface>
            formik={formik}
            name={'product_id'}
            label={'Select Inventory'}
            placeholder={'Select Inventory'}
            fetcher={() => roqClient.inventory.findManyWithCount({})}
            labelField={'product_name'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'supply_chain_manager_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <AsyncSelect<OrganizationInterface>
            formik={formik}
            name={'organization_id'}
            label={'Select Organization'}
            placeholder={'Select Organization'}
            fetcher={() => roqClient.organization.findManyWithCount({})}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/supply-chains')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'supply_chain',
    operation: AccessOperationEnum.CREATE,
  }),
)(SupplyChainCreatePage);
