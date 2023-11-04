import React from 'react'
import { Datagrid, DeleteButton, Edit, EditButton, List, TextField } from 'react-admin'

const ProductList = (props) => {
  return (
    <List {...props}>
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