import api from "helpers/api";

const userService = {
  signup: (signupRequest) => {
    console.log(api.defaults.baseURL)
    return api.post("api/auth/signup", signupRequest);
  },
};

export default userService;