import React from 'react'
import { DeleteButton, Edit, NumberInput, SelectInput, SimpleForm, TextInput, useNotify, useRedirect, useRefresh } from 'react-admin'

const ProductUpdate = (props) => {

  const notify = useNotify();
  const redirect = useRedirect();
  const refresh = useRefresh();

  const handleSave = (values) => {
    // Implement your update logic here
    // Handle the update logic and call notify, refresh, and redirect as needed
    notify('Product updated');
    refresh();
    redirect('/products');
  };

  return (
    <Edit {...props}>
      <SimpleForm save={handleSave}>
        <TextInput source='ref' />
        <TextInput source='name' />
        <TextInput source='category' />
        <NumberInput source='quantity' />
        <TextInput source='image' />
        <NumberInput source='price' />
        <DeleteButton basePath='/products' />
      </SimpleForm>
    </Edit>
  )
}

export default ProductUpdate