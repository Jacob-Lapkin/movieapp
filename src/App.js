import './App.css';
import { useState, useRef } from 'react';
import Card from './Cards';

function App() {
  const [data, setData] = useState([])
  const searchTerm = useRef()


  var test = {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}
  async function GetMovies(movie) {
    var url = `http://www.omdbapi.com/?i=tt3896198&apikey=b9a30533&s=${movie}`
    try {
      const response = await fetch(url)
      const responsedData = await response.json()
      setData(responsedData.Search)
      console.log(responsedData.Search)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
    <div className='wrapper'>
      <div className='title-div'>
        <p className='title'>Movielands Hub</p>
      </div>
      <div className='search-div'>
        <input placeholder='Search Movie' ref={searchTerm} className='search-input'/>
        <button className='search-button' onClick={()=> GetMovies(searchTerm.current.value)}><i className="fa fa-search fa-2x" aria-hidden="true"></i></button>
        </div>

      <div className='ult-container'>
      <div className='row mt-5 movie-container'> 
       {data.map((movies)=>(
       <Card movie={movies} />

       ))}
      </div> 
      </div>
      
    </div>
    </>
  );
}

export default App;
