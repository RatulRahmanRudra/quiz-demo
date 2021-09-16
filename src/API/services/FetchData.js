import axios from 'axios';

class FetchQuiz{
  getQuiz = (cat, diff) => {
    const url = `https://opentdb.com/api.php?amount=10&type=multiple&category=${cat}&difficulty=${diff}`;
    return axios.get(url);
  }
}


export default new FetchQuiz();