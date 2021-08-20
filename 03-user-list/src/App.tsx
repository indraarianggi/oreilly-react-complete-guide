import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

export interface IUser {
  id: string;
  username: string;
  age: string;
}

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const addUserHandler = (inputedData: Omit<IUser, "id">) => {
    setUsers((prevValues) => {
      return [{ id: Math.random().toString(), ...inputedData }, ...prevValues];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </>
  );
};

export default App;
