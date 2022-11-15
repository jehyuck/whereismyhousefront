import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/qna/",
  headers: {
    "Content-Type": "application/json",
  },
});