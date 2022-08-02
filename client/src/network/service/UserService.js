import Cookies from "js-cookie";
import httpClient from "../api/httpClient";

const token = Cookies.get("access_token");
const config = {
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
};

export default class UserService {
  static async addPhoto(formdata) {
    const { data } = await httpClient.post("/user/add_photo", formdata, config);
    return data;
  }
  static async getAllPhotos() {
    const { data } = await httpClient.get("/user/get_all_photos", config);
    return data;
  }

  static async updatePhoto(formdata, id) {
    const { data } = await httpClient.put(
      `/user/update_photo/${id}`,
      formdata,
      config
    );
    return data;
  }

  static async deletePhoto(id) {
    const { data } = await httpClient.delete(
      `/user/delete_photo/${id}`,
      config
    );
    return data;
  }
}
