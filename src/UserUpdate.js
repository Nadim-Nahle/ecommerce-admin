import React from 'react'
import { DeleteButton, Edit, SelectInput, SimpleForm, useNotify, useRedirect, useRefresh } from 'react-admin'

const UserUpdate = (props) => {

    const notify = useNotify();
    const redirect = useRedirect();
    const refresh = useRefresh();

    const handleSave = (values) => {
        // Implement your update logic here
        // Handle the update logic and call notify, refresh, and redirect as needed
        notify('User updated');
        refresh();
        redirect('/users');
    };

    return (
        <Edit {...props}>
            <SimpleForm save={handleSave}>
                <SelectInput source='role' choices={[
                    { id: 'tout', name: 'tout' },
                    { id: 'user', name: 'user' },
                    { id: 'admin', name: 'admin' },
                    { id: 'cosmetique', name: 'cosmetique' },
                    { id: 'divers', name: 'divers' },
                    { id: 'saisonnier', name: 'saisonnier' },
                ]} />
                <DeleteButton basePath='/users'/>
            </SimpleForm>
        </Edit>
    )
}

export default UserUpdate