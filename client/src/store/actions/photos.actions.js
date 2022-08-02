import { CREATE_PHOTO } from "../types";

export const createPhoto = (photo) => ({
  type: CREATE_PHOTO,
  payload: photo,
});
