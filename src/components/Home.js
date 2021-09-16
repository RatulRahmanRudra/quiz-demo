/* eslint-disable jsx-a11y/no-onchange */
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import '../styles/components/Home.css';

const Home = () => {

  const categoryList = [
    {name:"Genearal knowledge" , id: "9" },
    {name:"Books" , id: "10" },
    {name:"Film" , id: "11" },
    {name:"Music" , id: "12" },
    {name:"Random" , id: "" },

  ]

  const history = useHistory();
   
  const [category, setCategory] = useState('')
  const [userName, setUserName] = useState('');
  const [diff, setDiff] = useState('easy');
  
  const handleSubmit = () => {
    console.log('started');
    if(!userName){
      alert("please enter your name");
      return;
    }
    history.push({  
      pathname:"/quiz",
      state:{
        userName,
        category,
        diff
      }
    })
  }
  

  return ( 
    <div id="home-container">
      
      <h1>Welcome to DUMMY QUIZ</h1>
      <form className="input-field">
        
        <section className="name">
          <label htmlFor="name">Your Name: <input 
            type="text"
            id="name"
            value={userName}
            onChange={
              (e) => {
                setUserName(e.target.value);
              }
            }
            required
          />
          </label>
        </section>
        
        <section className="category">
          <label htmlFor="category">
            Select Catagory: <select 
              id="category"
              name="category"
              value={category}
              onChange={
                (e) => {
                  setCategory(e.target.value);
                  // setUrl(`&category=&${category}difficulty=${diff}&type=multiple`);
                }
              }
            >
              {
                categoryList.map(
                  (currentCategory) => 
                    <option 
                      value={currentCategory.id} 
                      key={currentCategory.id}
                    >{currentCategory.name}</option>
                )
              }
            </select>
          </label>
        </section>

        <section className="diff">
          <label htmlFor="diff">
            Select Difficulty: <select 
              id="diff"
              value={diff}
              onChange={
                (e) => {
                  setDiff(e.target.value);
                }
              }
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
        </section>
        
        <button
          type="button"
          className = "start-button"
          onClick={() => handleSubmit()}
        >
          start
        </button>

      </form>
    </div>
  );

  

}
 
export default Home;