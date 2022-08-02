import httpClient from "../api/httpClient";

export default class GeneralService {
  static async getAllPhotos(filter) {
    const { data } = await httpClient.get(`/get_all_photos/${filter}`);
    return data;
  }

  static async getSingleUser(input) {
    const { data } = await httpClient.get(`/fetch_user/${input.id}`);
    return data;
  }
}
