import Cookies from "js-cookie";
import httpClient from "../api/httpClient";

const token = Cookies.get("access_token");
const config = {
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
};

export default class AdminService {
  static async getDashboardStats() {
    const { data } = await httpClient.get("/admin/get_dashboard_stats", config);
    return data;
  }
  static async getAllPhotos() {
    const { data } = await httpClient.get("/admin/get_all_photos", config);
    return data;
  }
  static async getAllUsers() {
    const { data } = await httpClient.get("/admin/get_all_users", config);
    return data;
  }
}
