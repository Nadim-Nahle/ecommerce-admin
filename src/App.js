import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import './App.css';
import { dataProvider } from './dataProvider';

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="products" list={ListGuesser} />
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
}

export default App;
