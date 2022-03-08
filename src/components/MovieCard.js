import React from "react";

export default class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.title}</div>
          <div className="plot">{movie.plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>

            <button className="favourite-btn">Favorite</button>
          </div>
        </div>
      </div>
    );
  }
}
