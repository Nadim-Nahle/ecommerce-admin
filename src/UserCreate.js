import React from 'react';
import {
  Create,
  SelectInput,
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
  useTranslate,
} from 'react-admin';
import dataProvider from './dataProvider';

const UserCreate = (props) => {
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
        <TextInput source='email' />
        <TextInput source='password' />
        <TextInput source='name' />
        <SelectInput source='role' choices={[
                    { id: 'user', name: 'User' },
                    { id: 'admin', name: 'Admin' },
                ]} />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
