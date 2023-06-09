import { Fragment, useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import uuid4 from 'uuid4';

function App() {
  const [list, setList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setList((prev) => {
      return [...prev, {name: uName, age: uAge, id: uuid4()}]
    });
  }

  return (
    <Fragment>
      <AddUser onAddUser = {addUserHandler} />
      <UsersList users = {list} />
    </Fragment>
  );
}

export default App;
