import axios from "axios";

const api = axios.create({
  baseURL:"https://opentdb.com/api.php?amount=10&type=multiple"
})



export default api;





