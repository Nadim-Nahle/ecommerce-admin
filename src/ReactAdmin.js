import { Admin, Resource } from 'react-admin';
import './App.css';
import dataProvider from './dataProvider';
import ProductCreate from './ProductCreate';
import ProductList from './ProductList';
import UserCreate from './UserCreate';
import UserList from './UserList';
import UserUpdate from './UserUpdate';
import ProductUpdate from './ProductUpdate';

const ReactAdmin = () => {
    return (
        <Admin dataProvider={dataProvider}>
          <Resource name="products" list={ProductList} edit={ProductUpdate} create={ProductCreate}/>
          <Resource name="users" list={UserList} edit={UserUpdate} create={UserCreate}/>
        </Admin>
      );
}

export default ReactAdmin