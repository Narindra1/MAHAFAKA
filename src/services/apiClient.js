import axios from "axios";

// /*prepare request  */ header,data,method,url
// /*execute request */ axios get post

// /*response treatment*/ if token expired

export const apiClient = {
  getUrl(url) {
    const baseUrl = "https://dev.mahafaka.com";
    return baseUrl + url;
  },
  getHeader(headers) {
    const tokenValue = localStorage.getItem("token");
    console.log(tokenValue);
    const defaultHeader = {
      Authorization: `Bearer ${tokenValue}`,
    };
    return { ...defaultHeader, ...headers };
  },

  async execute(params) {
    let { url, method = "GET", data = null, headers = {} } = params;

    url = this.getUrl(url);
    headers = this.getHeader(headers);

    try {
      const response = await axios({
        url,
        method,
        data,
        headers,
      });

      this.responseTreatment(response);
      return this.presentation(response);
    } catch (error) {
      console.log({
        error: error.message,
        status: error.response?.status,
      });
      return null;
    }
  },
  responseTreatment(response) {},
  presentation(response) {
    if (response.status == 200 && response.data.status == 1) {
      return {
        success: true,
        data: response.data.data,
      };
    } else {
      return {
        success: false,
        data: null,
      };
    }
  },
};
