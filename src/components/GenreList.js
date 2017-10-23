import React from 'react';
import '../App.css';

const GenreList = ({ genres }) => {
  return (
    <div>
      {
        genres.map((genre, i) => {
          if (genre === genres[genres.length - 1]) {
            genre = `${genre}`;
          } else {
            genre = `${genre}, `
          }
          return <span key={i}>{genre}</span>
        })
      }
    </div>
  );
}

export default GenreList;