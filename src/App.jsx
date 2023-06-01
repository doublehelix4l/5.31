import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react'
import './index.css'

let puppyPass = 0
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const puppyPass = puppies.find((pup)=> pup.id === featPupId)

  function handleClick(obj) {
   //setFeatPupId(obj)
    //console.log("puppy id: ", setFeatPupId(obj.id))
  }

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={handleClick} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
      {featPupId && (
  <div>
    <h2>{featuredPup.name}</h2>
    <ul>
      <li>Age: {featuredPup.age}</li>
      <li>Email: {featuredPup.email}</li>
    </ul>
  </div>
)}
    </div>
  );
}

export default App
