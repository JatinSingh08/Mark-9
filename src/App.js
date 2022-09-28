import './App.css';
import { useState } from 'react';
const movieList = {

  "Comedy": [
    {
      Name: "Dhamaal",
      image: "https://wallpapercave.com/w/wp7805336.jpg",
      youtube: "https://youtu.be/6xdRuJoEMoU",
      rating: "4/5"
    },
    {
      Name: "Bhool Bhulaiyaa",
      image: "https://wallpaperaccess.com/full/8264684.jpg",
      youtube: "hhttps://youtu.be/jzYxbnHHhY4",
      rating: "3/5"
    },
    {
      Name: "3 Idiots",
      image: "https://wallpaperaccess.com/full/3574479.jpg",
      youtube: "https://youtu.be/K0eDlFX9GMc",
      rating: "5/5"
    }
  ],
  
  "Romantic": [
    {
      Name: "Student Of the year",
      image: "https://wallpapercave.com/wp/wp8202310.jpg",
      youtube: "https://youtu.be/tQ0mzXRk-oM",
      rating: "2/5"
    },
    {
      Name: "Yeh Jawaani Hai Deewani",
      image: "https://wallpapercave.com/wp/wp6754719.jpg",
      youtube: "https://youtu.be/Rbp2XUSeUNE",
      rating: "3/5"
    },
    {
      Name: "Ae Dil Hai Mushkil",
      image: "https://wallpapercave.com/wp/wp6584723.jpg",
      youtube: "https://youtu.be/Z_PODraXg4E",
      rating: "2/5"
    }
  ],

  "Action": [
    {
      Name: "War",
      image: "https://wallpaperaccess.com/full/2330954.jpg",
      youtube: "https://youtu.be/tQ0mzXRk-oM",
      rating: "3/5"
    },
    {
      Name: "Don 2",
      image: "https://wallpapercave.com/wp/wp2864025.jpg",
      youtube: "https://youtu.be/_X5w-6PqoZ0",
      rating: "3/5"
    },
    {
      Name: "Agent Vinod",
      image: "https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/51193699.jpg",
      youtube: "https://youtu.be/g7pbAIqUR4M",
      rating: "3/5"
    }
  ],


  

  "Thriller": [
    {
      Name: "Drishyam",
      image: "https://i.pinimg.com/236x/96/df/27/96df272c04f944b7d90eb92bf9731d3b.jpg",
      youtube: "https://youtu.be/AuuX2j14NBg",
      rating: "4/5"
    },
    {
      Name: "NH 10",
      image: "https://www.filmibeat.com/ph-big/2015/02/_14231218990.jpg",
      youtube: "https://youtu.be/A9icNqWlylw",
      rating: "4/5"
    },
    {
      Name: "Talvar",
      image: "https://wallpapercave.com/wp/wp6987085.jpg",
      youtube: "https://youtu.be/aQNMsw8Ljjc",
      rating: "3/5"
    }
  ]

}
function App() {

  const [movieName, setMovieName] = useState('Comedy');

  function genreClickHandler(genre) {
    setMovieName(genre);
  }
  return (
    <div className="App">
        <header className='header'>
          <h1 className='heading'>🎬Movie Mafia🍿</h1>
          <nav className='genre'>
            {Object.keys(movieList).map(genre => 
              <li key={genre} className='genre-name' onClick={() => genreClickHandler(genre)}>{genre}</li>
            )}
          </nav>
        </header>

        <div className='divider'></div>
        <h2 className='para'>Click on the image to watch the movie.</h2>

        <main className='container'>
          {movieList[movieName].map(movie => 
            <a className='movie-info' href={movie.youtube} key={movie.number} target="_blank" rel="noreferrer">
              <img src={movie.image} alt={movie.Name} className='movie-image' />
              <span className='movie-name' style={{fontWeight: 'bold', color: 'wheat'}}>{movie.Name}</span>
              <span className='movie-rating' style={{color: 'black', fontWeight: 'bold'}}>{movie.rating}</span>
            </a>
          )}
        </main>
    </div>
  );
}

export default App;


