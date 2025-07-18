import axios from "axios";
const profil = async () => {
  const tokenValue = localStorage.getItem("token");
  const res = await axios.get("https://dev.mahafaka.com/api/profil", {
    headers: {
      Authorization: `Bearer ${tokenValue}`,
    },
  });

  const httpRequestStatus = res.status;
  const responseData = res.data;
  console.log("Voici les information de ton profil:", responseData.data);
  return responseData.data;
};
export { profil };
