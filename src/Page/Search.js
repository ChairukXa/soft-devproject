import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './page.css'

function Search(){

  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    if(value.length > 0){
      fetch('https://ygo-project-default-rtdb.asia-southeast1.firebasedatabase.app/Card.json').then(
        response => response.json()
      ).then(responseData => {
        setResult([]);
        let searchQuery = value.toLowerCase();
        for(const key in responseData) {
          let card = responseData[key].name.toLowerCase() || responseData[key].archetype.toLowerCase();
          if(card.slice(0, searchQuery.length).indexOf(searchQuery) !== -1){
            setResult((prevResult) => {
              return [...prevResult, responseData[key].name , responseData[key].url]
            })
          }
        }
      }).catch(error => {
          console.log(error);
      })
    }else{
      setResult([]);
    }

  },[value])

  return(
    <div className='search'>
     <p className="titleText"></p>
       <input type="text"
       placeholder='Search...'
       className="searchBar"
       onChange={(event)=> setValue(event.target.value)}
       value={value}
      />
      <div className="searchBack">
        {result.map((result, index) => (
          <Link to={result} key={index}>
            <div className="searchEntry">
                {result}
            </div>
          </Link>
        ))}
      </div>
   </div>
  );
}



export default Search