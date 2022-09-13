import './App.css';
import { useState } from 'react';
const movieList = {
  
  "Romantic": [
    {
      Name: "Student Of the year",
      image: "/images/soty.jpg",
      youtube: "https://youtu.be/tQ0mzXRk-oM"
    },
    {
      Name: "Yeh Jawaani Hai Deewani",
      image: "/images/yjhd.jpg",
      youtube: "https://youtu.be/Rbp2XUSeUNE"
    },
    {
      Name: "Ae Dil Hai Mushkil",
      image: "/images/adhm.jpg",
      youtube: "https://youtu.be/Z_PODraXg4E"
    }
  ],

  "Action": [
    {
      Name: "War",
      image: "/images/war-image.jpg",
      youtube: "https://youtu.be/tQ0mzXRk-oM"
    },
    {
      Name: "Don 2",
      image: "/images/don-2.jpg",
      youtube: "https://youtu.be/_X5w-6PqoZ0"
    },
    {
      Name: "Agent Vinod",
      image: "/images/agent-vinod.jpg",
      youtube: "https://youtu.be/g7pbAIqUR4M"
    }
  ],


  "Comedy": [
    {
      Name: "Dhamaal",
      image: "/images/dhamaal.jpg",
      youtube: "https://youtu.be/6xdRuJoEMoU"
    },
    {
      Name: "Bhool Bhulaiyaa",
      image: "/images/bool-bhulaiyaa.jpg",
      youtube: "hhttps://youtu.be/jzYxbnHHhY4"
    },
    {
      Name: "3 Idiots",
      image: "/images/3-Idiots.jpg",
      youtube: "https://youtu.be/K0eDlFX9GMc"
    }
  ],

  "Thriller": [
    {
      Name: "Drishyam",
      image: "/images/drishyam.jpg",
      youtube: "https://youtu.be/AuuX2j14NBg"
    },
    {
      Name: "NH 10",
      image: "/images/nh-10.jpg",
      youtube: "https://youtu.be/A9icNqWlylw"
    },
    {
      Name: "Talvar",
      image: "/images/talvar.jpg",
      youtube: "https://youtu.be/aQNMsw8Ljjc"
    }
  ]

}
function App() {

  const [movieName, setMovieNmae] = useState('Action');

  function genreClickHandler(genre) {
    setMovieNmae(genre);
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
            <a className='movie-info' href={movie.youtube} key={movie.number} target="_blank" >
              <img src={movie.image} alt={movie.Name} className='movie-image'/>
              <span className='movie-name'>{movie.Name}</span>
            </a>
          )}
        </main>
    </div>
  );
}

export default App;


