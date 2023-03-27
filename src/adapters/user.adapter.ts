export const createUserAdapter = (user: any) => ({ //adaptamos la info que necesitemos de la api
  name: user.data.name,
  gender: user.data.gender,
  status: user.data.status
});
