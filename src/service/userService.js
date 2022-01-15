import api from "helpers/api";

const userService = {
  signup: (signupRequest) => {
    return api.post("api/auth/signup", signupRequest);
  },
};

export default userService;