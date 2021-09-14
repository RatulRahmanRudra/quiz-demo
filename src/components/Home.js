/* eslint-disable jsx-a11y/no-onchange */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Home.css';

const Home = () => {

  const categoryList = [
    {name:"Genearal knowledge" , id: "9" },
    {name:"Books" , id: "10" },
    {name:"Film" , id: "11" },
    {name:"Music" , id: "12" },
    {name:"Random" , id: "" },

  ]

   
  const [category, setCategory] = useState('')
  const [name, setName] = useState('');
  const [diff, setDiff] = useState('');
  
  
  

  return ( 
    <div id="home-container">
      
      <h1>Welcome to WINIT</h1>
      
      <form className="input-field">
        
        <section className="name">
          <label htmlFor="name">Your Name: <input 
            type="text"
            id="name"
            value={name}
            onChange={
              (e) => {
                setName(e.target.value);
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

      </form>
      <Link 
        to="/quiz"
        className="start-button"

      >Start</Link>
    </div>
  );

  

}
 
export default Home;