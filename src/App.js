import "./App.css";
import { AddColor } from "./AddColor";
import { Counter } from "./Counter";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, useParams, Navigate, } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const INTIAL_MOVIE_LIST = 
[
  {
    id: "100",
    name: "RRR",
    poster:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
  },
  {
    id: "101",
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU"
  },
  {
    id: "102",
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    trailer: "https://www.youtube.com/embed/38A__WT3-o0"
  },
  {
    id: "103",
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
  },
  {
    id: "104",
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
  },
  {
    id: "105",
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    id: "106",
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
  },
  {
    id: "107",
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
  }
];



export default function App() {
  // const users = [
  //   {
  //   name : "madhan",
  //   pic:"https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2020/11/11/133486-virat-kohli-pti-j.jpg?itok=9xdid56G&c=4d942a74b30a9cd43bb1639dd6002b86"
  // },
  //   {
  //   name : "faizal",
  //   pic: "https://i.pinimg.com/originals/ba/bb/f4/babbf4905c628305645d625992313222.jpg" 
  //   },
  //   {
  //   name : "sonu",
  //   pic:"https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
  //   }
  // ]
  const people = [ "madhan","faizal","sonu","maddy","billu"]

  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);
  
 
  return (
    <div className="App">
      {/* {users.map((user)=>(
       <Msg
       name={user.name} pic={user.pic}
      />
      ))}
      

      {people.map( personName => <Welcome name={personName} /> )} */}
      {/* <Counter />
      <Counter />
      <Counter /> */}
    
       {/* <AddColor /> */}
       
      {/* <MovieList /> */}

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">movies</Link>
          </li>
          <li>
            <Link to="/color-game">Add-color</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList movieList={movieList} />} />
        <Route path="/films" element={<Navigate repalce to="/movies"  />} />
        <Route path="/movies/:id" element={<MovieDetails movieList={movieList} setMovieList={setMovieList} />} />
        <Route path="/color-game" element={<AddColor />} />
        {/* <Route path="/users" element={<UserList />} /> */}
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <img
      src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
      alt="404 not found"
      className="not-found"
      />
    </div>
  )
}

function MovieDetails({movieList}) {
  const { id } = useParams();
  const movie = INTIAL_MOVIE_LIST[id];
  console.log(movie);
  const navigate = useNavigate();
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  }
  return(
    <div>
      <iframe 
      width="100%" 
      height="570" 
      src={movie.trailer} 
      title="No Country For Old Men (2007) Official Trailer - Tommy Lee Jones, Javier Bardem Movie HD"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <div className="movie-detail-container">
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        <p style={styles} classnName="movie-rating">
          ???{movie.rating}</p>
      </div>
      <p className="movie-summary">{movie.summary}</p>
      <Button onClick={() => navigate(-1)} variant="outlined">Back</Button>
     </div>
    </div>
  );
}

function Home(){
  return <h1>Welcome to the movie app</h1>
}

function MovieList({movieList}) {
  // const movieList = INTIAL_MOVIE_LIST;
  

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  return (
    <div>
      <div className="add-movie-form">
        <TextField onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />
        <TextField onChange={(event) => setPoster(event.target.value)} label="Poster" variant="outlined" />
       
        <TextField onChange={(event) => setRating(event.target.value)} label="Rating" variant="outlined" />
        
        <TextField onChange={(event) => setSummary(event.target.value)} label="Summary" variant="outlined" />
       
        <TextField onChange={(event) => setTrailer(event.target.value)} label="Trailer" variant="outlined" />
        <Button onClick={addmovie} variant="outlined">Add Movie</Button>
      
      </div>
      <div className="movie-list">
       {movieList.map((mv, index)=>(
         <Movie key={index} movie={mv} id={index} />
       ))}
      </div>
    </div>
  )
}

function Movie( { movie,id }){
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  }
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const summaryStyles = {
    display: show ? "block" : "none",
  };
  return(
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <div className="movie-specs">
      <h2 className="movie-name">{movie.name}</h2>
      <button onClick={() => navigate("/movies/" + id)}>info</button>
      <p style={ styles } classnName="movie-rating">???{movie.rating}</p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle Summary</button>
      <p style={summaryStyles} className="movie-summary">{movie.summary}</p>
      <Counter />
    </div>


  )
}
