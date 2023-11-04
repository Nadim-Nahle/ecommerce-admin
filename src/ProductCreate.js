import React from 'react';
import {
  Create,
  NumberInput,
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
  useTranslate,
} from 'react-admin';
import dataProvider from './dataProvider';

const ProductCreate = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const translate = useTranslate();

  const handleSave = (values) => {
    // Call the create method with your dataProvider
    dataProvider
      .create('products', { data: values })
      .then(() => {
        notify(translate('Product created successfully'));
        redirect('/products');
      })
      .catch((error) => {
        notify(error.message, 'error');
      });
  };

  return (
    <Create {...props}>
      <SimpleForm save={handleSave}>
        <TextInput source='ref' />
        <TextInput source='name' />
        <TextInput source='category' />
        <NumberInput source='quantity' />
        <TextInput source='image' />
        <NumberInput source='price' />
        <TextInput source='description' />
      </SimpleForm>
    </Create>
  );
};

export default ProductCreate;
