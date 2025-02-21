import React, { useState, useCallback, useEffect } from 'react';
import UserModel from './userModel';

const RegisterView = () => {
  const [user, setUser] = useState(UserModel);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }, []);

  const handleRegister = useCallback(() => {
    console.log(`Usuario registrado: ${user.username}`);
  }, [user]);

  const handleCancel = useCallback(() => {
    console.log('Registro cancelado');
  }, []);

  useEffect(() => {
    console.log('Registro de usuario montado');
    return () => {
      console.log('Registro de usuario desmontado');
    };
  }, []);

  return (
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" value={user.username} onChange={handleInputChange} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={user.email} onChange={handleInputChange} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" value={user.password} onChange={handleInputChange} />
      <button onClick={handleRegister}>Registrar</button>
      <button onClick={handleCancel}>Cancelar</button>
    </div>
  );
};

export default RegisterView;
