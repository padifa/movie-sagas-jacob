import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { css, styles } from '@emotion/react';
import { Link } from 'react-router-dom';

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;

const backButtonStyles = styles.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  text-decoration: none;

  &:hover {
    background-color: gray;
  }
`;

const detailsStyles = css`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 10px;
    max-width: 500px;
  }
`;

function MovieDetail() {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const movie = useSelector((state) => 
    state.movies.find((movie) => movie.id === Number(id))
  );

  useEffect(() => {
    if (!movie) {
      dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: id });
    }
  }, [dispatch, id, movie]);

  if (!movie) {
    return <div>Loading movie details...</div>;
  }

  return (
    <div css={containerStyles}>
      <div css={detailsStyles}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>Genre: {movie.genre}</p>
      <p>Release Date: {movie.release_date}</p>
      </div>
      <Link to="/">
      <backButtonStyles>
        Back to Movies
        </backButtonStyles>
      </Link>
    </div>
  );
}

export default MovieDetail;