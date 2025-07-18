import axios from "axios";

const login_ = async (email, password, a_vis) => {
  const res = await axios.post("https://dev.mahafaka.com/api/auth/login", {
    email: "0340000000",
    password: "12345678",
    a_vis: 0,
  });
  localStorage.setItem("token", res.data.data.token);
  console.log("resdata", res.data, res.data.data.token);
};

function saveSuccessLogin(token) {
  localStorage.setItem("token", token);
}

const login = async (authData) => {
  const res = await axios.post("https://dev.mahafaka.com/api/auth/login", {
    email: authData.email,
    password: authData.password,
    a_vis: authData.a_vis,
  });

  const httpRequestStatus = res.status;
  const responseData = res.data;

  if (httpRequestStatus == 200 && responseData.status == 1) {
    saveSuccessLogin(responseData.data.token);
    return {
      status: 1,
      message: "connexion effectué avec succès",
    };
  } else {
    return {
      status: 0,
      message: "email ou mot de passe invalide",
    };
  }
};

export { login };
