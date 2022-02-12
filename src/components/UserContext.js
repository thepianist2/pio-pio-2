import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState();

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;