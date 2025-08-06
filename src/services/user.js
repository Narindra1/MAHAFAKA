import { apiClient } from "./apiClient";

const profil = async () => {
  //maka ilay requete stocker ao am localStorage
  //   const tokenValue = localStorage.getItem("token");
  //manao requete get: sy mandefa ilay token mba hahafahana maka ny info an'ilay user izay manana an'ilay token izay nalefa
  //   const res8 = await axios.get("https://dev.mahafaka.com/api/profil", {
  //     headers: {
  //       Authorization: `Bearer ${tokenValue}`,
  //     },
  //   });

  const res = await apiClient.execute({
    url: "/api/profil",
    method: "GET",
  });
  const response = {
    data: res.data,
    status: res.success,
  };
  console.log("Voici les information de ton profil:", response);
  //returner-na ilay donné azo avy any amilay requete
  return response;
};
export { profil };
