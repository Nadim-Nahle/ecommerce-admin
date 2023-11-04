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
                    { id: 'user', name: 'User' },
                    { id: 'admin', name: 'Admin' },
                ]} />
                <DeleteButton basePath='/users'/>
            </SimpleForm>
        </Edit>
    )
}

export default UserUpdate