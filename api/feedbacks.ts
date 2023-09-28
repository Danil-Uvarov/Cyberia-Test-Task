import axios from "axios";
export const feedbacks = (payload: FormData) => {
  axios.post("https://dev.backend.cyberia.studio/api/v1/feedbacks", payload);
};
