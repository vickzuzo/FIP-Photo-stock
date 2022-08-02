import httpClient from "../api/httpClient";

export default class AuthService {
  static async loginUser({ email, password }) {
    const { data } = await httpClient.post("/auth/login", {
      email,
      password,
    });
    return data;
  }

  static async registerUser(input) {
    const { data } = await httpClient.post("/auth/register", {
      email: input.email,
      password: input.password,
      username: input.username,
    });
    return data;
  }

  static async verifyAccount(input) {
    const { data } = await httpClient.post("/auth/verify_account", {
      email: input.email,
      code: input.code,
    });
    return data;
  }

  static async forgotPassword({ email }) {
    const { data } = await httpClient.post("/auth/verify_account", {
      email,
    });
    return data;
  }
}
