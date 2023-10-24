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
  Center,
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
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, useSalesFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { salesValidationSchema } from 'validationSchema/sales';
import { SalesInterface } from 'interfaces/sales';
import { InventoryInterface } from 'interfaces/inventory';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';

function SalesEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'sales',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useSalesFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: SalesInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.sales.update({
        data: values as RoqTypes.sales,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/sales');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<SalesInterface>({
    initialValues: data,
    validationSchema: salesValidationSchema,
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
              label: 'Sales',
              link: '/sales',
            },
            {
              label: 'Update Sales',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Sales
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Quantity Sold"
            formControlProps={{
              id: 'quantity_sold',
              isInvalid: !!formik.errors?.quantity_sold,
            }}
            name="quantity_sold"
            error={formik.errors?.quantity_sold}
            value={formik.values?.quantity_sold}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('quantity_sold', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="sale_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Sale Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.sale_date ? new Date(formik.values?.sale_date) : null}
              onChange={(value: Date) => formik.setFieldValue('sale_date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.customer_name}
            label={'Customer Name'}
            props={{
              name: 'customer_name',
              placeholder: 'Customer Name',
              value: formik.values?.customer_name,
              onChange: formik.handleChange,
            }}
          />

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
            name={'sales_representative_id'}
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
              onClick={() => router.push('/sales')}
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
    entity: 'sales',
    operation: AccessOperationEnum.UPDATE,
  }),
)(SalesEditPage);