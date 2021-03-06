import axios from "axios";

const apiSource = axios.create({
  baseURL: "https://www.breakingbadapi.com/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getCharacters() {
    return apiSource.get("/characters");
  },
  getCharacter(char_id) {
    return apiSource.get("/characters/" + char_id);
  },
};
