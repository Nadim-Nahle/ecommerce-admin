import { Admin, Resource, ListGuesser, EditGuesser, Create, SimpleForm, TextInput } from 'react-admin';
import './App.css';
import dataProvider from './dataProvider';
import ProductCreate from './ProductCreate';
import ProductList from './ProductList';

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="products" list={ProductList} edit={EditGuesser} create={ProductCreate}/>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
}


export default App;
