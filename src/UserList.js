import React from 'react'
import { Datagrid, DeleteButton, EditButton, List, TextField } from 'react-admin'

const UserList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
        <TextField source='id'/>
        <TextField source='displayName'/>
        <TextField source='email'/>
        <TextField source='role'/> 
        <EditButton basePath='/users'/>
        <DeleteButton basePath='/users'/>
        </Datagrid>
    </List>
    )
}

export default UserList