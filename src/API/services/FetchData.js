import api from "../API";

class FetchQuiz{
  getQuiz = (url) => api.get(url);

  getQuiz = () => api.get();
}


export default new FetchQuiz();