import React from 'react'
import { Datagrid, DeleteButton, EditButton, List, TextField, TextInput } from 'react-admin'

const ProductList = (props) => {

  const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

  return (
    <List {...props} filters={postFilters}>
        <Datagrid>
        <TextField source='id'/>
        <TextField source='ref'/>
        <TextField source='name'/>
        <TextField source='category'/>
        <TextField source='quantity'/>
        <TextField source='image'/>
        <TextField source='price'/>
        <EditButton basePath='/products'/>
        <DeleteButton basePath='/products'/>
        </Datagrid>
    </List>
    )
}

export default ProductList