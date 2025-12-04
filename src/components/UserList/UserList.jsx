import { useEffect, useState } from 'react';

const UserList = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  return (
    <>
      <h1>Användarlista komponent</h1>
      <input
        type="text"
        name=""
        id=""
        placeholder="add user"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(name);
          const newArray = [...users, name];
          setUsers(newArray);
        }}
      >
        Add User {name}
      </button>
      <button
        onClick={() => {
          const newArray = users.sort();
          setUsers(newArray);
          console.log(JSON.stringify(users));
        }}
      >
        filter list
      </button>
      {users.length > 0 && users.map((item, i) => <p key={i}>{item}</p>)}
    </>
  );
};
export default UserList;
