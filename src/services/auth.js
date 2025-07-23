import { apiClient } from "./apiClient";

const login_ = async (email, password, a_vis) => {
  const res = await axios.post("https://dev.mahafaka.com/api/auth/login", {
    email: "0340000000",
    password: "12345678",
    a_vis: 0,
  });
  localStorage.setItem("token", res.data.data.token);
  console.log("resdata", res.data, res.data.data.token);
};

//=========================================================================================

function saveSuccessLogin(token) {
  localStorage.setItem("token", token);
}

function successResponseAuth(data) {
  return {
    data: data,
    message: "operation successfull",
    status: 1,
  };
}
function failResponseAuth(data) {
  return {
    data: data,
    message: "operation failed",
    status: 0,
  };
}

//==========================================================================================

// const signIn = async (userData) => {
//   const res = await axios.post("https://dev.mahafaka.com/api/auth/register", {
//     nom: userData.nom,
//     pseudo: userData.pseudo,
//     genre: userData.genre,
//     phone: userData.phone,
//     annee_naissance: userData.annee_naissance,
//     lieu_residence: userData.lieu_residence,
//     email: userData.email,
//     password: userData.password,
//   });
//   const httpRequestStatus = res.status;
//   const responseData = res.data;

//   if (httpRequestStatus == 200 && responseData.status == 1) {
//     saveSuccessLogin(responseData.data.token);
//     return successResponseAuth("félicitation, vous êtes bien enregistrer");
//   } else {
//     return failResponseAuth("un erreur s'est produit");
//   }
// };
const signIn = async (userData) => {
  const res = await apiClient.execute({
    url: "/api/auth/register",
    method: "POST",
    data: {
      nom: userData.nom,
      pseudo: userData.pseudo,
      genre: userData.genre,
      phone: userData.phone,
      annee_naissance: userData.annee_naissance,
      lieu_residence: userData.lieu_residence,
      email: userData.email,
      password: userData.password,
    },
  });
  const response = {
    data: res.data,
    status: res.success,
  };
  return response;
};

//==========================================================================================

// const login = async (authData) => {
//   const res = await axios.post("https://dev.mahafaka.com/api/auth/login", {
//     email: authData.email,
//     password: authData.password,
//     a_vis: authData.a_vis,
//   });

//   const httpRequestStatus = res.status;
//   const responseData = res.data;

//   if (httpRequestStatus == 200 && responseData.status == 1) {
//     saveSuccessLogin(responseData.data.token);
//     return successResponseAuth("connexion effectué avec succès");
//   } else {
//     return failResponseAuth("email ou mot de passe invalide");
//   }
// };
const login = async (authData) => {
  const res = await apiClient.execute({
    url: "/api/auth/login",
    method: "POST",
    data: {
      email: authData.email,
      password: authData.password,
      a_vis: authData.a_vis,
    },
  });
  if (res.success) {
    saveSuccessLogin(res.data.token);
    return successResponseAuth("connexion effectué avec succès");
  } else {
    return failResponseAuth("email ou mot de passe invalide");
  }

  const response = {
    data: res.data,
    status: res.success,
  };
  return response;
};

//==========================================================================================

// const setForgotPassword = async (emailUser) => {
//   const res = await axios.post(
//     "https://dev.mahafaka.com/api/auth/forgot-password",
//     {
//       email: emailUser.email,
//     }
//   );
//   const httpRequestStatus = res.status;
//   const responseData = res.data;

//   if (httpRequestStatus == 200 && responseData.status == 1) {
//     saveSuccessLogin(responseData.data.token);
//     return successResponseAuth("votre code a été bien envoyer avec succes");
//   } else {
//     return failResponseAuth("on n'a pas trouvé un utilisateur avec cet email");
//   }
// };

const setForgotPassword = async (emailUser) => {
  const res = await apiClient.execute({
    url: "/api/auth/forgot-password",
    method: "POST",
    data: {
      email: emailUser.email,
    },
  });
  const response = {
    data: res.data,
    status: res.success,
  };
  return response;
};

//==========================================================================================

// const resetPassword = async (newData) => {
//   const res2 = await axios.post(
//     "https://dev.mahafaka.com/api/auth/reset-password",
//     {
//       code_validation: newData.code_validation,
//       new_password: newData.new_password,
//     }
//   );
//   const httpRequestStatus = res2.status;
//   const responseData = res2.data;

//   if (httpRequestStatus == 200 && responseData.status == 1) {
//     saveSuccessLogin(responseData.data.token);
//     return successResponseAuth("vous êtes à nouveau connectés");
//   } else {
//     return failResponseAuth("code ou mot de passe invalide");
//   }
// };
const resetPassword = async (newData) => {
  const res = await apiClient.execute({
    url: "/api/auth/reset-password",
    method: "POST",
    data: {
      code_validation: newData.code_validation,
      new_password: newData.new_password,
    },
  });
  const response = {
    data: res.data,
    status: res.success,
  };
  return response;
};

//=========================================================================================

// const logout = async () => {
//   /*prepare request  */
//   //maka token
//   const tokenValue = localStorage.getItem("token");
//   /*execute request */
//   //manao requete post mandefa ilay token
//   const res3 = await axios.post(
//     "https://dev.mahafaka.com/api/auth/logout",
//     {},
//     {
//       headers: {
//         Authorization: `Bearer ${tokenValue}`,
//       },
//     }
//   );
//   /*response treatment*/
//   //mi-stocker ilay status an'ilay requete sy ilay reponse n'ilay requete anaty variable
//   const httpRequestStatus = res3.status;
//   const responseData = res3.data;

//   //mi-gerer cas 2: rah 200 ny status an'ilay requete sy 1 ny status an'ilay donnée dia mitourner message
//   //de succes sinon, mamoaka message d'erreur
//   if (httpRequestStatus == 200 && responseData.status == 1) {
//     saveSuccessLogin(responseData.data.token);
//     return successResponseAuth("operation successfull");
//   } else {
//     return failResponseAuth("operation failed");
//   }
// };

const logout = async () => {
  const res = await apiClient.execute({
    url: "/api/auth/logout",
    method: "POST",
  });
  const response = {
    data: res.data,
    status: res.success,
  };
  return response;
};

export { login, setForgotPassword, resetPassword, signIn, logout };
