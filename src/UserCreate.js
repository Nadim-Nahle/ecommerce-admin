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
                    { id: 'tout', name: 'tout' },
                    { id: 'user', name: 'user' },
                    { id: 'admin', name: 'admin' },
                    { id: 'cosmetique', name: 'cosmetique' },
                    { id: 'divers', name: 'divers' },
                    { id: 'saisonnier', name: 'saisonnier' },
                ]} />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
