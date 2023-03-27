import { User } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

//Inicializar las variables con valores por defecto -- Buena Practica
export const UserEmptyState: User = {
  name: '',
  gender: '',
  status: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState: UserEmptyState,
  reducers: { 
    createUser: (state, action) => action.payload, //retornamos el usuario nuevo
    modifyUser: (state, action) => ({ ...state, ...action.payload }), //patcheamos los nuevos estados
    resetUser: () => UserEmptyState //usamos nuestro objeto creado con los valores por defecto
  }
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer; //para utilizarlo donde queramos
