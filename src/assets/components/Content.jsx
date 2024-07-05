import moviePic from '../img/movie1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function Content() {


   const [movies, setMovies] = useState([])

   useEffect(() => {
      fetchMovies();
   }, [])


   const fetchMovies = async (query = 'a') => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=20384d97a60b1bc7703ffa54852f1607&language=en-US&page=1`

      try {
         const resp = await fetch(url)
         const data = await resp.json()
         setMovies(data.results)
      } catch (error) {
         console.log('hataaaa', error)
      }
   }

   return (
      <>
         <div className="container">
            <div className="row">
               <div className="col-xl-12">
                  <div className="main-card">
                     <ul id="moviesList">
                        {movies.map(movie => (
                           <li className="mt-4" key={movie.id}>
                              <div className="movie-card mb-3">
                                 <div className="movie-poster">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="img-fluid" alt={movie.title} />
                                 </div>
                                 <div className="movie-detail-wrapper">
                                    <div className="movie-detail">
                                       <h2>{movie.title}</h2>
                                       <p><span>{movie.release_date}</span></p>
                                       <p><i className="bi bi-star-fill"></i> {movie.vote_average}</p>
                                    </div>
                                    <div className="info">
                                       <Link
                                          to="/detail"
                                          data-toggle="tooltip"
                                          title="Click Me!">
                                          {/* <a href="#" data-toggle="tooltip" title="Click Me!"> */}
                                          <FontAwesomeIcon icon={faCircleInfo} className='movie-info' />
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        ))}

                        {/* <li className="mt-4">
                           <div className="movie-card mb-3">
                              <div className="movie-poster">
                                 <img src={moviePic} className="img-fluid" alt="title" />
                              </div>
                              <div className="movie-detail-wrapper">
                                 <div className="movie-detail">
                                    <h2>Esaretin Bedeli</h2>
                                    <p><span>Frank Darabont</span></p>
                                    <p><span>2019</span></p>
                                    <p><i className="bi bi-star-fill"></i> 9.3</p>
                                 </div>

                                 <div className="info">
                                    <a href="#" data-toggle="tooltip" title="Click Me!">
                                       <FontAwesomeIcon icon={faCircleInfo} className='movie-info' />
                                    </a>
                              </div>
                           </div>
                        </div>
                     </li> */}
                     </ul>
                  </div>
               </div>
            </div>
         </div>

      </>
   )
}