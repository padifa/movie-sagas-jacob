import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const movieListStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  gap: 30px; 
  width: 100%;
  max-width: 1200px; \
  justify-content: center;
  padding: 20px;
`;

const movieItemStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;

  img {
    width: 100%; 
    height: 300px; 
    object-fit: cover; 
    border-radius: 8px;
    margin: 4px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  h3 {
    margin-top: 10px;
    font-size: 1.1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
    width: 100%; 
  }
`;

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main css={containerStyles} className="container">
      <h1>MovieList</h1>
      <section className="movies row" css={movieListStyles}>
        {movies.map(movie => {
          return (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
            <div data-testid='movieItem' css={movieItemStyles}>
              
              <img data-testid="toDetails" src={movie.poster} alt={movie.title}/>
            </div>
            </Link>
            <h3>{movie.title}</h3>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
