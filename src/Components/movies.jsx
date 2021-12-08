import React from "react";
import { getMovies } from "./../services/fakeMovieService";

class Movies extends React.Component {
  state = { movies: getMovies() };

  handleDelete = (movie) => {
    this.setState({
      movies: this.state.movies.filter(
        (movieState) => movieState._id !== movie._id
      ),
    });
  };
  render() {
    if (this.state.movies.length === 0)
      return (
        <main className="container">
          <h3>there is no movies in the database</h3>{" "}
        </main>
      );
    return (
      <main className="container">
        <h3>showing {this.state.movies.length} movies in the database</h3>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title} </td>
                <td>{movie.genre.name} </td>

                <td>{movie.numberInStock} </td>
                <td>{movie.dailyRentalRate} </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

export default Movies;
